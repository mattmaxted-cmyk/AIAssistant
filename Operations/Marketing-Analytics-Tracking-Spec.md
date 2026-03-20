# Marketing Analytics & Server-Side Tracking Spec

**Owner:** Matt (Digital Marketing Manager)
**Status:** Proposed
**Last Updated:** March 2026

---

## 1. Problem Statement

### 1.1 GA4 Data Accuracy

Google Analytics 4 (GA4) is currently unreliable for marketing attribution. The two most critical dimensions — **First User Source/Medium** and **Session Source/Medium** — produce inaccurate results when filtered against the **Book Demo** key event.

**What this means in practice:**

- We cannot accurately attribute which campaigns, channels, or paid placements are driving demo bookings.
- Reporting on top-of-funnel performance is unreliable. Spend decisions are being made without trustworthy signal.
- Cross-channel attribution (LinkedIn organic, paid social, Google Ads) cannot be validated within GA4.

**Root causes (likely):**

- Client-side GA4 tracking is blocked or degraded by ad blockers, browser privacy restrictions (Safari ITP, Firefox ETP), and cookie consent rejection. Estimates suggest 20–40% of web sessions go untracked via client-side JavaScript alone.
- The Hubspot-embedded demo booking form creates a session boundary — GA4 often loses the original source when a user navigates or is redirected into the Hubspot form flow.
- UTM parameters may be dropped, overwritten, or not correctly attributed when users interact with the embedded form on a different domain/subdomain.

### 1.2 HubSpot as a Reporting Workaround

HubSpot CRM data (contact source, deal source) is more accurate because form submissions write directly to contact records at the point of conversion. This captures the user's session data more reliably.

However, **HubSpot is not a suitable primary marketing reporting platform**:

- It lacks the granularity and flexibility needed for channel-level performance analysis.
- Custom reports are limited without a paid Marketing Hub tier.
- It cannot blend paid ad spend data with conversion data in a meaningful way.
- It is a CRM, not a BI/analytics tool — using it as one creates workarounds and blind spots.

### 1.3 Current State Summary

| Platform | Conversion Data Accuracy | Attribution Accuracy | Suitable as Primary Reporting Platform |
|---|---|---|---|
| GA4 | Poor (blocked/lost on form submit) | Poor | No |
| HubSpot | Good (form data captured accurately) | Moderate | No |
| Paid Platforms (Meta, Google) | Self-reported only | Biased | No |

---

## 2. Proposed Solution

### 2.1 Core Principle: Server-Side Tracking via Our Own Form

The fix is to **own the form**, then **send the data ourselves** — to every platform that needs it.

Currently, the demo booking form is a HubSpot-embedded form. This creates dependency on HubSpot's client-side JS to fire events, which is unreliable. Instead:

1. **Replace the HubSpot-embedded form with a native form** on the StoneRise website.
2. **On submission, our server sends the data** to HubSpot (CRM), GA4 (Measurement Protocol), Google Ads, and Meta Conversions API simultaneously.
3. **UTM parameters and attribution data** are captured at form load, stored in the form payload, and passed server-side with each submission — so attribution is never lost regardless of browser restrictions.

This means:
- The user never leaves our domain or interacts with a third-party JS form.
- No ad blocker or browser privacy restriction can intercept the conversion signal.
- Every platform receives accurate, consistent conversion data from a single source of truth.

---

## 3. Architecture

```
User visits stonerise.tech (any page)
    ↓
Browser: capture UTM params from URL → store in sessionStorage/cookie
    ↓
User navigates to /request-demo
    ↓
Native StoneRise form (rendered on our site, no third-party embed)
    ↓
User submits form
    ↓
Browser sends POST to StoneRise server endpoint (e.g. /api/demo-request)
    ↓
Server (Node.js / our existing Fastify API)
    ├─→ HubSpot API (create/update contact + deal in CRM)
    ├─→ GA4 Measurement Protocol (fire "book_demo" key event with UTM attribution)
    ├─→ Google Ads Conversion API (fire conversion event for Smart Bidding)
    └─→ Meta Conversions API (fire "Lead" or "Schedule" standard event)
    ↓
User sees confirmation page / thank you state
```

---

## 4. Data Flow in Detail

### 4.1 UTM Capture (Client-Side, On Page Load)

