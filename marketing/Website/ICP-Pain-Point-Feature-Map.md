# StoneRise ICP Pain Point to Feature Map

**Last updated:** 9 Apr 2026
**Purpose:** Maps the biggest pain points for each buyer persona to the StoneRise platform feature that addresses it and the use case page that should exist for it. Used to validate and prioritise the /use-cases page list.

---

## How to Read This Document

- **Pain Point** — the problem the buyer experiences before finding StoneRise
- **Platform Feature** — the specific StoneRise capability that solves it
- **Use Case Page** — the /use-cases page that should own this pain point in organic search and on-site messaging
- Pages marked **(exists)** have a brief written. Pages marked **NEW** are candidates for the next round of briefs.

---

## Commercial Leader

**Titles:** Commercial Director, QS Director, Head of Commercial
**Owned by:** Michael Loizias
**Decision authority:** High
**Core pain theme:** Operational and commercial — variation disputes, payment risk, subcontractor management, final account exposure

| # | Pain Point | Platform Feature | Use Case Page |
|---|-----------|-----------------|---------------|
| 1 | Subcontractor variation claims submitted with no consistent format, no supporting evidence, inflated figures. Every variation becomes a negotiation rather than an assessment. And client variations tracked in spreadsheets miss valuations — revenue stays on the table on both sides. | Certify: Structured variation submission portal, AI variation assessment, automated upstream link with markup calculation, complete variation register for both sides of the contract | `/use-cases/construction-variation-management` (exists) |
| 2 | No central subcontractor register. PQQ compliance managed ad hoc by whoever is running the tender. Insurance documents expire unnoticed mid-contract. | Certify: Subcontractor database with platform-wide profiles, structured PQQ workflow, document expiry alerts, performance tracking | `/use-cases/subcontractor-database-pqq` (exists) |
| 3 | Subcontractor payment applications assessed manually across 20 or 30 live packages. No structured workflow, no audit trail. Inflated applications take too long to challenge and some slip through unchecked. | Certify: Structured payment application assessment workflow, automated payment timelines, complete payment history and audit trail. Pay less notice management available for the minority of cases that require it. | `/solutions/payment-applications-software` (separate — not a /use-cases page) |
| 4 | Subcontract orders raised informally after a verbal agreement. No formal scope document linked to an approved bid. Disputes start before work begins. | Certify: Sub-contract order creation from approved bid adjudication, formal order with agreed scope and pricing attached | NEW — `/use-cases/subcontract-order-management` |
| 5 | Bid adjudication done in spreadsheets. No structured evaluation framework. Award decisions not documented. Impossible to defend if challenged. | Certify: Bid adjudication and evaluation module, settled quotation upload, structured scoring | NEW — `/use-cases/construction-bid-adjudication` |

---

## Finance Leader

**Titles:** Finance Director, FD, Financial Controller, CFO
**Owned by:** Stelios Ioannou
**Decision authority:** High
**Core pain theme:** Financial visibility, cost control, compliance risk, cash flow

| # | Pain Point | Platform Feature | Use Case Page |
|---|-----------|-----------------|---------------|
| 1 | No live view of project margins. Financial reports compiled manually at month end from spreadsheets. By the time the board sees the figures, it is too late to act. | Certify: Commercial analytics dashboards, live margin reporting by project | `/use-cases/construction-commercial-analytics` (exists) |
| 2 | Cash flow forecasting done manually in Excel at board level. Nobody has confidence in the numbers. The business is always working from last month's valuation. | Certify: Cash flow forecasting from live contract data, income and expenditure projected forward automatically | `/use-cases/construction-commercial-analytics` (exists — covered within page) |
| 3 | Manual three-way invoice matching is slow and error-prone. Overbilled invoices get approved because the volume is too high to check everything properly. | Procurement: AI invoice matching with OCR extraction, three-way match against PO and delivery record, discrepancy flagging | `/use-cases/ai-invoice-matching-construction` (exists) |
| 4 | Procurement spend approved informally by email or WhatsApp. No audit trail. No way to enforce spend thresholds or escalation. Invoices arrive for spend nobody authorised. | Procurement: Multi-level approval workflows with value-based routing, mobile approvals, delegation, full audit trail | `/use-cases/construction-approval-workflow` (exists) |
| 5 | No single view of committed costs across all live projects. Cost to complete calculated manually. Budget overruns are only visible once the money has gone. | Certify: Cost to complete analysis, uncommitted cost tracking, live committed versus remaining view | NEW — `/use-cases/construction-cost-management` |
| 6 | Expense claims submitted on paper, by photo or in WhatsApp. No mileage rate control. HMRC compliance depends on whoever processes them that week. | HR: HMRC-compliant expense management, OCR receipt scanning, auto HMRC mileage rates, Sage integration | NEW — `/use-cases/construction-expense-management` |

---

## Procurement Leader

**Titles:** Procurement Manager, Procurement Director, Head of Procurement, Buying Manager
**Owned by:** Michael Loizias
**Decision authority:** Medium-High
**Core pain theme:** Operational efficiency, supplier control, order accuracy, cost reduction

