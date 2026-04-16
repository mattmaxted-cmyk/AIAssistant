# StoneRise CRM — MVP Requirements Document

## Executive Summary

This document outlines the final business requirements for the StoneRise CRM MVP. The CRM is **company-centric** (not contact-centric) and supports three pipelines: Inbound, Outbound, and Demo Booking.

### How Haidar Works from the CRM

Haidar's primary workspace is the **Working List** — a single, colour-coded list that shows all companies requiring his attention:

**Daily Workflow:**
1. **Start of day:** Haidar opens the Working List
2. **At a glance:** He sees all his inbound leads, outbound replies, and companies to contact — each colour-coded by type
3. **Work through the list:** He clicks into a company card, reviews the information, takes the required action (call, email, book meeting, qualify)
4. **Log activity:** When he logs an activity, a follow-up task is automatically created
5. **Progress or remove:** Companies either move forward in the pipeline or get marked as Unqualified (which removes them from the list)
6. **Repeat:** The Working List stays focused on active opportunities

**Friday Review:**
- At the end of each week, Haidar reviews the Working List
- Any companies that aren't progressing but aren't Unqualified get moved to a **"Contact Later"** bucket
- This keeps the Working List lean and focused on hot opportunities for the following week
- Companies in "Contact Later" can be resurfaced later based on follow-up dates or triggers

---

## 1. Pipeline Structure

### 1.1 Three Pipelines (Must Have)

| Pipeline | Purpose | Entry Point |
|----------|---------|-------------|
| **Inbound Pipeline** | Manage website leads (content downloads, demo requests) | Form submission |
| **Outbound Pipeline** | Manage cold outreach and responses | Added to sequence / manual outreach |
| **Demo Booking Pipeline** | Manage qualified opportunities through to close | Qualified from Inbound or Outbound |

### 1.2 Company-Centric Model (Must Have)

The CRM is organised around **companies**, not contacts.

- Pipeline cards represent companies
- Contacts are associated with companies
- A company can have multiple contacts
- Activities, deals, and meetings are linked to companies (and their associated contacts)

---

## 2. Company Card View

### 2.1 Single-Screen Workflow (Must Have)

When a sales rep clicks a company card from the pipeline kanban, a full view opens containing:

**Company Information**
- Company name
- Industry / sector
- Company size
- Website
- Address
- Custom properties

**Associated Contacts**
- All contacts at this company
- Each contact shows: name, job title, email, phone
- Ability to add new contacts

**Activity History**
- Calls, emails, meetings, notes
- Timeline view

**Company Status**
- Current status: ACTIVE | QUALIFIED | UNQUALIFIED | COLD

**Contextual Action Button**
- Prominent button showing the next action based on current pipeline stage
- Clicking opens a pop-up with required fields
- On submission, company moves to next stage automatically

---

## 3. Dashboard

### 3.1 Overdue Banner (Must Have)

- Displays overdue tasks/activities at the top of the dashboard
- Shows timestamps for each overdue item
- Clicking navigates to the relevant company/task

### 3.2 Hot Lead Notification/Banner (Must Have)

- Prominent banner highlighting hot leads requiring immediate attention
- Criteria for "hot lead" to be defined (e.g., high engagement score, recent demo request)
- Quick action to jump to the lead

### 3.3 Inbound/Outbound Section (Must Have)

- Dashboard section showing summary of Inbound pipeline activity
- Dashboard section showing summary of Outbound pipeline activity
- Key metrics at a glance (new leads, replies, meetings booked, etc.)

---

## 4. Working List

### 4.1 Single Combined Working List (Must Have)

One unified working list that shows all companies requiring attention:

**List Contents:**
- **Inbound leads** assigned to Haidar — shown with a coloured tag (e.g., blue)
- **Outbound replies** — companies that have replied to outreach — shown with a coloured tag (e.g., green)
- **Outbound to contact** — companies due for manual outreach — shown with a coloured tag (e.g., orange)

### 4.2 Colour-Coded Tags (Must Have)

Each company on the working list has a colour-coded tag indicating its source/type:

| Tag Colour | Meaning |
|------------|---------|
| **Blue** (example) | Inbound lead |
| **Green** (example) | Outbound reply |
| **Orange** (example) | Outbound to contact |

*Exact colours to be defined.*

### 4.3 Automatic Removal on Unqualified (Must Have)

- When a company status is set to **UNQUALIFIED**, it is automatically removed from the working list
- Company remains in the CRM for records but no longer appears on active working list
- Reduces clutter and keeps the list focused on active opportunities

### 4.4 Contact Later Bucket (Must Have)

A holding area for companies that aren't ready to progress but shouldn't be discarded:

- Sales rep can move a company to **"Contact Later"** during Friday review (or anytime)
- Company is removed from the active Working List
- Sales rep sets a follow-up date when moving to Contact Later
- Companies in Contact Later can be resurfaced based on follow-up dates
- Keeps the Working List focused on hot, active opportunities