When any page loads on stonerise.tech, a lightweight script reads UTM parameters from the URL and stores them:

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- `gclid` (Google Click ID — required for Google Ads conversion import)
- `fbclid` (Facebook Click ID — required for Meta CAPI deduplication)
- `document.referrer` (fallback attribution)
- Timestamp of first session

These are stored in `sessionStorage` (or a first-party cookie with a 30-day window for cross-session attribution).

**This data travels with the form submission** so attribution is captured accurately even if the user takes days between clicking an ad and booking a demo.

### 4.2 Form Submission Payload

When the user submits the form, the POST body includes:

```json
{
  "firstName": "...",
  "lastName": "...",
  "email": "...",
  "company": "...",
  "phone": "...",
  "message": "...",
  "attribution": {
    "utm_source": "linkedin_michael",
    "utm_medium": "organic_social",
    "utm_campaign": "invoice_ai_procurement",
    "utm_content": "20260304_post1",
    "utm_term": "",
    "gclid": "...",
    "fbclid": "...",
    "referrer": "https://www.linkedin.com/...",
    "firstSeenAt": "2026-03-04T10:22:00Z"
  },
  "clientId": "GA4_client_id_from_cookie",
  "ipAddress": "captured server-side",
  "userAgent": "captured server-side"
}
```

### 4.3 HubSpot API (Server-Side)

The server calls the HubSpot Contacts API to create or update a contact record with:
- Full contact properties (name, email, company, phone)
- Attribution properties (UTM fields mapped to HubSpot contact properties)
- A deal created in the relevant pipeline stage ("Demo Requested")

This replaces the current HubSpot form embed. HubSpot CRM data remains accurate and intact.

