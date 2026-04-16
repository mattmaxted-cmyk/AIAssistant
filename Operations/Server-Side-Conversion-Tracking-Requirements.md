# Business Story: Server-Side Conversion Tracking

## 1. Business Problem Statement

StoneRise's website previously directed prospects to a dedicated "thank you" page after completing a demo request. This page load acted as the conversion signal across Meta, LinkedIn, and Google ad platforms. Following a website update, the contact form is now hosted natively — removing the thank you page redirect entirely.

As a result, the ad platforms have lost visibility of demo request conversions. The business is spending budget across Meta, LinkedIn, and Google with no reliable way to attribute which campaigns, audiences, or creatives are generating leads. Without accurate conversion data feeding back into the ad platforms, campaign optimisation algorithms cannot function effectively, and the marketing team cannot make informed budget allocation decisions.

This is an active and ongoing revenue risk. Every day that conversion tracking is absent, ad spend is wasted and learning is lost.

---

## 2. User Need Description

**Who is affected:**
- Matt (Digital Marketing Manager) — the primary owner of paid media performance and reporting
- Stelios and Michael — who review pipeline activity and marketing ROI

**What they need:**
- Accurate, reliable reporting of which paid campaigns are generating demo request form completions
- Confidence that ad platform algorithms are receiving the conversion signals they need to optimise delivery toward the right audiences

**Current situation (workaround):**
- There is currently no working conversion tracking in place
- Campaign performance data in Meta, LinkedIn, and Google is showing zero or incomplete conversion activity
- Budget allocation and campaign decisions are being made blind

---

## 3. Business Value Proposition

**Expected business outcomes:**
- Restoration of full-funnel visibility — the business can see which ads are generating demo requests
- Ad platform algorithms (Meta Advantage+, Google Smart Bidding, LinkedIn Objective Optimisation) will be able to optimise toward genuine conversion signals, improving lead quality and reducing cost per lead
- Marketing budget can be allocated with confidence to the channels and creatives that are generating pipeline

**What is the cost of NOT doing this:**
- Ad spend continues without measurable return — the business cannot determine whether any campaigns are working
- Platform algorithms optimise toward proxy metrics (clicks, video views) rather than actual lead generation, degrading performance over time
- The marketing team cannot justify or scale paid media investment without conversion data
- Budget that could be reallocated or scaled is effectively wasted

---

## 4. Business Success Criteria

**"Done" from a business perspective means:**
- When a prospect submits the demo request form, that conversion is recorded in Meta Ads Manager, LinkedIn Campaign Manager, and Google Ads
- Historical conversion data begins rebuilding, enabling campaign optimisation within a reasonable learning window
- The marketing team can report on cost per demo request across all three platforms
- No reliance on third-party middleware platforms — the solution is owned and controlled by StoneRise

**Metrics that will improve:**
- Cost per conversion (demo request) across Meta, LinkedIn, and Google
- Campaign-level attribution accuracy
- Ad platform optimisation scores / learning phase health

---

## 5. Business Constraints

**Infrastructure:**
- The solution must be hosted on StoneRise's existing AWS infrastructure — no third-party conversion middleware platforms (e.g. no Zapier, Segment, or similar tools)
- Google Tag Manager remains in use and must be compatible with the solution

**Compliance:**
- The solution must be compliant with GDPR and applicable UK data protection law
- Customer data used for conversion matching (e.g. email address) must be handled in accordance with privacy obligations and only transmitted in a hashed, anonymised form to ad platforms

**Scope:**
- Conversion tracking applies specifically to demo request form completions on the StoneRise website
- Required across three platforms: Meta (Facebook/Instagram), LinkedIn, and Google

**Dependencies:**
- The form is owned and managed by the StoneRise development team
- Any implementation requires Mike's involvement to make changes to the website or server-side infrastructure

---

## 6. User Stories

- As a Digital Marketing Manager, I want to see demo request form completions recorded in Meta, LinkedIn, and Google, so that I can measure which campaigns are generating pipeline.
- As a Digital Marketing Manager, I want the ad platforms to receive accurate conversion signals automatically, so that campaign algorithms can optimise toward real leads rather than proxy metrics.
- As a business, I want conversion data to flow through our own infrastructure, so that we are not dependent on or billed by third-party tools for a core marketing function.
- As a Digital Marketing Manager, I want to report on cost per demo request by platform and campaign, so that I can make evidence-based decisions about where to invest ad budget.