### 4.5 Company Status (Must Have)

Each company has a status field with the following options:

| Status | Definition | Working List |
|--------|------------|--------------|
| **ACTIVE** | Currently being worked, in active pipeline | Visible |
| **QUALIFIED** | Has been qualified as a real opportunity | Visible |
| **UNQUALIFIED** | Reviewed and determined not a fit | **Removed** |
| **CONTACT LATER** | Not ready now, follow up at a later date | **Removed** (in Contact Later bucket) |
| **COLD** | Was active but has gone cold / no engagement | Visible (for re-engagement) |

---

## 5. Calendar

### 5.1 Outlook Calendar Integration (Must Have)

- Integrates with Outlook calendar
- Pulls availability to check for conflicts when booking meetings
- Meetings booked in CRM sync to Outlook

### 5.2 Manual Meeting Booking (Must Have)

- Sales rep manually books meetings from the company card view
- Selects date, time, duration, and attendees
- No automated "available slots" view — booking is manual
- Meeting syncs to Outlook calendar

---

## 6. Quotations

### 6.1 Line Item Library (Must Have)

- Pre-defined library of line items (products, services, fees)
- Each line item has: name, description, default price
- Sales rep selects from library when building quotes
- Ability to add custom line items

### 6.2 Quote Creation After Demo (Must Have)

- Quotations are created after demo is completed
- Quote links to the company and associated contacts
- Quote contains selected line items, quantities, pricing

### 6.3 Resend Quote Button (Must Have)

- Ability to resend a quote with one click
- Tracks when quotes were sent and resent
- Logs resend activity in company timeline

---

## 7. Automation & Pipeline Dependencies

### 7.1 Stripe Integration — Signed to Paid (Must Have)

- When a quote is signed and payment is processed via Stripe
- System automatically moves the company/deal from "Signed" stage to "Paid" stage
- No manual stage update required

### 7.2 Funnel Matrix Analytics (Must Have)

- Analytics showing conversion rates between pipeline stages
- Visual funnel view of how companies progress through stages
- Identify drop-off points and bottlenecks

### 7.3 Scheduled Backlog Notifications (Must Have)

- Automated notifications for items sitting too long in a stage
- Configurable thresholds (e.g., notify if in "Proposal Sent" for > 7 days)
- Alerts sent to sales rep and/or manager

---

## 8. Activity Logging & Follow-Up Tasks

### 8.1 Activity Types (Must Have)

Sales reps can log the following activity types against a company:

| Activity Type | Description |
|---------------|-------------|
| **Email Sent** | Outbound email to a contact |
| **Call Made** | Phone call with a contact |
| **Call Attempted** | Attempted call, no answer |
| **Meeting Held** | Completed meeting |
| **Note Added** | Internal note or update |

### 8.2 Automatic Follow-Up Task Creation (Must Have)

When an activity is logged, the system **automatically creates a follow-up task**.

**How It Works:**

1. Sales rep logs an activity (e.g., "Email Sent")
2. System prompts: "When should you follow up?"
3. Sales rep selects or enters a follow-up date (default: 3 days)
4. System automatically creates a task: "Follow up on [Activity Type] with [Company]"
5. Task is assigned to the sales rep and appears in their task list / daily digest

**Follow-Up Task Details:**

| Field | Value |
|-------|-------|
| Task Title | Auto-generated: "Follow up: [Company Name]" |
| Due Date | Selected by sales rep (default: 3 days from activity) |
| Assigned To | Sales rep who logged the activity |
| Linked To | Company and Contact |
| Notes | Reference to the original activity |

**Configuration Options:**
- Default follow-up period can be configured per activity type (e.g., emails = 3 days, calls = 2 days)
- Sales rep can override the default or skip follow-up creation if not needed
- Option to set a specific follow-up time (not just date)

### 8.3 Call Logging (Must Have)

Call logging is done at the **company level** within deal stages:

- Sales rep logs a call against a company (not a contact directly)
- Sales rep selects which contact they spoke to from a dropdown
- Call duration field is **optional**
- Call is recorded in the company activity timeline
- **Automatic call logging is POST-MVP**

### 8.4 Assign Activity to Contact (Must Have)

- When logging any activity (call, email, etc.), select which contact at the company was involved
- Activity appears in both company timeline and the selected contact's history

---

## 9. Daily Digest

### 9.1 Daily Digest Email/Notification (Must Have)

- Automated daily summary sent to each sales rep
- Contents may include:
  - Tasks due today
  - Overdue items
  - New inbound leads
  - Meetings scheduled for today
  - Hot leads requiring attention
  - Companies with no activity in X days

---

## 10. Summary: Final MVP Features

### Must Have (MVP)

