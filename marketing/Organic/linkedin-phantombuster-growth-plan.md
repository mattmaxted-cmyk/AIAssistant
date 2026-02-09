# LinkedIn Organic Growth Plan — PhantomBuster + Publer

**Objective:** Generate qualified leads from LinkedIn organic engagement, convert engaged construction professionals into intro calls for StoneRise.

**Target Audience:**
- UK construction sub-contractors and main contractors
- Commercial, Financial, Buyer roles at **Director level**
- Include: Procurement job titles (Procurement Manager, Procurement Director, Head of Procurement)

**Target Outcome:** 10-20 intro calls booked per month from warm leads.

---

## Top Level Overview

### Flow 1: Cold Outreach (Network Building)

```
Sales Navigator Search → Export List → PhantomBuster Auto-Connect → Grow Network
```

**Purpose:** Build a targeted network of construction decision-makers so they see your content in their feed.

**Volume:** 20-30 connection requests per day.

---

### Flow 2: Warm Engagement Funnel (Lead Generation)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  1. PUBLISH                                                                 │
│     Post content via Publer (3-5x per week)                                 │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  2. SCRAPE                                                                  │
│     PhantomBuster scrapes everyone who liked or commented (24-48hrs later)  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  3. FILTER                                                                  │
│     Keep only construction industry leads (exclude recruiters, software,    │
│     procurement titles)                                                     │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  4. TEAM REVIEW                                                             │
│     Matt filters → Haidar approves/rejects                                  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  5. AUTOMATED OUTREACH                                                      │
│     3 messages over 7 days (stops automatically when they reply)            │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  6. MANUAL TAKEOVER                                                         │
│     Any response → human takes over conversation                            │
└─────────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│  7. CONVERSION                                                              │
│     Goal: capture email + book 15-min intro call → add to HubSpot           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Detailed Plan

---

## Flow 1: Cold Outreach (Network Building)

### Purpose
Build a targeted network of construction decision-makers who will see StoneRise content in their feed, creating brand awareness and future warm leads.

### Step 1.1: Sales Navigator Search

**Search Criteria:**
| Filter | Value |
|--------|-------|
| Geography | United Kingdom |
| Industry | Construction, Building Construction |
| Company Headcount | 11-50, 51-200, 201-500, 501-1000 |
| Seniority Level | Director, VP, CXO, Owner, Partner |
| Function | Finance, Operations |
| Title Keywords | `Commercial Director`, `Finance Director`, `Financial Controller`, `Commercial Manager`, `Buying Manager`, `Buyer`, `QS Director`, `Operations Director`, `Managing Director`, `Procurement Manager`, `Procurement Director`, `Head of Procurement` |
| Exclude Titles | — |

**Export:** Save search as CSV with:
- Full name
- Job title
- Company name
- LinkedIn profile URL

### Step 1.2: PhantomBuster — LinkedIn Auto Connect

**Phantom:** LinkedIn Network Booster

**Configuration:**
| Setting | Value |
|---------|-------|
| Spreadsheet URL | Google Sheet with Sales Nav export |
| Session Cookie | LinkedIn session |
| Daily Limit | 20-30 connection requests (stay under LinkedIn limits) |
| Add Message | Yes (see below) |

**Connection Request Message (300 char limit):**

> Hi {{firstName}}, I work with construction firms on procurement challenges — always looking to connect with others in the industry. Would be great to have you in my network.

**Alternative (more direct):**

> Hi {{firstName}}, I noticed you're at {{companyName}}. We help construction firms cut procurement admin and get better supplier pricing. Happy to connect and share insights.

**Scheduling:**
- Run Monday–Friday
- Stagger throughout the day (not bulk at once)
- 20-30 requests/day max

### Step 1.3: Monitoring & Maintenance

- Track acceptance rate (target: 25-40%)
- Remove pending requests older than 2 weeks
- Log accepted connections for future warm outreach

---

## Flow 2: Warm Engagement Funnel

### Purpose
Convert people who engage with StoneRise content into qualified leads and intro calls. These are warmer than cold outreach — they've already shown interest.

---

### Step 2.1: Organic Content via Publer

**Content Themes (aligned to StoneRise messaging hierarchy):**

