# HubSpot Setup - Consolidated Requirements Extraction

## Document Purpose
This document extracts all relevant requirements, data points, and specifications from supporting documents to inform the implementation of `Hubspot_masterplan_mm.md`. Where conflicts exist, the main plan takes precedence.

---

## Table of Contents
1. [Email Templates & Communications](#1-email-templates--communications)
2. [Pipeline Architecture Principles](#2-pipeline-architecture-principles)
3. [Deal Properties & Field Requirements](#3-deal-properties--field-requirements)
4. [Stage Gating & Progression Rules](#4-stage-gating--progression-rules)
5. [Dashboard Requirements](#5-dashboard-requirements)
6. [Workflows Required](#6-workflows-required)
7. [Handover Process](#7-handover-process)
8. [Governance & Permissions](#8-governance--permissions)
9. [Acceptance Testing Criteria](#9-acceptance-testing-criteria)
10. [Conflicts & Resolutions](#10-conflicts--resolutions)

---

## 1. Email Templates & Communications

### Source: `Call_and_Demo_Automated_Emails.md`

**IMPORTANT:** Main plan specifies NO workflow emails to avoid marketing contact consumption. These templates should be used in **Sales Sequences** only.

#### Pre-Call Reminder Template
- **Subject:** Reminder: procurement call today
- **Timing:** Day of call
- **Key Message:** Short 5-10 minute call to understand procurement management
- **Use Case:** Qualification call reminder (Sequence 1 - Qualification Call Booking)

#### No Show Email Template
- **Subject:** (implied - follow-up)
- **Key Elements:**
  - Acknowledge missed call
  - Provide rebooking link
  - Option to decline if not right time
- **Use Case:** No-Show Follow-Up Sequence (Sequence 2)

#### Demo-Booked Confirmation
- **Subject:** Your procurement demo is booked
- **Key Elements:**
  - 30-minute session focused on procurement
  - Cover: order raising, approval, control, time savings
  - Set expectation: decide if commercially viable at end
- **Use Case:** Product demo booking confirmation (Sequence or meeting confirmation)

#### Demo Reminder
- **Key Topics to Cover:**
  - How orders flow through to invoices
  - AI-enabled 3-way invoice matching (order, delivery, invoice)
  - Time savings in accounts and reducing invoice queries/errors
- **Use Case:** Demo preparation task for sales rep

#### Post-Demo Recap
- **Key Elements:**
  - Recap areas covered (raising/approving orders, PO control, 3-way matching, time saved)
  - Commercial decision point
  - Next steps: start date, scope, approval/sign-off
  - Clear exit if not right fit
- **Use Case:** Demo Completed stage follow-up (manual send by rep)

### Integration with Main Plan:
- Use these templates as foundation for **5 Sales Sequences** defined in main plan (Section 8)
- Customize tone and content for each sequence purpose
- Ensure all are delivered via sequences, not workflow emails

---

## 2. Pipeline Architecture Principles

### Source: `Multi_Module_HubSpot_Architecture_and_Governance_WITH_ENTERPRISE.md`

#### Core Architecture Rules:
1. **Companies = Customers**
   - Company record represents the customer organization
   - All deals associate to company record

2. **Deals = Module-Level Opportunities**
   - NEVER use one deal for multiple modules
   - Each module gets its own deal
   - Each module has its own pipeline

3. **Enterprise Handling**
   - Enterprise is a **Deal Type**, not a separate pipeline
   - Create separate deal per module, all linked to same company
   - Optional: use grouping ID to link related enterprise deals
   - Report on enterprise deals using Deal Type filter

#### Global Properties Required:
- **Product/Module** (dropdown: Procurement, HR, Commercial, H&S, Site Management)
- **Deal Type** (dropdown: SME, Mid-Market, Enterprise)
- **Deal Health** (dropdown: Healthy, At Risk, Stalled)
- **Decision Outcome** (for closed deals)

#### Workflow Governance:
- All workflows MUST be pipeline-scoped
- No global blocking workflows across pipelines

#### Reporting Approach:
- Use company-level dashboards to see all module deals for one customer
- Cross-pipeline reports for enterprise view
- NO parent-child deal structures

#### What's NOT Allowed:
- Parent-child deal relationships
- Single "enterprise pipeline"
- Single deal for multiple modules
- Global workflows that block progression

### Conflict with Main Plan:
- **Main plan defines single "StoneRise Sales Pipeline"** - this conflicts with multi-module architecture
- **RESOLUTION REQUIRED:** Main plan overrides, but consider future multi-module expansion
- **Implementation:** Start with single pipeline per main plan, design properties to support future module-specific pipelines

---

## 3. Deal Properties & Field Requirements

### Source: `HubSpot_Sales_Funnel_Build_Specification_FULL.md`

#### Qualification Properties (Contact-Level in Main Plan):
- **Procurement Problem Confirmed** (Yes/No) - CRITICAL for stage gating
- **Primary Buying Role** (Decision Maker / Influencer / Champion / End User)
- **Problem Description** (text area)
- **Demo Justified** (Yes/No)
- **Qualification Outcome** (Qualified / Not a Fit / Bad Timing)

#### Demo Properties (Deal-Level):
- **Demo Delivered** (Yes/No) - REQUIRED for stage progression
- **Authority Present on Demo** (Yes/No) - CRITICAL for stage gating to Pricing
- **Key Pain Confirmed** (text)
- **Demo Fit Assessment** (Good Fit / Possible Fit / Poor Fit)

#### Pricing & Decision Properties:
- **Pricing Presented** (Yes/No)
- **Budget Confirmed** (Yes/No)
- **Decision Owner** (contact association)
- **Decision Timeline** (date field)
- **Decision Outcome** (Won / Lost / Deferred)

#### Discount Governance Properties:
- **Discount Requested** (Yes/No)
- **Discount Approved** (Yes/No)
- **Discount Justification** (text area) - required if discount requested

#### Close & Handover Properties:
- **Contract Signed** (Yes/No)
- **Start Date** (date)
- **Handover Completed** (Yes/No) - REQUIRED for Closed Won
- **Handover Risks** (text area)

#### Deal Hygiene Properties:
- **Deal Health** (dropdown: Healthy / At Risk / Stalled)
- **Last Interaction Date** (date - auto-populated)

### Integration with Main Plan:
Main plan already includes most of these. **Key additions needed:**
1. Add **Procurement Problem Confirmed** to qualification form (contact property)
2. Add **Authority Present on Demo** to Demo Completed stage requirements
3. Add **Discount Governance** properties (Requested, Approved, Justification)
4. Add **Handover Completed** to Closed Won stage requirements
5. Add **Deal Health** property for at-risk tracking

---

## 4. Stage Gating & Progression Rules

### Source: `HubSpot_Sales_Funnel_Build_Specification_FULL.md`

#### Stage Gates (Validation Rules):

**Gate 1: Lead → Demo Booked**
- REQUIRED: Procurement Problem Confirmed = Yes
- REQUIRED: Qualification Outcome = Qualified
- REQUIRED: Product demo meeting scheduled

**Gate 2: Demo Completed → Pricing Presented**
- REQUIRED: Demo Delivered = Yes
- REQUIRED: Authority Present on Demo = Yes
- REQUIRED: All Demo Completed stage properties complete

**Gate 3: Pricing Presented → Closed Won**
- REQUIRED: Contract Signed = Yes
- REQUIRED: Handover Completed = Yes
- REQUIRED: Payment terms confirmed

### Comparison with Main Plan:
Main plan has stage progression validation but doesn't explicitly require:
- "Procurement Problem Confirmed" gate
- "Authority Present on Demo" gate
- "Handover Completed" gate

**RESOLUTION:** Add these three critical gates to main plan validation workflows (Section 6)

---

## 5. Dashboard Requirements

### Sources: 
- `Sales_Manager_Dashboard_Specification_HubSpot_UPDATED.md`
- `Enterprise_Pipeline_Dashboard_Specification_HubSpot.md`

### Dashboard 1: Sales Manager – Pipeline & Governance

#### Priority Order (Governance BEFORE Activity):
1. **Pipeline Health Metrics**
   - Deals by Stage
   - Stage Conversion Rates
   - Average Time in Stage
   - Velocity trends

2. **Governance Red Flags**
   - Deals without authority confirmed
   - Pricing presented without demo delivered
   - Deals at risk or stalled
   - Deals with undefined decision timeline

3. **Forecast Visibility**
   - Decision Pending breakdown
   - Timeline breakdown (this week, this month, this quarter)
   - Won vs Lost by month

4. **Discount & Handover Compliance**
   - Deals with discounts requested
   - Discounts without manager approval
   - Deals won without handover completed

#### Activity Dashboard (Separate - Coaching Use ONLY):
- Calls logged by rep
- Emails sent
- Meetings booked
- Call duration minutes
- **Use for trend analysis only, NOT for ranking reps**

### Dashboard 2: Enterprise Pipeline (Leadership View)

**Purpose:** Consolidated view of large, complex, multi-module opportunities

**Core Filters:**
- Deal Type = Enterprise
- Deal Stage ≠ Closed Lost (unless reviewing losses)

**Required Reports:**
1. Enterprise Pipeline by Company (table view)
2. Enterprise Pipeline Value by Module (bar/pie chart)
3. Enterprise Deals by Stage (funnel)
4. Risk Reports:
   - Deals without authority
   - At risk or stalled deals
   - Undefined decision timeline
5. Commercial Exposure:
   - Deals with discounts
   - Discounted ACV summary
6. Win/Loss Analysis (quarterly review)

**What to EXCLUDE:**
- Calls, emails, meetings, SDR activity metrics

**Review Cadence:**
- Weekly: Leadership review
- Monthly: Risk assessment
- Quarterly: Win/loss analysis

### Integration with Main Plan:
Main plan includes 4 dashboards (Section 11). Need to:
1. **Add governance widgets** to Sales Manager Dashboard (deals without authority, discounts without approval, etc.)
2. **Create Enterprise Dashboard** as 5th dashboard if Deal Type field implemented
3. **Ensure activity metrics are separate** and labeled for coaching only

---

## 6. Workflows Required

### Source: `HubSpot_Sales_Funnel_Build_Specification_FULL.md`

Lists 8 core workflows:
1. **Inbound Lead Processing** - ✓ Matches main plan Workflow 1
2. **Qualification Validation** - ✓ Matches main plan Workflow 3
3. **Demo Booking & Validation** - ✓ Matches main plan Workflow 5
4. **Stage Gate Enforcement** - ✓ Covered in main plan Section 6 (Method 2)
5. **Pricing Presented Actions** - Partially covered in main plan
6. **Stalled Deal Alerts** - ✓ Matches main plan Section 13 (Alert 5)
7. **Discount Approval Routing** - **MISSING from main plan**
8. **Closed Won → Onboarding Handoff** - ✓ Mentioned in main plan Stage 4 exit actions

### Additional Workflow Needed:
**Workflow 6: Discount Approval Routing**
- **Trigger:** Discount Requested = Yes
- **Actions:**
  1. Create approval task for Sales Manager (Haidar)
  2. Notify manager with discount % and justification
  3. Prevent deal progression until Discount Approved = Yes
  4. If discount >15%, escalate to leadership (Stelios)
  5. Log approval/rejection in deal timeline

### Integration with Main Plan:
- Add Discount Approval Routing as **Workflow 6** (insert after main plan Workflow 5)
- Ensure all 8 critical workflows are documented

---

## 7. Handover Process

### Source: `Sales_to_Onboarding_Handover_Template.md`

#### Handover Template Requirements:

**1. Commercial & Decision Context**
- Decision-maker name and role
- Operational owner (day-to-day user)
- Reason for purchase (business driver)

**2. Scope Agreed**
- Users/pricing tier confirmed
- Teams or departments included
- Explicit exclusions

**3. Procurement Snapshot**
- Current order method (email, spreadsheet, verbal, etc.)
- Main pain point (manual, no visibility, errors, compliance)

**4. Accounts Context**
- Current accounting system
- Invoice approval process
- Finance team expectations

**5. Phase 1 Success Metrics**
- Signal 1: What indicates value in first 30 days
- Signal 2: What indicates adoption success

**6. Commercial Guardrails**
- Pricing tier and commitments
- Support level included
- Contract terms and renewal date

**7. Risk Flags**
- Internal resistance or skepticism
- Unclear ownership or accountability
- Other implementation risks

**8. Out of Scope (DO NOT INCLUDE)**
- Detailed workflows (discovery task)
- Supplier setup (discovery task)
- Approval chains (discovery task)
- Invoice matching rules (discovery task)
- User permissions (discovery task)

### Integration with Main Plan:
- Add **Sales-to-Onboarding Handover form** as custom deal property or associated record
- Make **Handover Completed = Yes** a REQUIRED field for Closed Won stage progression
- Notify Customer Success Manager (David Adair) when handover is complete
- Include handover template in sales team training (Section 16)

---

## 8. Governance & Permissions

### Sources: Multiple documents

#### Deal Health Tracking:
- **Healthy:** On track, regular activity, clear next steps
- **At Risk:** Stalled >7 days, lack of authority, unclear decision process
- **Stalled:** No activity >14 days, ghosted contact, no response

#### Discount Governance:
- Standard pricing = no approval needed
- Discounts up to 15% = Sales Manager approval (Haidar)
- Discounts >15% = Leadership approval (Stelios)
- All discounts require written justification
- Track discount approval status in deal properties

#### Stage Progression Permissions:
- Sales reps: Can progress deals forward only
- Sales Manager (Haidar): Can move deals backward (exception handling)
- Only manager can override stage gates in exceptional circumstances

#### Data Integrity:
- Enable "Deal stage must progress sequentially"
- Required field enforcement at each stage
- Validation workflows as secondary enforcement layer

### Integration with Main Plan:
Main plan Section 9 covers this. **Add:**
- Discount approval hierarchy
- Deal Health status tracking and alerts
- Manager override permissions for stage gates

---

## 9. Acceptance Testing Criteria

### Source: `HubSpot_Build_Acceptance_Checklist.md`

Before go-live, verify:

#### 1. Pipeline Structure
- [ ] Single pipeline exists (or per-module if multi-module)
- [ ] Stages match approved list exactly
- [ ] No extra or renamed stages
- [ ] Stages in correct order

#### 2. Deal Properties
- [ ] All qualification properties created
- [ ] All demo properties created
- [ ] All pricing & decision properties created
- [ ] Discount governance properties configured
- [ ] Handover & onboarding properties exist

#### 3. Stage Gating
- [ ] Demo Booked gated by Procurement Problem Confirmed
- [ ] Pricing Presented gated by Demo Delivered + Authority Present
- [ ] Closed Won gated by Contract Signed + Handover Completed

#### 4. Workflows
- [ ] Inbound lead processing tested
- [ ] Qualification validation tested
- [ ] Demo booking tested
- [ ] Pricing workflow tested
- [ ] Stalled deal alerts tested
- [ ] Discount approval routing tested
- [ ] Closed Won → onboarding tested

#### 5. Email Templates
- [ ] All required templates loaded
- [ ] Templates match approved wording
- [ ] Personalization tokens working

#### 6. Dashboards
- [ ] Pipeline dashboard configured
- [ ] Governance dashboard configured
- [ ] Activity dashboard (coaching) configured
- [ ] Enterprise dashboard configured (if applicable)

#### 7. Permissions
- [ ] Sales reps: view/edit own deals
- [ ] Manager: view/edit all deals + approve discounts
- [ ] Leadership: full visibility

#### 8. End-to-End Testing
- [ ] Test path: Form → Lead → MQL → SQL → Opportunity → Won
- [ ] Test path: Form → Lead → Unqualified → Lost
- [ ] Test path: No-show → Follow-up → Reschedule
- [ ] Test path: Bad timing → Nurture → Re-engage
- [ ] Test path: Demo → Pricing → Lost (competitor) → Win-back
- [ ] Test all automation triggers
- [ ] Verify dashboard metrics populate correctly
- [ ] Confirm NO marketing contacts consumed by sequences

#### 9. Sign-Off
- Sales Lead (Haidar): ______
- Marketing/HubSpot Owner (Matt): ______
- Approved for Go-Live: Yes / No

### Integration with Main Plan:
- Use this checklist in **Week 3-4 Testing Phase** (Section 17)
- Add acceptance testing as final TODO in main plan
- Require sign-off before go-live

---

## 10. Conflicts & Resolutions

### Conflict 1: Single Pipeline vs Multi-Module Architecture
**Multi_Module doc:** Each module should have its own pipeline  
**Main plan:** Single "StoneRise Sales Pipeline"

**RESOLUTION (Main Plan Overrides):**
- Implement single pipeline as per main plan
- Add "Primary Module Interest" property to support future split
- Design with module-specific pipelines in mind for future scaling
- Use Deal Type and Module properties for reporting segmentation

### Conflict 2: Pipeline Stages
**HubSpot_Sales_Funnel_Build_Specification_FULL.md:** 8 stages including "Qualification Call Completed" and "Decision Pending" as separate stages  
**Main plan:** 5 stages (Demo Booked, Demo Completed, Pricing Presented, Closed Won, Closed Lost)

**RESOLUTION (Main Plan Overrides):**
- Use 5-stage pipeline from main plan
- Track qualification at contact level using Lead Status property (not deal stage)
- "Decision Pending" is implicit in "Pricing Presented & Decision Pending" stage

### Conflict 3: Workflow Email Delivery
**Call_and_Demo_Automated_Emails.md:** Implies workflow-based emails  
**Main plan:** Explicitly states "Do not add workflow emails to avoid marketing contact consumption" - use Sales Sequences instead

**RESOLUTION (Main Plan Overrides):**
- NO emails in workflows
- All email communication via Sales Sequences
- Workflows only: update properties, create tasks, send internal notifications

### Conflict 4: Dashboard Focus
**Sales_Manager_Dashboard_Specification:** Activity metrics in separate coaching-only dashboard  
**Main plan Dashboard 3:** Includes "Sales Activity Metrics" in Sales Manager Overview

**RESOLUTION (Principle Alignment):**
- Keep activity metrics in main dashboard BUT label clearly "For Trend Analysis Only"
- Add disclaimer: "Not for rep ranking"
- Prioritize governance metrics above activity metrics in dashboard layout

---

## 11. Key Additions to Main Plan

Based on extraction, these elements should be ADDED to main plan:

### Properties to Add:
1. **Contact Properties:**
   - Procurement Problem Confirmed (Yes/No)

2. **Deal Properties:**
   - Deal Type (SME / Mid-Market / Enterprise)
   - Deal Health (Healthy / At Risk / Stalled)
   - Authority Present on Demo (Yes/No)
   - Discount Requested (Yes/No)
   - Discount Approved (Yes/No)
   - Discount Justification (text area)
   - Handover Completed (Yes/No)

### Workflows to Add:
- **Workflow 6: Discount Approval Routing** (insert after main plan Workflow 5)

### Stage Gates to Add:
- **Demo Booked gate:** Procurement Problem Confirmed = Yes
- **Pricing Presented gate:** Authority Present on Demo = Yes
- **Closed Won gate:** Handover Completed = Yes

### Dashboards to Add/Modify:
- **Dashboard 2 (Deal Pipeline Health):** Add governance widgets (deals without authority, discounts without approval)
- **Dashboard 5 (New):** Enterprise Pipeline Consolidated View (if implementing Deal Type property)

### Forms/Templates to Add:
- **Sales-to-Onboarding Handover Template** (Section 7 above)

### Testing Checklist:
- Add **Acceptance Testing Checklist** to Week 4 testing phase

---

## 12. Implementation Priority Matrix

### CRITICAL (Must Have for Go-Live):
- All 5 core deal stages with required properties
- Stage gating: Procurement Problem Confirmed, Authority Present, Handover Completed
- Discount governance properties and approval workflow
- Deal Health tracking
- 5 sales sequences (no workflow emails)
- Pre-pipeline contact views (all 7)
- Closed Lost conditional routing with sequence enrollments
- Sales Manager governance dashboard

### HIGH PRIORITY (Launch Week):
- Handover template and process
- Enterprise Deal Type property and reporting
- All 5 automated alert workflows
- Acceptance testing checklist completion
- Sales team training on governance requirements

### MEDIUM PRIORITY (Post-Launch):
- Enterprise consolidated dashboard
- Win/loss analysis reports
- Activity coaching dashboard
- Competitive intelligence tracking
- Advanced fall-off analysis reports

### FUTURE CONSIDERATION:
- Module-specific pipelines (when scaling to multiple products)
- Parent-child deal relationships (if enterprise complexity requires)
- Marketing automation integration (when marketing team expands)

---

## 13. Key Personnel & Responsibilities

### Sales Lead: Haidar
- Process owner
- Discount approval authority (up to 15%)
- Training lead for sales team
- Weekly governance review
- Sign-off on acceptance testing

### Marketing/HubSpot Owner: Matt
- HubSpot configuration and build
- Form setup and lead source tracking
- Reporting and dashboard creation
- Marketing contact management
- Training on reporting tools

### Executive Approval: Stelios
- Final approval on build specification
- Discount approval >15%
- Monthly performance review
- Strategic pipeline decisions

### Customer Success: David Adair
- Receives Closed Won handover notifications
- Onboarding workflow recipient
- Phase 1 success tracking

### Executive Assistant: Maria Feliciano
- Administrative support
- HubSpot admin backup
- Coordination of training sessions

---

## 14. Success Metrics (Extracted from All Sources)

### Pre-Pipeline Metrics:
- Qualification call booking rate: >60% (within 7 days)
- No-show rate: <20%
- Qualification pass rate: Track by rep
- Days NEW → QUAL_SCHEDULED: Target <3 days
- Days QUAL_SCHEDULED → Call held: Target <5 days
- Days SQL → Demo booked: Target <7 days

### Deal Pipeline Metrics:
- Demo Booked → Demo Completed conversion: Track %
- Demo Completed → Pricing Presented conversion: Track %
- Pricing Presented → Closed Won conversion: Track %
- Average days Demo Booked → Closed Won: Target <30 days

### Governance Metrics:
- % deals with Procurement Problem Confirmed before demo
- % deals with Authority Present on demos
- % deals with approved handover before Closed Won
- Discount approval turnaround time: <24 hours
- % discounts approved vs rejected

### Quality Metrics:
- Deal Health distribution (target: >70% healthy)
- % deals stalled >14 days (target: <10%)
- Customer onboarding completion rate: >95%
- Phase 1 success signal achievement: >80%

---

## Document Control

**Created:** 2026-02-03  
**Source Documents:**
- Hubspot_masterplan_mm.md (PRIMARY - OVERRIDES ALL)
- Call_and_Demo_Automated_Emails.md
- Enterprise_Pipeline_Dashboard_Specification_HubSpot.md
- HubSpot_Build_Acceptance_Checklist.md
- HubSpot_Sales_Funnel_Build_Specification_FULL.md
- Multi_Module_HubSpot_Architecture_and_Governance_WITH_ENTERPRISE.md
- Sales_Manager_Dashboard_Specification_HubSpot_UPDATED.md
- Sales_to_Onboarding_Handover_Template.md

**Next Action:** Review with Haidar and Matt before implementation
