# StoneRise CRM Terminology Guide

**For New Starters & Sales Team Reference**

| Field | Value |
|-------|-------|
| **Version** | 2.0 |
| **Last Updated** | February 2026 |
| **Owner** | Matt Maxted |

---

## How Our Sales Process Works

At StoneRise, we manage leads through **two phases**:

1. **Pre-Pipeline (Contact-Based)** — From first enquiry until a product demo is booked
2. **Deal Pipeline** — From demo booking through to close

This document explains the terminology, stages, and statuses you'll encounter daily in HubSpot.

---

## Part 1: Lifecycle Stages

Lifecycle stages track a contact's overall relationship with StoneRise. Every contact has one lifecycle stage.

| Stage | What It Means | How They Get There |
|-------|---------------|-------------------|
| **Lead** | Someone who's requested a demo but hasn't had a qualification call yet | Submitted the "Request a Demo" form |
| **MQL** | Marketing Qualified Lead — intro call is booked | Booked an Intro Call meeting |
| **SQL** | Sales Qualified Lead — passed qualification, ready for product demo | Completed qualification form with outcome "Qualified" |
| **Opportunity** | Has a deal — product demo is booked | Product Demo meeting scheduled |
| **Customer** | Paying customer | Deal marked Closed Won |
| **Other** | Lost or opted out | Deal lost or explicit opt-out |

---

## Part 2: Lead Status

Lead Status provides more detail about where a contact sits within their lifecycle stage. Think of it as the "sub-stage."

### Active Statuses (These contacts need action)

| Status | Meaning | What To Do | Contact View |
|--------|---------|------------|--------------|
| **NEW** | Just submitted a demo request | Book an intro call ASAP | "Need Intro Call" |
| **ATTEMPTED_TO_CONTACT** | You've tried calling/emailing, no response yet | Keep following up | "Need Intro Call" |
| **IN_PROGRESS** | Active conversation happening | Work towards booking the call | "Need Intro Call" |
| **QUALIFICATION_SCHEDULED** | Intro call is booked | Prep for the call | "Intro Calls Scheduled" |
| **QUALIFIED** | Passed qualification, no demo booked yet | Book the product demo | "Qualified - Ready for Demo" |
| **NO_SHOW** | Missed their intro call | Follow up to reschedule | "No Shows - Follow Up" |

### Inactive Statuses (Nurture or closed)

| Status | Meaning | What Happens |
|--------|---------|--------------|
| **OPEN_DEAL** | Has an active deal in the pipeline | Managed via deal stages |
| **NO_RESPONSE** | Completed outreach sequence with no engagement | Periodic follow-up |
| **BAD_TIMING** | Good fit but not ready right now | Auto follow-up at 30 and 90 days |
| **NOT_INTERESTED** | Said no, but may reconsider later | Re-engagement sequences |
| **UNQUALIFIED** | Not a fit for StoneRise | No follow-up |
| **DO_NOT_CONTACT** | Explicitly opted out | Never contact again |

---

## Part 3: The Deal Pipeline

### How Deals Get Created

Deals are created **automatically** when a product demo is booked — but only if the Sales Qualification Form has been completed first.

**The mandatory process:**
1. Hold the Intro Call with the lead
2. **Complete the Sales Qualification Form** (mandatory — no exceptions)
3. Lead books a Product Demo
4. Set the contact property "Ready for Demo" = Yes (this can only be done if the qualification form is complete)
5. Deal is auto-created in "Demo Booked" stage

**If the qualification form is not completed:** When a lead books a demo but the form hasn't been filled in, you'll receive an internal email reminder. The deal will not be created until the form is complete and "Ready for Demo" is set to Yes.

**Why this matters:** The qualification data captured in the form is copied to the deal. Without it, we can't track pipeline properly or prepare for demos effectively.

---

### Stage 1: Demo Booked (20% probability)

**What it means:** Product demo is scheduled but hasn't happened yet.

**Who owns it:** Sales Rep (deal owner)

**Required before moving forward:**
- Demo meeting must be marked complete
- Deal Value populated
- Demo notes logged

**Key property:** Deal Value (estimated contract value)

---

### Stage 2: Demo Completed (40% probability)

**What it means:** Demo has been delivered, gathering decision information.

**Who owns it:** Sales Rep

**Required before moving forward:**
- Demo Recording Link
- Demo Notes
- Confirmed Budget Range
- Confirmed Timeline
- Modules Demonstrated
- Next Steps Agreed
- **Authority Present on Demo = Yes** ← Critical gate

**Why Authority Present matters:** We don't progress deals to pricing unless a decision-maker attended the demo. This prevents wasted effort on deals that stall.

---

### Stage 3: Pricing Presented & Decision Pending (60% probability)

**What it means:** Pricing has been sent, waiting for customer decision.

**Who owns it:** Sales Rep

**Required before moving forward:**
- Pricing Sent Date
- Pricing Sent Method
- Decision Maker Email Confirmed
- Proposal Document Link
- Expected Decision Date