| Theme | Example Post Hook |
|-------|-------------------|
| **Problem Agitation** | "Construction procurement is broken. Here's why your team is losing hours every week..." |
| **Industry Insight** | "We analysed 10,000 POs from construction firms. The #1 cause of overspend was..." |
| **Social Proof** | "One contractor cut invoice processing from 2 hours to 3 minutes. Here's how..." |
| **Behind the Scenes** | "We're building procurement software with actual construction professionals. This week..." |
| **Educational** | "The real cost of manual POs isn't admin time — it's the pricing inconsistencies you can't see" |

**Posting Schedule:**
- 3-5 posts per week
- Best times: Tues–Thurs, 7:30am or 12pm UK
- Mix: 60% value/insight, 30% problem/pain, 10% product/CTA

**Content Rules:**
- Lead with the problem, never the product
- Use construction language (POs, RFQs, site, quantities)
- Include approved proof points where relevant
- No "revolutionary" or SaaS hype language

---

### Step 2.2: PhantomBuster — Scrape Post Engagers

**Phantom:** LinkedIn Post Likers & Commenters Scraper

**Trigger:** Run 24-48 hours after each post to capture all engagement

**Configuration:**
| Setting | Value |
|---------|-------|
| Post URL | URL of specific LinkedIn post |
| Scrape Likers | Yes |
| Scrape Commenters | Yes |
| Session Cookie | LinkedIn session |

**Output Fields:**
- Full name
- Profile URL
- Headline
- Current company
- Connection degree (1st, 2nd, 3rd)

**Automation:**
- Set up recurring scrape for each post
- Aggregate results into master Google Sheet

---

### Step 2.3: Lead Filtering — Construction Only

**Manual/Semi-Automated Filter Process:**

**Filter Criteria — INCLUDE if:**
| Field | Include If Contains |
|-------|---------------------|
| Headline | `Director`, `MD`, `Managing Director`, `Commercial`, `Finance`, `Financial`, `Buyer`, `QS`, `Quantity Surveyor`, `Procurement` |
| Company/Headline | `Construction`, `Contractor`, `Building`, `Civil`, `Roofing`, `M&E`, `Groundworks`, `Fit-out`, `Refurbishment` |

**Filter Criteria — EXCLUDE if:**
| Field | Exclude If Contains |
|-------|---------------------|
| Headline | `Recruitment`, `Recruiter`, `Sales`, `Marketing`, `Consultant` (unless construction consultant) |
| Company | `Software`, `Agency`, `Recruitment`, `Staffing` |

**Process:**
1. Export scrape results to Google Sheet
2. Apply filters (can use Google Sheets formulas or manual review)
3. Add column: `Construction Lead? (Y/N)`
4. Add column: `Approved for Outreach? (Y/N)`

---

### Step 2.4: Team Review & Approval

**Review Checklist:**

| Check | Description |
|-------|-------------|
| ✓ UK-based | Confirm UK geography |
| ✓ Construction company | Verify company is contractor/subcontractor |
| ✓ Decision-maker | Director/senior role in Commercial, Finance, Operations |
| ✓ Not competitor | Not software vendor or competitor |
| ✓ Company size | 10+ employees (viable customer) |
| ✓ Not existing contact | Check against HubSpot CRM |

**Approval Status:**
- `Approved` — Add to outreach sequence
- `Maybe` — Needs more research
- `Rejected` — Not a fit (log reason)

**Weekly Review Meeting:**
- Matt reviews scraped leads
- Haidar approves/rejects based on sales fit
- Approved leads exported to outreach flow

---

### Step 2.5: Automated Message Sequence

**Phantom:** LinkedIn Message Sender

**Trigger:** Lead marked as `Approved` in master sheet

---

#### Message 1: Initial Outreach (Day 0)

**Purpose:** Lead with a specific insight that earns attention

**Template:**

> Hi {{firstName}},
>
> Most contractors we speak to are losing 20% of their time on procurement admin. Chasing quotes, matching invoices, approving POs manually.
>
> Is that something you're seeing at {{companyName}}? Or have you found a way around it?

**Character count:** ~230

**Why it works:**
- Opens with a stat, not a greeting — earns the read
- Frames a specific, relatable problem
- Asks a genuine question (invites response)
- No pitch yet

---

#### Message 2: Value Hook (Day 3 — if no response)

**Purpose:** Share a concrete result

