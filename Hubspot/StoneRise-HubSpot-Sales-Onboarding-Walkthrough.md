# StoneRise HubSpot — Sales Rep Onboarding Walkthrough

**For:** New Sales Rep — Monday Onboarding Session
**Prepared by:** Matt Maxted
**Date:** March 2026

---

## Overview

This session covers everything you need to operate HubSpot from day one. We'll go through:

1. How our process is structured (the concept before the screen)
2. Outbound — your cold calling workflow
3. Inbound — what happens when a lead comes to us
4. The deal pipeline — from demo to close
5. A live walkthrough where you take the steps

Total time: approximately 45–60 minutes.

---

## Part 1: The Concept — Pre-Pipeline vs Pipeline

Before touching HubSpot, understand this one idea. Everything else follows from it.

We split the sales process into **two phases**:

**Pre-Pipeline (Contact-Based)**
This is everything before a deal exists. It's managed at the contact level. A contact enters pre-pipeline the moment we know about them — whether they came to us (inbound) or we reached out to them (outbound). The goal of this phase is to qualify them and get a product demo booked.

**Pipeline (Deal-Based)**
This is everything from demo booking onwards. A deal record is created automatically when a product demo is scheduled. The pipeline tracks them from demo through to close.

**Why the split?**
Most leads — especially outbound — will never reach a demo. If we created a deal for every contact we spoke to, the pipeline would be full of unqualified noise and our forecasting would be meaningless. We only create a deal when someone has passed qualification and has a demo in the diary. Before that point, everything is managed on the contact record.

---

## Part 2: Outbound — Your Cold Calling Workflow

Most of your time initially will be spent on outbound. Here's how it works.

### Where the Leads Come From

Cold prospect lists are manually uploaded into HubSpot by Matt. You don't need to source them. When a new batch is uploaded, they will appear in your cold calling view, ready to work through.

### Your Two Cold Calling Views

Cold leads move through two distinct statuses, each with its own view:

**1. Cold Leads — To Call** (`COLD`)
Fresh contacts who have never been called. These are your primary queue. Work through these first.

**2. Cold Replied** (`COLD_REPLIED`)
Contacts who responded to your outreach — by email, LinkedIn, or any channel — but haven't yet booked an intro call. They've shown some level of engagement and need a more tailored follow-up. These are warmer than a first cold call.

Each record will have:
- Company name
- Job title
- LinkedIn profile (where available)
- Phone number

Open a record, review it briefly, make the call, then update the status before moving to the next one. **Do not skip the status update.** If you don't update it, the contact stays in your queue forever and the view becomes useless.

### After Every Call — What to Update

Every call has one of five outcomes. Set the Lead Status accordingly:

| Call Result | Lead Status to Set | What Happens Next |
|---|---|---|
| Interested — wants to know more | `NEW` | They enter the standard inbound flow. Book an intro call. |
| Replied / engaged but not ready to book yet | `COLD_REPLIED` | Moves to your Cold Replied view. Follow up with a more personal approach. |
| Not now / bad timing | `BAD_TIMING` | Automated re-engagement follow-up at 90 days |
| No answer / left voicemail | `ATTEMPTED_TO_CONTACT` | Stays in your cold view. Call again. |
| Said no outright | `NOT_INTERESTED` | Removed from active queue. No further contact unless they re-engage. |
| Not a fit | `UNQUALIFIED` | Closed. No follow-up. |

### When They Become Interested

Once you set a cold contact to `NEW`, they move out of your cold calling view and into the **Need Intro Call** view. From this point forward, the process is identical to inbound. You book an intro call, qualify them, and if they're a fit, book a demo. The fact that they came from outbound makes no difference to how you manage them from here.

---

## Part 3: Inbound — The Pre-Pipeline Flow

Inbound leads come from the website demo request form. When someone submits it, HubSpot automatically:
- Creates a contact record
- Sets their Lifecycle Stage to **Lead** and Lead Status to **NEW**
- Assigns them to you
- Starts an automated email sequence encouraging them to book their intro call

### Your Views for Inbound

| View | Who's In It | Your Job |
|---|---|---|
| **Need Intro Call** | Leads (NEW / ATTEMPTED_TO_CONTACT / IN_PROGRESS) | Book the intro call |
| **Intro Calls Scheduled** | Leads with a call booked | Prep for the call |
| **Qualification Forms Pending** | Contacts whose form isn't done yet | Complete the form |
| **Qualified — Ready for Demo** | SQLs without a demo booked | Book the product demo |
| **No Shows — Follow Up** | Contacts who missed their intro call | Reschedule |