| # | Feature | Category | HubSpot |
|---|---------|----------|---------|
| **Pipelines** | | | |
| 1 | Inbound Pipeline | Pipeline | ✅ HS |
| 2 | Outbound Pipeline | Pipeline | ✅ HS |
| 3 | Demo Booking Pipeline | Pipeline | ✅ HS |
| 4 | Company-centric model (not contact-centric) | Core | 🔄 HS+ |
| 5 | Contextual action buttons per stage | Core | ⚡ NEW |
| 6 | Pop-up forms with required fields on action | Core | 🔄 HS+ |
| 7 | Auto stage progression on action completion | Core | 🔄 HS+ |
| **Dashboard** | | | |
| 8 | Overdue banner with timestamps | Dashboard | ⚡ NEW |
| 9 | Hot lead notification/banner | Dashboard | ⚡ NEW |
| 10 | Inbound/Outbound summary section | Dashboard | 🔄 HS+ |
| **Working List** | | | |
| 11 | Single combined working list (inbound + outbound) | Working List | ⚡ NEW |
| 12 | Colour-coded tags by source type | Working List | ⚡ NEW |
| 13 | Auto-remove on Unqualified status | Working List | ⚡ NEW |
| 14 | Contact Later bucket with follow-up date | Working List | 🔄 HS+ |
| 15 | Company status (Active/Qualified/Unqualified/Contact Later/Cold) | Working List | 🔄 HS+ |
| **Calendar** | | | |
| 16 | Outlook calendar integration | Calendar | ✅ HS |
| 17 | Manual meeting booking from company card | Calendar | ✅ HS |
| **Quotations** | | | |
| 18 | Line item library | Quotations | ✅ HS |
| 19 | Quote creation after demo | Quotations | ✅ HS |
| 20 | Resend quote button | Quotations | ✅ HS |
| **Automation** | | | |
| 21 | Stripe integration: signed → paid | Automation | 🔄 HS+ |
| 22 | Funnel matrix analytics | Automation | ✅ HS |
| 23 | Scheduled backlog notifications | Automation | 🔄 HS+ |
| **Activity Logging** | | | |
| 24 | Activity logging (email, call, meeting, note) | Activity | ✅ HS |
| 25 | Auto follow-up task creation on activity log | Activity | ⚡ NEW |
| 26 | Call logging at company level (select contact) | Activity | 🔄 HS+ |
| 27 | Call duration (optional) | Activity | ✅ HS |
| 28 | Assign activity to contact | Activity | ✅ HS |
| **Daily Digest** | | | |
| 29 | Daily digest notification | Daily Digest | ✅ HS |

### Post-MVP

| # | Feature | Category |
|---|---------|----------|
| 1 | Automatic call logging | Calls |
| 2 | Meeting booking links for self-service scheduling | Calendar |
| 3 | Automated re-engagement triggers | Automation |

### HubSpot Parity Summary

| Tag | Meaning | Count |
|-----|---------|-------|
| ✅ HS | Exists in HubSpot | 14 |
| 🔄 HS+ | Improving on HubSpot | 10 |
| ⚡ NEW | Net-new functionality | 5 |

---

## 11. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | What criteria defines a "hot lead" for the dashboard banner? | Sales / Matt | Open |
| 2 | What are the specific stages in each pipeline (Inbound, Outbound, Demo Booking)? | Sales | Open |
| 3 | What colour coding rules should apply to the working list? | Sales / Matt | Open |
| 4 | What thresholds trigger backlog notifications (days in stage)? | Sales | Open |
| 5 | What content should be included in the daily digest? | Sales / Matt | Open |
| 6 | What line items should be pre-loaded in the quotation library? | Sales | Open |
| 7 | What calendar systems need to be supported (Google, Outlook, both)? | Matt | Open |
| 8 | What are the default follow-up periods for each activity type? | Sales / Matt | Open |

---

## 12. Glossary

| Term | Definition |
|------|------------|
| **Company** | The primary record type in the CRM; all activities are company-centric |
| **Contact** | An individual person associated with a company |
| **Pipeline** | A series of stages that companies move through (Inbound, Outbound, Demo Booking) |
| **Working List** | Single combined list showing inbound leads and outbound companies requiring attention |
| **Hot Lead** | A high-priority lead requiring immediate attention |
| **Line Item** | A pre-defined product or service that can be added to a quote |
| **Backlog Notification** | An alert triggered when a company has been in a stage too long |
| **Daily Digest** | A daily summary notification sent to each sales rep |
| **Company Status** | The current state of a company: Active, Qualified, Unqualified, Contact Later, or Cold |
| **Contact Later Bucket** | Holding area for companies not ready now but worth following up later |
| **Follow-Up Task** | An automatically created task prompting the sales rep to follow up after logging an activity |
| **Activity** | Any logged interaction with a company/contact (email, call, meeting, note) |

---

*Document ends.*
