# CRM Stage → Swimlane Mapping

**Mapping CRM stages to functional ownership and requirements**

| Version | 2.0 |
|---------|-----|
| Last Updated | February 2026 |

---

## Pre-Pipeline (Contact-Based)

| Phase | Lifecycle Stage | Lead Status | Swimlane Owner | Required Action | Artefact | Exit Criteria |
|-------|-----------------|-------------|----------------|-----------------|----------|---------------|
| Inbound | Lead | NEW | Sales Rep | Book intro call | — | Intro call scheduled |
| Qualification | MQL | QUALIFICATION_SCHEDULED | Sales Rep | Hold intro call, complete qualification form | Sales Qualification Form | Form completed with outcome |
| Demo Booking | SQL | QUALIFIED | Sales Rep | Book product demo, set "Ready for Demo" = Yes | — | Product demo scheduled, deal created |

---

## Deal Pipeline

| Stage | Probability | Swimlane Owner | Required Action | Required Properties | Exit Criteria |
|-------|-------------|----------------|-----------------|---------------------|---------------|
| **Demo Booked** | 20% | Sales Rep | Deliver product demo | Deal Value | Demo marked complete, notes logged |
| **Demo Completed** | 40% | Sales Rep | Confirm authority, prepare pricing | Demo Recording Link, Demo Notes, Budget Range, Timeline, Modules Demonstrated, Next Steps, Authority Present = Yes | Authority confirmed, ready for pricing |
| **Pricing Presented** | 60% | Sales Rep | Send proposal, handle objections, chase decision | Pricing Sent Date, Pricing Method, DM Email Confirmed, Proposal Link, Expected Decision Date, (Discount Approved if applicable) | Customer decision reached |
| **Won Pending Handover Approval** | 90% | Sales Rep → Customer Success | Complete handover documentation | Contract Signed Date, Payment Method, Contract Value, Modules Purchased, Start Date, All handover fields | Handover reviewed by CSM |
| **Closed Won** | 100% | Customer Success (David Adair) | Approve handover, trigger onboarding | Handover Completed = Yes | Onboarding begins |
| **Closed Lost** | 0% | Sales Rep | Document loss, set follow-up strategy | Lost Reason, Lost Reason Details, Follow-Up Strategy | Re-engagement scheduled or closed |

---

## Critical Gates

| Gate | Required Property | Value | Enforced By |
|------|-------------------|-------|-------------|
| Deal Creation | Sales Qualification Form | Completed | System — deal won't create without it |
| Deal Creation | Ready for Demo | Yes | Sales Rep sets manually after form complete |
| → Pricing Presented | Authority Present on Demo | Yes | Property logic |
| → Won Pending Handover | Contract Signed | Yes | Property logic |
| → Closed Won | Handover Completed | Yes | Customer Success only |

---

## Discount Approval Gates

| Discount Level | Approver | Swimlane |
|----------------|----------|----------|
| 0% (standard) | None | Sales Rep |
| 1–15% | Haidar | Sales Manager |
| >15% | Stelios | Leadership |

---

## Stage Transition Permissions

| Transition | Who Can Do It |
|------------|---------------|
| Any stage → next stage (forward) | Sales Rep (except Closed Won) |
| Any stage → previous stage (backward) | Sales Manager only |
| Won Pending Handover → Closed Won | Customer Success only |
| Any stage → Closed Lost | Sales Rep |

---

## Lost Reason Routing

| Lost Reason | Lead Status Set To | Follow-Up Action |
|-------------|--------------------|------------------|
| Bad Timing | BAD_TIMING | Re-engage 90 days |
| No Budget | BAD_TIMING | Re-engage 180 days |
| Competitor Chosen | NOT_INTERESTED | Win-back sequence 180 days |
| No Decision Maker Buy-In | NOT_INTERESTED | Product update sequence 180 days |
| Not the Right Fit | UNQUALIFIED | No follow-up |
| Price Too High | BAD_TIMING | Re-engage based on strategy |

---

**Rule:** A contact or deal must not advance to the next stage unless the required artefact is complete and exit criteria are met. This enforces ownership discipline across swimlanes.

---

*Document end*