Work through these views every day. They are your to-do list.

### Step 1: Lead → Book the Intro Call

When a lead lands in **Need Intro Call**, your job is to get them on a 30-minute intro call as fast as possible. Target: **booked within 3 days of their form submission**.

Send your calendar link. If they don't book, follow up. If they still don't respond, the automated sequence is running in the background, but personal outreach from you will always outperform it.

When they book, HubSpot automatically:
- Updates their Lifecycle Stage to **MQL**
- Updates their Lead Status to **QUALIFICATION_SCHEDULED**
- Creates a prep task for you

### Step 2: MQL → Hold the Intro Call and Complete the Qualification Form

The intro call is 30 minutes. Your job is to understand whether this is a real opportunity — right company, right problem, right timeframe, right person.

**After every intro call — without exception — you must complete the Sales Qualification Form in HubSpot.** This is not optional. The system enforces it: you cannot progress a contact or create a deal until this form is done.

The form captures:
- Qualification outcome (Qualified / Not a Fit / Bad Timing)
- Contact role (Decision Maker / Influencer / Champion / End User)
- Company size
- Primary module interest
- Key pain points
- Budget indication
- Timeline to decision
- Deal value estimate

If the outcome is **Qualified**, HubSpot automatically:
- Updates their Lifecycle Stage to **SQL**
- Updates their Lead Status to **QUALIFIED**
- Creates a task to book the product demo

If the outcome is **Not a Fit**, set Lead Status to `UNQUALIFIED` — no follow-up.
If the outcome is **Bad Timing**, set Lead Status to `BAD_TIMING` — automated re-engagement at 30 and 90 days.

### Step 3: SQL → Book the Product Demo

An SQL is someone who has passed qualification. Your job now is to book their 60-minute product demo.

Once the demo is booked, you must set the contact property **"Ready for Demo" = Yes**. You can only do this if the qualification form is complete — the system will not let you set it otherwise.

When both conditions are met (demo booked + Ready for Demo = Yes), HubSpot automatically:
- Creates a deal record in the **Demo Booked** stage
- Updates their Lifecycle Stage to **Opportunity**

The contact is now in the pipeline.

---

## Part 4: The Deal Pipeline

The pipeline has five active stages. You own the first four. Customer Success owns the last.

### Stage 1: Demo Booked (20%)

The demo is scheduled but hasn't happened yet.

**Before moving forward, you need:**
- Demo delivered and meeting marked complete
- Deal Value populated
- Demo notes logged

### Stage 2: Demo Completed (40%)

The demo has been delivered. You're now gathering the information needed to send pricing.

**Before moving forward, you need:**
- Demo Recording Link
- Demo Notes
- Budget Range confirmed
- Timeline confirmed
- Modules Demonstrated
- Next Steps agreed
- **Authority Present on Demo = Yes**

**Authority Present is a hard gate.** If a decision-maker was not on the demo, you cannot progress to pricing. This is enforced because deals that go to pricing without a decision-maker almost always stall. If the DM wasn't on the demo, book a follow-up demo with them present before moving forward.

### Stage 3: Pricing Presented & Decision Pending (60%)

Pricing has been sent. You're handling objections and chasing the decision.

**Before moving forward, you need:**
- Pricing Sent Date
- Pricing Method
- Decision Maker Email confirmed
- Proposal Document Link
- Expected Decision Date

**If you need to offer a discount:**

| Discount Level | Who Must Approve |
|---|---|
| 0% (standard) | No approval needed |
| 1–15% | Haidar (Sales Manager) |
| >15% | Stelios |

All discounts require a written justification in the `Discount Justification` field. Do not promise a discount before it's approved.

### Stage 4: Won Pending Handover Approval (90%)

The contract is signed. This is your finish line — but it's not Closed Won yet.

Before moving a deal into this stage, you must complete the handover documentation:

1. Decision-maker name and role
2. Operational owner (day-to-day user)
3. Reason for purchase
4. Scope agreed (users, modules, exclusions)
5. Current order method and main pain point
6. Accounting system and invoice process
7. Phase 1 success signals (2 metrics)
8. Pricing tier and support level
9. Any risk flags (internal resistance, unclear ownership)