**HubSpot custom contact properties required:**
- `hs_analytics_source_data_1` / `hs_analytics_source_data_2` (or custom UTM fields)
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` (custom)

### 4.4 GA4 Measurement Protocol (Server-Side)

The server fires a `book_demo` event to GA4 via the [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4):

- Uses the `client_id` captured from the user's `_ga` cookie (passed in the form payload) to link the server-side event to the correct GA4 user profile.
- Sends all UTM parameters as event parameters so attribution is correctly applied.
- Because this fires server-side, it bypasses all ad blockers and browser restrictions.

**Result:** GA4 now receives confirmed conversion events with accurate source/medium attribution. First User Source and Session Source on the `book_demo` key event become trustworthy.

### 4.5 Google Ads Conversion API (Server-Side)

The server sends a conversion hit via the [Google Ads Conversion API](https://developers.google.com/google-ads/api/docs/conversions/upload-clicks):

- Uses the `gclid` (Google Click ID) captured at session start to tie the conversion back to the exact paid ad click.
- This feeds Smart Bidding algorithms with accurate conversion signals — improving campaign optimisation.
- Bypasses browser restrictions entirely; conversions are no longer lost when users delete cookies or block tracking scripts.

### 4.6 Meta Conversions API (Server-Side)

The server sends a standard `Lead` or `Schedule` event via the [Meta Conversions API](https://developers.facebook.com/docs/marketing-api/conversions-api):

- Uses `fbclid` and hashed user data (email, phone) for event matching and deduplication against any client-side pixel events.
- Attribution is captured accurately even if the user's browser blocked the Meta Pixel.
- Improves Meta's ability to attribute conversions to the correct ad set and optimise delivery.

---

## 5. Implementation Plan

### Phase 1 — Form Replacement

- [ ] Design and build native StoneRise demo request form on the website (`/request-demo` page)
- [ ] Style to match existing site design
- [ ] Implement UTM + click ID capture script (fires on all pages, stores in sessionStorage/cookie)
- [ ] Build server endpoint: `POST /api/demo-request` on the existing Fastify API
- [ ] Form validation (client + server side)
- [ ] Success/error states on form submission

### Phase 2 — HubSpot Integration

- [ ] Generate HubSpot Private App API token (with contacts + deals scopes)
- [ ] Map form fields to HubSpot contact properties
- [ ] Create/update contact on submission via HubSpot API
- [ ] Create deal in pipeline on submission
- [ ] Test: verify contact and deal created correctly in HubSpot

### Phase 3 — GA4 Measurement Protocol

- [ ] Confirm GA4 Measurement Protocol API secret (in GA4 Admin → Data Streams → Measurement Protocol)
- [ ] Pass `client_id` from `_ga` cookie in form payload
- [ ] Build server function to POST `book_demo` event to GA4 Measurement Protocol
- [ ] Include all UTM parameters as event parameters
- [ ] Test: verify events appear in GA4 Real-Time report with correct attribution
- [ ] Test: verify First User Source and Session Source populated correctly in GA4

### Phase 4 — Google Ads Conversion API

- [ ] Confirm Google Ads Customer ID and conversion action tag name
- [ ] Ensure `gclid` is being captured and stored on all ad-linked sessions
- [ ] Build server function to upload conversion to Google Ads API using `gclid`
- [ ] Set up conversion action in Google Ads (if not already using enhanced conversions)
- [ ] Test: verify conversions appear in Google Ads with correct campaign attribution

### Phase 5 — Meta Conversions API

- [ ] Obtain Meta Pixel ID and Conversions API access token (from Meta Events Manager)
- [ ] Ensure `fbclid` is captured and stored in sessionStorage
- [ ] Hash user data (email, phone, name) server-side per Meta's requirements (SHA-256)
- [ ] Build server function to POST `Lead`/`Schedule` event to Meta CAPI
- [ ] Configure event deduplication (use `event_id` to match against any client-side pixel events)
- [ ] Test: verify event appears in Meta Events Manager with correct match quality score

### Phase 6 — Reporting Setup

- [ ] Confirm GA4 `book_demo` key event is now populated with accurate attribution
- [ ] Build Looker Studio marketing dashboard connecting to GA4 (demo bookings by source/medium/campaign)
- [ ] Optionally connect Google Ads spend data via Looker Studio connector
- [ ] Optionally connect Meta Ads spend data via Windsor.ai or native connector
- [ ] Create blended view: spend by channel vs. demo bookings by channel (cost per demo)

---

## 6. Expected Outcomes

| Metric | Before | After |
|---|---|---|
| GA4 Book Demo attribution accuracy | Poor | High (server-side event, accurate UTMs) |
| Google Ads conversion signal | Partial (client-side pixel only) | Strong (GCLID-matched server-side) |
| Meta Ads conversion signal | Partial (Pixel only, blocked frequently) | Strong (CAPI with hashed matching) |
| HubSpot contact data | Good (unchanged) | Good (maintained via API) |
| Primary reporting platform | HubSpot (workaround) | GA4 + Looker Studio |
| Cost per demo calculation | Not possible | Possible (spend vs. conversions per channel) |

---

## 7. Technical Dependencies

| Dependency | Owner | Notes |
|---|---|---|
| Native form build | Michael ? Dev team | Frontend work on StoneRise website |
| Fastify API endpoint | Michael ? Dev team | New `/api/demo-request` route |
| HubSpot Private App Token | Matt | Generate in HubSpot settings |
| GA4 Measurement Protocol Secret | Matt | Generate in GA4 Admin |
| Google Ads API access | Matt | Requires Google Ads API developer token |
| Meta CAPI access token | Matt | Generate in Meta Events Manager |
| UTM capture script | Michael ? Dev team | Client-side, fires on all pages |
| `_ga` cookie client_id passthrough | Michael ? Dev team | Must be included in form POST payload |

---

## 8. Key Risks & Mitigations

| Risk | Mitigation |
|---|---|
| HubSpot form replacement breaks existing contact creation | Test in HubSpot sandbox before go-live; run both in parallel briefly |
| GA4 client_id not available if user blocks GA4 entirely | Accept — fire event without client_id; GA4 will process as anonymous session (still accurate) |
| Meta event deduplication failures (double-counting) | Use unique `event_id` per submission; pass same ID to both Pixel and CAPI |
| Google Ads `gclid` expiry (60 days) | Conversion window is typically within 30 days of ad click; well within limits |
| Dev resource availability | Phase 1–2 is highest priority; Phases 3–5 can follow in sequence |

---

## 9. Out of Scope (This Spec)

- Tracking for pages other than the demo request form (this spec focuses on form conversions only)
- Email open / click tracking (managed by HubSpot natively)
- Stripe payment event tracking (covered in Financial Reporting Dashboard spec)
- Any changes to HubSpot pipeline stages or deal workflows

---

**Next step:** Share with Mounil for dev effort estimate on Phases 1–2.
