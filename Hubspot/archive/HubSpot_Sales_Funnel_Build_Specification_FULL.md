# HubSpot Sales Funnel Build Specification – Stonerise

## Purpose
Definitive build spec to enforce the sales process in HubSpot.

## Pipeline Stages
1. Lead – Unqualified
2. Qualification Call Completed
3. Demo Booked
4. Demo Completed
5. Pricing Presented
6. Decision Pending
7. Closed Won
8. Closed Lost

## Properties
### Qualification
- Procurement Problem Confirmed
- Primary Buying Role
- Problem Description
- Demo Justified
- Qualification Outcome

### Demo
- Demo Delivered
- Authority Present on Demo
- Key Pain Confirmed
- Demo Fit Assessment

### Pricing & Decision
- Pricing Presented
- Budget Confirmed
- Decision Owner
- Decision Timeline
- Decision Outcome

### Discount Governance
- Discount Requested
- Discount Approved
- Justification

### Close & Handover
- Contract Signed
- Start Date
- Handover Completed
- Risks

### Hygiene
- Deal Health
- Last Interaction

## Stage Gates
- Demo Booked → Procurement Problem Confirmed = Yes
- Pricing Presented → Demo Delivered + Authority Present
- Closed Won → Contract Signed + Handover Completed

## Workflows
8 workflows: inbound, qualification, demo, gate, pricing, stalled, discount, onboarding.

## Review
Leadership sign-off required before go-live.