Once you move the deal into this stage, David Adair (Customer Success) is notified automatically. He reviews the handover documentation and moves the deal to Closed Won when he's satisfied. **You cannot move a deal to Closed Won yourself.**

### Stage 5: Closed Won (100%)

David approves the handover, moves the deal to Closed Won, and onboarding is triggered automatically.

### Closed Lost (0%)

If a deal doesn't close, move it to Closed Lost and complete:
- Lost Reason (dropdown)
- Lost Reason Details (free text)
- Follow-Up Strategy

| Lost Reason | Re-engagement Timing |
|---|---|
| Bad Timing | 90 days |
| No Budget | 180 days |
| Competitor Chosen | 180 days |
| No Decision Maker Buy-In | 180 days |
| Price Too High | Based on strategy |
| Not the Right Fit | No follow-up |

---

## Part 5: Rules You Must Know

**You can only move deals forward.** If a deal needs to go back a stage, that's the Sales Manager's decision, not yours.

**Required fields are enforced.** HubSpot will not let you progress a deal without the mandatory properties completed for that stage.

**You cannot skip stages.** The pipeline runs sequentially.

**Only David Adair can close deals as Won.** Your job ends at Won Pending Handover Approval.

**The qualification form is mandatory after every intro call.** No exceptions. No workarounds. If it's not done, you'll get a reminder alert and no deal will be created when the demo is booked.

---

## Part 6: Alerts You'll Receive

HubSpot will email you when something needs attention:

| Alert | Trigger | What to Do |
|---|---|---|
| Intro Call Not Booked | Lead is NEW for >5 days | Manual outreach needed |
| Intro Call No-Show | Contact missed their call | Follow up immediately |
| Qualification Form Overdue | Form not done >2 days after call | Complete it now |
| SQL Stagnant | Qualified for >10 days without demo booked | Book demo or update status |
| Deal Stuck | Demo Completed >14 days or Pricing >30 days | Progress or escalate |
| Demo Booked Without Qualification Form | Demo booked but form not complete | Complete the form — deal won't be created until you do |

---

## Part 7: Time Targets

| Milestone | Target |
|---|---|
| Form submitted → Intro call booked | < 3 days |
| Call booked → Call held | < 5 days |
| SQL → Demo booked | < 7 days |
| Lead → Opportunity (total) | < 14 days |
| Demo → Closed Won | < 30 days |

For outbound cold calls, there's no formal SLA on response time — but work through your queue consistently. A stale cold list loses its value quickly.

---

## Part 8: The Full Journey at a Glance

| Phase | Stage | Your Job |
|---|---|---|
| **Outbound** | Cold Lead (`COLD`) | Call, update status after every call |
| **Outbound** | Cold Replied (`COLD_REPLIED`) | Follow up on engagement, work towards booking intro call |
| **Pre-Pipeline** | Lead (NEW) | Book intro call |
| **Pre-Pipeline** | MQL (QUALIFICATION_SCHEDULED) | Hold call, complete qualification form |
| **Pre-Pipeline** | SQL (QUALIFIED) | Book product demo, set Ready for Demo = Yes |
| **Pipeline** | Demo Booked | Deliver demo, log deal value and notes |
| **Pipeline** | Demo Completed | Confirm authority, fill demo details, send pricing |
| **Pipeline** | Pricing Presented | Chase decision, handle objections |
| **Pipeline** | Won Pending Handover | Complete handover documentation |
| **Pipeline** | Closed Won | David Adair — not you |
| **Pipeline** | Closed Lost | Log reason and follow-up strategy |

---

## Before Monday — Admin Checklist

Tasks to complete before the session:

1. **Create Haidar's HubSpot account and assign him a Sales seat** — must be done via Stelios (seat allocation sits above you)
2. **Create his meeting links in HubSpot** — two links required:
   - **Intro Call (30 min)** — set as his default meeting link (used by sequences)
   - **Product Demo (60 min)**
3. Confirm `COLD` and `COLD_REPLIED` Lead Status values are live in HubSpot
4. Create the cold calling contact views filtered to each status, assigned to the sales rep

---

## Reference Documents

- **Terminology Guide** — `Hubspot/StoneRise-CRM-Terminology-Guide.md` — full definitions for every stage, status, property, and term
- **Stage Swimlane Mapping** — `Hubspot/StoneRise-CRM-Stage-Swimlane-Mapping.md` — quick reference for stage ownership and exit criteria

---

*Document end*