**Template:**

> Hi {{firstName}},
>
> One contractor we work with cut their invoice processing from 2 hours to 3 minutes and reduced delivery disputes by 90%.
>
> If procurement admin is eating into your team's time, happy to show you how they did it. No pitch, just a quick walkthrough.

**Character count:** ~260

**Why it works:**
- Opens with proof, not "following up"
- Specific numbers (2 hours → 3 minutes) are memorable
- Low-pressure CTA ("no pitch, just a walkthrough")

---

#### Message 3: Direct CTA (Day 7 — if no response)

**Purpose:** Clear, respectful final ask

**Template:**

> Hi {{firstName}},
>
> Last one from me. I know you're busy.
>
> If getting better supplier prices, faster approvals, or fewer site delays is on your radar, I can show you how other contractors are solving it in 15 minutes.
>
> Drop me your email and I'll send a link. Either way, good connecting.

**Character count:** ~290

**Why it works:**
- Acknowledges they're busy (respectful)
- Lists three tangible outcomes
- Simple CTA (just reply with email)
- Closes the loop gracefully

---

#### Sequence Settings

| Setting | Value |
|---------|-------|
| Daily send limit | 50-80 messages |
| Time between messages | 3-4 days |
| Stop on reply | **Yes** (critical) |
| Business hours only | Yes (9am-6pm UK) |

---

### Step 2.6: Response Handling — Manual Takeover

**Trigger:** Any reply received → STOP automation → alert team

**Response Categories & Actions:**

| Response Type | Action |
|---------------|--------|
| **Positive/Interested** | Respond personally, qualify needs, book call |
| **Question about product** | Answer, then steer toward call |
| **"Not now"** | Acknowledge, ask to reconnect in X months, add to nurture list |
| **"Not interested"** | Thank them, remove from sequence, do not re-contact |
| **Request for email/info** | Send info, follow up to book call |

**Notification Setup:**
- PhantomBuster webhook → Slack channel `#linkedin-leads`
- Daily digest email of all responses to Matt + Haidar

---

### Step 2.7: Conversion — Email Capture & Intro Call

**Goal:** Get prospect's email address and book a 15-minute intro call

**Booking Options:**
1. **Direct calendar link:** Calendly/HubSpot meetings link
2. **Email exchange:** Get email, send HubSpot meeting link
3. **Manual coordination:** If they prefer, coordinate via LinkedIn messages

**Response Template — Booking the Call:**

> Great to hear from you, {{firstName}}.
>
> Happy to show you around StoneRise — we typically do a quick 15-minute intro where I can walk you through how it works for [their specific pain point].
>
> What's the best email to send a calendar invite to? Or if easier, here's my link: [Calendly/HubSpot link]
>
> Looking forward to it.

**Post-Booking:**
1. Add lead to HubSpot as Contact (source: LinkedIn Organic)
2. Create Deal in pipeline (Stage: Intro Scheduled)
3. Send calendar invite with meeting details
4. Add any LinkedIn conversation context as notes

---

## Tools & Tech Stack

| Tool | Purpose | Cost |
|------|---------|------|
| **PhantomBuster** | LinkedIn automation (connect, scrape, message) | ~$69-159/mo |
| **Publer** | Content scheduling | Existing |
| **LinkedIn Sales Navigator** | Lead sourcing | ~$79/mo |
| **Google Sheets** | Lead tracking, filtering, approvals | Free |
| **HubSpot** | CRM, deal tracking, meeting scheduling | Existing |
| **Slack** | Response notifications | Existing |

---

## KPIs & Metrics

### Flow 1: Cold Outreach

| Metric | Target |
|--------|--------|
| Connection requests sent/week | 100-150 |
| Acceptance rate | 25-40% |
| New connections/month | 200-400 |

### Flow 2: Warm Engagement

| Metric | Target |
|--------|--------|
| Post engagement rate | 2-5% |
| Engagers scraped/month | 100-300 |
| Qualified leads after filtering | 30-50% of scraped |
| Team approval rate | 60-80% of filtered |
| Response rate to messages | 15-25% |
| Positive response rate | 40-60% of responses |
| Email capture rate | 50%+ of positive responses |
| Intro calls booked/month | 10-20 |

### Funnel Tracking