**If requesting a discount:**
- Discount Requested = Yes
- Discount Approved = Yes (by Haidar ≤15%, Stelios >15%)
- Discount Justification (written explanation)

---

### Stage 4: Won Pending Handover Approval (90% probability)

**What it means:** Contract is signed, deal is won, but Customer Success must review and approve the handover before onboarding begins.

**Who owns it:** Sales Rep moves deal here → Customer Success (David Adair) reviews and approves

**Required before moving forward:**
- Contract Signed Date
- Payment Method
- Contract Value
- Modules Purchased
- Start Date
- All handover information documented (see Part 10)

**Important:** 
- Sales reps move deals INTO this stage when the contract is signed
- **Only David Adair / Customer Success team can move deals OUT of this stage** into Closed Won
- This ensures proper handover review before onboarding begins

---

### Stage 5: Closed Won (100% probability)

**What it means:** Deal fully closed, handover approved, onboarding begins.

**Who owns it:** Customer Success (David Adair)

**Who can move deals here:** Only David Adair / Customer Success team (not Sales Reps)

**Required:**
- **Handover Completed = Yes** ← David confirms handover documentation is sufficient

**What happens automatically:**
- Contact lifecycle → Customer
- Onboarding workflow triggered

---

### Stage 6: Closed Lost (0% probability)

**What it means:** Deal didn't close.

**Who owns it:** Sales Rep

**Required when losing a deal:**
- Lost Reason (dropdown)
- Lost Reason Details (free text)
- Follow-Up Strategy (determines re-engagement timing)

**Lost Reason options:**
- Price too high
- Competitor chosen
- No budget
- Bad timing
- Not the right fit
- No decision maker buy-in
- Other

---

## Part 4: Key Properties Explained

### Contact Properties (Qualification)

| Property | What It Captures |
|----------|------------------|
| **Qualification Outcome** | Result of intro call: Qualified / Not a Fit / Bad Timing |
| **Contact Role** | Decision Maker / Influencer / Champion / End User |
| **Company Size** | Number of employees |
| **Primary Module Interest** | Which StoneRise module they're most interested in |
| **Key Pain Points** | What problems they're trying to solve |
| **Budget Indication** | Rough monthly budget range |
| **Timeline to Decision** | How quickly they expect to decide |
| **Deal Value Estimate** | Your estimate of annual contract value |
| **Ready for Demo** | Yes/No — Set to Yes after qualification form is complete and lead books a demo. Triggers deal creation. |

**Note:** You cannot set "Ready for Demo" = Yes until the Sales Qualification Form is complete. This is enforced by the system.

### Deal Properties

| Property | When Used | Purpose |
|----------|-----------|---------|
| **Deal Type** | All deals | SME / Mid-Market / Enterprise |
| **Deal Health** | All deals | Healthy / At Risk / Stalled |
| **Authority Present on Demo** | Demo Completed | Gate to pricing stage |
| **Discount Requested/Approved** | Pricing Presented | Governance tracking |
| **Handover Completed** | Closed Won | Gate to close |

---

## Part 5: Meetings & Forms

### Meeting Types

| Meeting | Duration | Purpose | Who Books It |
|---------|----------|---------|--------------|
| **Intro Call** | 30 min | Initial qualification conversation | Lead books via calendar link |
| **Product Demo** | 60 min | Full product demonstration | Sales rep books after qualification |

### Forms

| Form | Who Uses It | When |
|------|-------------|------|
| **LP \| Procurement \| Demo Form** | Prospects | Website demo request |
| **Sales Qualification Form** | Sales Rep | After every intro call **(MANDATORY)** |

**Important:** The Sales Qualification Form must be completed after every intro call. This is not optional. Deals cannot be created without it, and you cannot set "Ready for Demo" = Yes until the form is complete.

---

## Part 6: Sequences (Automated Email Cadences)

Sales sequences are pre-built email cadences that run automatically. They use your personal meeting link.

| Sequence | Trigger | Purpose |
|----------|---------|---------|
| **Sequence 1: Intro Call Booking** | New demo request | Encourage contact to book intro call |
| **Sequence 2: No-Show Follow-Up** | Contact no-shows | Re-engage to reschedule |

**Important:** You must have your **Intro Call (30 min)** meeting set as your default meeting link in HubSpot for sequences to work correctly.

---

## Part 7: Workflows (What Happens Automatically)

You don't need to trigger these — they run based on actions:

| What Happens | Automatic Result |
|--------------|------------------|
| Demo request form submitted | Lead created, assigned to rep, Sequence 1 starts |
| Intro Call meeting booked | Lifecycle → MQL, prep task created |
| Qualification form completed (Qualified) | Lifecycle → SQL, "Book demo" task created |
| Product Demo booked WITHOUT qualification form complete | Internal email reminder sent to rep |
| Product Demo booked WITH qualification form complete + "Ready for Demo" = Yes | Deal auto-created, Lifecycle → Opportunity |
| Demo marked complete | Task to fill demo details |
| Deal moved to Demo Completed | Task to prepare pricing |
| Discount requested | Approval task to Haidar (≤15%) or Stelios (>15%) |
| Deal moved to Won Pending Handover Approval | David notified to review handover |
| Deal Closed Won | Contact → Customer, onboarding triggered |
| Deal Closed Lost | Re-engagement sequence based on lost reason |

