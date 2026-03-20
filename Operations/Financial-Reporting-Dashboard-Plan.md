# Financial Reporting Dashboard Plan

**Owner:** Michael Loizias
**Status:** Planning
**Last Updated:** March 2026

---

## Overview

A lightweight financial reporting setup that pulls revenue data from Stripe, transforms it into digestible dashboards in Looker Studio, and displays live metrics on an office TV — with an automated monthly export on the 28th of each month.

---

## Architecture

```
Stripe (source of truth)
    ↓
Windsor.ai (connector / ETL)
    ↓
Looker Studio (dashboards)
    ↓
Office TV (always-on display)
    + Automated monthly PDF export (28th of each month)
```

---

## Stack Components

### 1. Stripe — Data Source

All financial data lives in Stripe: payments, subscriptions, MRR, churn, refunds, customer counts.

No changes needed to Stripe itself. Windsor connects via the Stripe API using read-only credentials.

**Key data available from Stripe:**
- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- New vs. churned customers
- Revenue by plan/product
- Refunds and disputes
- Payment success/failure rates
- Trial conversions

---

### 2. Windsor.ai — Connector

Windsor.ai is a no-code data connector that pulls Stripe data directly into Looker Studio (and other BI tools) on a scheduled refresh.

**Setup steps:**
1. Create a Windsor.ai account (free tier available; paid from ~$19/month for daily refresh)
2. Connect Stripe as a data source using the Stripe API key (read-only)
3. Select the Stripe fields/metrics to sync
4. Connect Windsor as a data source inside Looker Studio

**Refresh cadence:** Windsor syncs data on a schedule (hourly or daily depending on plan). For financial reporting, daily refresh is sufficient.

---

### 3. Looker Studio — Dashboard Layer

Google's free BI tool. Dashboards connect live to Windsor/Stripe data.

**Main Dashboard — TV Display**

Design this as a single-page landscape view (16:9, optimised for TV):

| Section | Metrics |
|---|---|
| **Revenue** | MRR, ARR, MoM growth %, revenue this month vs. last month |
| **Customers** | Total active customers, new this month, churned this month, net adds |
| **Plans** | Revenue split by plan/module (Procurement, HR, Commercial) |
| **Cash** | Total received this month, outstanding invoices (if available via Stripe) |
| **Trends** | Rolling 3-month or 6-month revenue line chart |

**Additional Report Pages (not on TV):**
- Monthly financial summary (for export on the 28th)
- Churn analysis
- Revenue by customer

**Setup steps:**
1. In Looker Studio, create a new report
2. Add Windsor.ai as a data source (Stripe connector)
3. Build the main TV dashboard page (landscape, large font, dark or brand theme)
4. Build additional detail pages for the monthly export
5. Set the report to auto-refresh (Looker Studio refreshes on page load by default; data is live)

---

### 4. Monthly Export — Automated on the 28th

Looker Studio supports scheduled email delivery of reports as PDFs.

**Setup:**
1. In Looker Studio, open the report → **Share → Schedule delivery**
2. Set recipient(s): Michael, Stelios, Chris Galarza (Financial Controller), or whoever needs it
3. Set schedule: **Monthly, on the 28th**
4. Format: PDF
5. Pages to include: Monthly Summary page (not the TV dashboard page)

**Result:** On the 28th of each month, a PDF snapshot of the financial report lands in inboxes automatically — no manual action needed.

---

### 5. Office TV Display

The TV will show the main Looker Studio dashboard in a permanent, auto-refreshing view.

**Hardware options:**

| Option | Cost | Notes |
|---|---|---|
| **Dedicated old laptop/desktop** | £0 (if spare available) | Browser fullscreen, Looker Studio URL, set to never sleep. Easiest to set up. |
| **Amazon Fire Stick 4K** | ~£50 | Install Silk Browser, pin Looker Studio URL to home. Lightweight, no moving parts. |
| **Raspberry Pi 4 (2GB)** | ~£50–£70 | Full Linux control, Chromium kiosk mode, cron-based refresh. Most reliable long-term. |
| **Commercial digital signage stick** (e.g. BrightSign Lite, Yodeck-compatible stick) | ~£70–£100 | Managed via cloud, most "proper" solution if scaling to multiple screens later. |

**Recommended for simplicity: Old laptop/desktop (if available) or Amazon Fire Stick (~£50)**

For the TV itself, no changes needed — just HDMI input from the device.

**Kiosk setup (old laptop/desktop):**
1. Open Chrome, navigate to the Looker Studio report URL
2. Press F11 for fullscreen
3. Set OS power settings: never sleep, never turn off display
4. Set Chrome to reopen last tabs on startup
5. Optional: use a Chrome extension like [Tab Reloader](https://chrome.google.com/webstore/detail/tab-reloader) to auto-refresh every 15–30 minutes

**Kiosk setup (Raspberry Pi — most robust):**
1. Install Raspberry Pi OS Lite
2. Configure Chromium to launch in kiosk mode on boot pointing to the Looker Studio URL
3. Set a cron job to refresh the page every 30 minutes
4. Runs headlessly and silently; effectively a permanent dashboard appliance

---

## Implementation Checklist

### Phase 1 — Data Connection
- [ ] Create Windsor.ai account
- [ ] Connect Stripe API key (read-only) to Windsor
- [ ] Verify Stripe data is flowing correctly in Windsor preview

### Phase 2 — Dashboard Build
- [ ] Create new Looker Studio report
- [ ] Add Windsor as data source
- [ ] Build main TV dashboard (landscape, large type, dark theme)
- [ ] Build monthly summary page (for export)
- [ ] Test data accuracy vs. Stripe dashboard

### Phase 3 — Automated Export
- [ ] Set up scheduled delivery in Looker Studio (28th monthly)
- [ ] Add relevant email recipients
- [ ] Send a test export to verify formatting

### Phase 4 — TV Setup
- [ ] Decide on hardware (spare laptop/desktop vs. new device)
- [ ] If new device: order hardware (~£50–£100 budget)
- [ ] Configure kiosk/fullscreen mode
- [ ] Mount or position at TV
- [ ] Confirm display looks correct from normal office viewing distance

---

## Costs

| Item | Cost |
|---|---|
| Looker Studio | Free |
| Windsor.ai | Free (limited) / ~$19–$49/month (paid) |
| TV display hardware | £0–£100 (spare device or new stick/Pi) |
| Stripe | Already active |

**Total ongoing cost: ~$19–$49/month (Windsor.ai)**

---

## Notes

- Looker Studio reports are shareable via URL — the same dashboard can be accessed by Michael and Stelios on any browser, not just the TV.
- If Stripe data needs to be combined with other sources (e.g. HubSpot pipeline data, or cost data from Xero/Sage) in future, Windsor supports multiple connectors and Looker Studio can blend data sources.
- The 28th export date gives a near-end-of-month snapshot before month close, which is intentional. If post-close figures are preferred, adjust to the 2nd–3rd of the following month.