```
Post Impressions: 10,000
       ↓
Engagements (likes/comments): 200 (2%)
       ↓
Scraped & Identified: 200
       ↓
Construction Filtered: 80 (40%)
       ↓
Team Approved: 60 (75%)
       ↓
Message Sequence Started: 60
       ↓
Responses Received: 12 (20%)
       ↓
Positive/Interested: 7 (58%)
       ↓
Emails Captured: 5 (71%)
       ↓
Intro Calls Booked: 4 (80%)
```

---

## Compliance & Risk Management

### LinkedIn Limits (Stay Within)

| Action | Daily Limit | Weekly Limit |
|--------|-------------|--------------|
| Connection requests | 20-30 | 100-150 |
| Messages (InMail/DM) | 50-80 | 250-400 |
| Profile views | 80-100 | 400-500 |

### Best Practices

- **Don't automate from your personal account** — Use a dedicated account or accept the risk
- **Warm up new accounts** — Start slow (10/day) and increase over 2 weeks
- **Randomize delays** — Don't send at exact intervals; use random delays
- **Stop on weekends** — More natural activity pattern
- **Monitor for restrictions** — If LinkedIn warns you, pause for 48-72 hours
- **Personalise where possible** — Even small customisations reduce spam flags

### GDPR Compliance

- Data collected is publicly available on LinkedIn
- Use for legitimate business interest (B2B marketing)
- Honour unsubscribe/removal requests immediately
- Don't store data longer than necessary
- Add privacy note if requested: "Your data is processed per our privacy policy at [link]"

---

## Weekly Operations Checklist

### Monday
- [ ] Review previous week's metrics
- [ ] Check PhantomBuster quotas reset
- [ ] Plan content themes for week

### Tuesday–Thursday
- [ ] Publish Publer content (scheduled)
- [ ] Run scraper on posts from 48+ hours ago
- [ ] Filter new scraped leads
- [ ] Send filtered leads for team approval
- [ ] Monitor response inbox

### Friday
- [ ] Weekly lead review meeting (Matt + Haidar)
- [ ] Approve/reject leads for next week
- [ ] Add approved leads to HubSpot
- [ ] Export metrics for weekly report
- [ ] Clean up old pending connection requests

### Ongoing
- [ ] Respond to all LinkedIn messages within 24 hours
- [ ] Log all calls and outcomes in HubSpot
- [ ] Update sequence templates based on response rates

---

## Appendix: PhantomBuster Phantoms Needed

| Phantom | Purpose |
|---------|---------|
| LinkedIn Network Booster | Send connection requests with personalised message |
| LinkedIn Post Likers Scraper | Get profiles of people who liked a post |
| LinkedIn Post Commenters Scraper | Get profiles of people who commented |
| LinkedIn Message Sender | Send automated DM sequences |
| LinkedIn Profile Scraper | Enrich lead data (optional) |

---

## Appendix: Google Sheet Structure

### Sheet 1: Scraped Leads

| Column | Description |
|--------|-------------|
| A: Date Scraped | Date lead was scraped |
| B: Source Post | URL of post they engaged with |
| C: Engagement Type | Like / Comment |
| D: Full Name | |
| E: Profile URL | |
| F: Headline | |
| G: Company | |
| H: Construction Lead? | Y/N (after filtering) |
| I: Reviewer | Who reviewed |
| J: Approved? | Y/N/Maybe |
| K: Rejection Reason | If rejected |
| L: Added to Sequence | Date added to message sequence |
| M: Sequence Status | Not Started / In Progress / Completed / Responded |
| N: Response Date | |
| O: Response Type | Positive / Negative / Question / Not Now |
| P: Email Captured | |
| Q: Call Booked | Date |
| R: HubSpot Contact ID | Link to CRM |

### Sheet 2: Message Templates

Store current versions of all message templates for easy updates.

### Sheet 3: Weekly Metrics

Track weekly performance against KPIs.

---

## Next Steps

1. **Set up PhantomBuster account** and configure Phantoms
2. **Create Sales Navigator search** with filters above
3. **Build Google Sheet** with structure above
4. **Configure Slack notifications** for responses
5. **Schedule first week of content** in Publer
6. **Run first connection campaign** (50 requests to test)
7. **Wait for first post engagement** → scrape → filter → approve → message
8. **Review and refine** after first 2 weeks of data