---

## Part 8: Contact Views (Your Daily Worklists)

These filtered views show contacts needing action:

| View Name | Shows | Action Required |
|-----------|-------|-----------------|
| **Need Intro Call** | Leads who haven't booked a call | Reach out, book the call |
| **Intro Calls Scheduled** | Upcoming qualification calls | Prep for the call |
| **Qualification Forms Pending** | Post-call forms not yet completed | Complete the form |
| **Qualified - Ready for Demo** | SQLs without a demo booked | Book the product demo |
| **No Shows - Follow Up** | Missed intro calls (last 7 days) | Reschedule |
| **Bad Timing Follow-Ups** | Good fits to re-engage | Check in when due |

---

## Part 9: Alerts You'll Receive

| Alert | When | What To Do |
|-------|------|------------|
| **Intro Call Not Booked** | Lead is NEW for >5 days | Manual outreach needed |
| **Intro Call No-Show** | Contact misses their call | Follow-up immediately |
| **Qualification Form Overdue** | Form not done >2 days after call | Complete it now |
| **SQL Stagnant** | Qualified for >10 days without demo | Book demo or update status |
| **Deal Stuck** | Demo Completed >14 days or Pricing >30 days | Progress or escalate |

---

## Part 10: Governance Rules

### Discount Approval

| Discount | Approval Required From |
|----------|------------------------|
| 0% (standard) | None |
| 1-15% | Haidar (Sales Manager) |
| >15% | Stelios (Leadership) |

All discounts require written justification in the `Discount Justification` field.

### Stage Progression

- Deals must progress **sequentially** (you can't skip stages)
- Only Sales Manager can move deals backwards
- Required fields must be completed before stage changes
- **Won Pending Handover Approval → Closed Won:** Only Customer Success (David Adair) can approve this transition

### Handover Requirements

Before moving a deal to Won Pending Handover Approval, sales reps must document:
1. Decision-maker name and role
2. Operational owner (day-to-day user)
3. Reason for purchase
4. Scope agreed (users, modules, exclusions)
5. Current order method and main pain point
6. Accounting system and invoice process
7. Phase 1 success signals (2 metrics)
8. Pricing tier and support level
9. Any risk flags (internal resistance, unclear ownership)

---

## Part 11: Time Targets

These are the benchmarks we aim for:

| Milestone | Target |
|-----------|--------|
| Form submitted → Intro call booked | <3 days |
| Call booked → Call held | <5 days |
| SQL → Demo booked | <7 days |
| Lead → Opportunity (total) | <14 days |
| Demo → Closed Won | <30 days |

---

## Part 12: Quick Reference — Stage to Ownership Mapping

| Phase | Stage | Owner | What Must Happen |
|-------|-------|-------|------------------|
| Pre-Pipeline | Lead (NEW) | Sales Rep | Book intro call |
| Pre-Pipeline | MQL (QUALIFICATION_SCHEDULED) | Sales Rep | Hold call, complete qualification form |
| Pre-Pipeline | SQL (QUALIFIED) | Sales Rep | Book product demo |
| Pipeline | Demo Booked | Sales Rep | Deliver demo, log details |
| Pipeline | Demo Completed | Sales Rep | Confirm authority, send pricing |
| Pipeline | Pricing Presented | Sales Rep | Chase decision, handle objections |
| Pipeline | Won Pending Handover Approval | Sales Rep → CSM | Complete handover documentation, await CSM review |
| Pipeline | Closed Won | Customer Success (David) | Review handover, approve, begin onboarding |
| Pipeline | Closed Lost | Sales Rep | Document reason, set follow-up strategy |

---

## Part 13: Glossary

| Term | Definition |
|------|------------|
| **Lifecycle Stage** | Overall relationship status (Lead, MQL, SQL, Opportunity, Customer, Other) |
| **Lead Status** | Sub-status within lifecycle showing specific position in process |
| **MQL** | Marketing Qualified Lead — someone who has booked a qualification call |
| **SQL** | Sales Qualified Lead — someone who passed qualification |
| **Intro Call** | 30-minute initial qualification meeting |
| **Product Demo** | 60-minute full product demonstration |
| **Authority Present** | Decision-maker attended the demo |
| **Handover** | Documented transfer of customer context from Sales to Customer Success |
| **Deal Health** | Current status indicator: Healthy, At Risk, or Stalled |
| **Sequence** | Automated email cadence that runs in the background |
| **Workflow** | Automated action triggered by an event (form submission, stage change, etc.) |
| **Property Logic** | Required fields that must be completed before stage changes |
| **Contact View** | Filtered list of contacts matching specific criteria |