| # | Pain Point | Platform Feature | Use Case Page |
|---|-----------|-----------------|---------------|
| 1 | Purchase orders raised by email with no standard format, no spec attached, no record of what was agreed. Disputes with suppliers start the moment something arrives wrong. | Procurement: Automated PO creation from approved requests, full line item detail, project codes and specs attached | `/use-cases/construction-purchase-order-software` (exists) |
| 2 | Supplier quotes managed by email, returned in different formats, compared manually in a spreadsheet. The best price is not always selected because comparison takes too long. | Procurement: Multi-supplier RFQ, intelligent line-item quote split, side-by-side comparison view, quotation extraction AI | `/use-cases/construction-rfq-software` (exists) |
| 3 | No live view of delivery status. Short deliveries signed off by site managers in a rush. Discrepancies only noticed when the invoice arrives weeks later. | Procurement: Real-time delivery tracking, mobile receipt confirmation, delivery photos, short delivery alerts | `/use-cases/construction-delivery-tracking` (exists) |
| 4 | No central supplier directory. The same suppliers get used out of habit regardless of price or performance. No way to track which suppliers consistently under-deliver. | Procurement: Supplier management directory, branch management, performance tracking, document storage per supplier | NEW — `/use-cases/construction-supplier-management` |
| 5 | Repeat orders placed from memory with inconsistent specs. The same materials get ordered with slightly different descriptions each time, creating catalogue chaos and comparison problems. | Procurement: Product catalogue with auto-SKUs, item lists for repeat orders, standardised descriptions | NEW — `/use-cases/construction-product-catalogue` |
| 6 | Materials requests created from scratch for each order. No way to build on a previous order or save commonly used combinations. Procurement team wastes time on admin rather than supplier management. | Procurement: Request creation with saved item lists, auto-save drafts, bulk operations | Covered within `/use-cases/construction-purchase-order-software` or new page |

---

## Operations Leader

**Titles:** Managing Director, MD, CEO, Owner, Operations Director
**Owned by:** Stelios Ioannou
**Decision authority:** Highest
**Core pain theme:** Business-wide control, risk management, scaling, compliance

| # | Pain Point | Platform Feature | Use Case Page |
|---|-----------|-----------------|---------------|
| 1 | No visibility of which projects are profitable until it is too late to recover the margin. Board decisions made on last month's data. | Certify: Commercial analytics dashboards, live margin by project, cost to complete | `/use-cases/construction-commercial-analytics` (exists) |
| 2 | Procurement spend going out without proper authority. No enforceable controls across multiple sites and projects. Costs spiral before anyone notices. | Procurement: Value-based approval routing, mobile approvals, delegation, spend audit trail | `/use-cases/construction-approval-workflow` (exists) |
| 3 | Employee records, leave requests, expenses, training records and certifications all managed in different systems or spreadsheets. HR administration is a manual burden on managers and directors. | HR App: Full employee lifecycle management including records, leave, expenses, training, documents in one system | NEW — `/use-cases/construction-hr-software` |
| 4 | CSCS cards and trade certifications tracked on spreadsheets. Expired cards not flagged until a site audit. The business carries compliance risk it does not know about. | HR: Training records matrix covering internal, external, vocational, CSCS and professional certs, document expiry alerts | NEW — `/use-cases/construction-training-records` |
| 5 | Subcontractors with failed compliance checks or H&S audit failures continue to be awarded new packages because nobody has a joined-up view of their record. | Certify: Subcontractor PQQ and compliance database, performance tracking, H&S audit cross-check warnings | `/use-cases/subcontractor-database-pqq` (exists — partial) |
| 6 | No formal absence management process. Bradford Factor not tracked. Patterns of short-term absence invisible to directors until a problem is serious. | HR: Leave and absence management, multi-type leave requests, Bradford Factor intelligence, manager portal with team oversight | NEW — `/use-cases/construction-absence-management` |

---

## Use Case Page Status Summary

### Existing — briefs written

| Page | Persona | App |
|------|---------|-----|
| `/use-cases/construction-variation-management` | Commercial Leader | Certify |
| `/use-cases/subcontractor-database-pqq` | Commercial / Operations Leader | Certify |
| `/use-cases/construction-commercial-analytics` | Finance / Operations Leader | Certify |
| `/use-cases/construction-purchase-order-software` | Procurement Leader | Procurement |
| `/use-cases/construction-rfq-software` | Procurement Leader | Procurement |
| `/use-cases/ai-invoice-matching-construction` | Finance Leader | Procurement |
| `/use-cases/construction-approval-workflow` | Operations / Finance Leader | Procurement |
| `/use-cases/construction-delivery-tracking` | Procurement Leader | Procurement |

### New — briefs to be written, in priority order

| Priority | Page | Persona | App |
|----------|------|---------|-----|
| High | `/use-cases/construction-hr-software` | Operations Leader | HR |
| High | `/use-cases/construction-training-records` | Operations Leader | HR |
| High | `/use-cases/construction-cost-management` | Finance Leader | Certify |
| Medium | `/use-cases/subcontract-order-management` | Commercial Leader | Certify |
| Medium | `/use-cases/construction-supplier-management` | Procurement Leader | Procurement |
| Medium | `/use-cases/construction-absence-management` | Operations Leader | HR |
| Medium | `/use-cases/construction-expense-management` | Finance Leader | HR |
| Lower | `/use-cases/construction-bid-adjudication` | Commercial Leader | Certify |
| Lower | `/use-cases/construction-product-catalogue` | Procurement Leader | Procurement |
