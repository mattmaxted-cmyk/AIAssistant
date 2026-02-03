# UTM Implementation Summary

**Date:** February 2, 2026  
**Implemented by:** AI Assistant  
**Owner:** Matt (Digital Marketing Manager)

---

## What Was Implemented

A comprehensive UTM parameter system with strict enforcement for all StoneRise marketing content.

---

## Files Created

### 1. Cursor Rule (Enforcement)
**Location:** `.cursor/rules/utm-parameters-required.mdc`

This rule automatically enforces UTM requirements when working with marketing files. It includes:
- Complete UTM parameter structure and naming conventions
- Validation checklist
- Common mistakes to avoid
- Monthly campaign reference table
- Complete URL examples

**Scope:** Applies to all files in `.cursor/marketing/**/*.md`  
**Enforcement:** Error level (blocks publishing without proper UTMs)

### 2. Quick Reference Guide
**Location:** `.cursor/marketing/UTM-QUICK-REFERENCE.md`

A concise, easy-to-reference guide containing:
- UTM template
- Source/medium/campaign lookup tables
- Active campaigns for February 2026
- Complete URL examples
- Pre-publish checklist

### 3. Post Template
**Location:** `.cursor/marketing/POST-TEMPLATE.md`

A fill-in-the-blanks template for creating new social posts with proper UTM tracking:
- Post information fields
- Content structure
- UTM breakdown table
- Pre-publish checklist
- Complete worked example

### 4. Marketing Folder README
**Location:** `.cursor/marketing/README.md`

Documentation for the marketing folder explaining:
- File structure
- How to create new posts
- UTM naming conventions
- Common mistakes
- Tools and resources

### 5. Updated LinkedIn Posts
**Location:** `.cursor/marketing/linkedin-posts-feb-2026.md`

All existing LinkedIn posts (36 URLs total) have been updated with proper UTM parameters:
- 12 Michael Loizias posts
- 8 Stelios Ioannou posts
- 16 StoneRise Company Page posts

---

## UTM Naming Structure

### Complete Format
```
?utm_source=[platform]_[account]&utm_medium=[type]&utm_campaign=[YYYYMM]_[theme]_[product]&utm_content=[identifier]&utm_term=[keyword]
```

### Parameters

| Parameter | Format | Example | Required |
|-----------|--------|---------|----------|
| utm_source | `[platform]_[account]` | `linkedin_michael` | ✅ Yes |
| utm_medium | `[type]` | `organic_social` | ✅ Yes |
| utm_campaign | `[theme]_[product]` | `invoice_ai_procurement` | ✅ Yes |
| utm_content | `[YYYYMMDD]_post[N]` | `20260203_post1` | ✅ Yes |
| utm_term | `[keyword]` | `procurement_software_uk` | ⚠️ Paid only |

**Note:** utm_campaign NO LONGER includes date. Date is only in utm_content for precise tracking.

---

## Source Values

| Account/Platform | utm_source |
|------------------|------------|
| Michael Loizias LinkedIn | `linkedin_michael` |
| Stelios Ioannou LinkedIn | `linkedin_stelios` |
| StoneRise Company LinkedIn | `linkedin_company` |
| StoneRise Facebook | `facebook_company` |
| StoneRise Instagram | `instagram_company` |
| StoneRise Twitter/X | `twitter_company` |
| Email campaigns | `email` |
| Google Ads | `google_ads` |
| Meta Ads (FB/IG paid) | `meta_ads` |

---

## Medium Values

| Traffic Type | utm_medium |
|--------------|------------|
| Unpaid social posts | `organic_social` |
| Paid social ads | `paid_social` |
| Email campaigns | `email` |
| Google PPC | `cpc` |
| Retargeting | `retargeting` |
| Partnerships | `partnership` |

---

## Campaign Naming

**Format:** `YYYYMM_[theme]_[product]`

**Product codes:**
- `procurement` — Procurement App features
- `hr` — HR App features
- `commercial` — Commercial/QS App
- `general` — Multi-product or general content

**Examples:**
- `202602_invoice_ai_procurement` — Invoice AI feature campaign
- `202602_roi_calculator_general` — ROI calculator (all products)
- `202603_commercial_launch_commercial` — Commercial App launch
- `202602_weekly_post_general` — General weekly content

---

## Active Campaigns (February 2026)

| Campaign | utm_campaign | Product |
|----------|--------------|---------|
| Invoice AI | `202602_invoice_ai_procurement` | Procurement |
| ROI Calculator | `202602_roi_calculator_general` | General |
| Delivery Tracking | `202602_delivery_tracking_procurement` | Procurement |
| Mobile Expenses | `202602_mobile_expenses_hr` | HR |
| Commercial Teaser | `202602_commercial_teaser_commercial` | Commercial |
| Supplier Management | `202602_supplier_mgmt_procurement` | Procurement |
| Cash Flow | `202602_cash_flow_general` | General |
| Approval Workflows | `202602_approval_workflows_procurement` | Procurement |
| Connected Systems | `202602_connected_systems_general` | General |
| Payment Errors | `202602_payment_errors_commercial` | Commercial |
| Scaling Efficiency | `202602_scaling_efficiency_general` | General |
| Three Way Matching | `202602_three_way_matching_procurement` | Procurement |
| RFQ Workflow | `202602_rfq_workflow_procurement` | Procurement |
| Origin Story | `202602_origin_story_general` | General |
| Roadmap Preview | `202602_roadmap_preview_general` | General |
| Data Security | `202602_data_security_general` | General |
| UX Focus | `202602_ux_focus_general` | General |
| Cost Analysis | `202602_cost_analysis_general` | General |

---

## Example URLs

### Michael LinkedIn - Invoice AI Feature
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=202602_invoice_ai_procurement&utm_content=week1_post1
```

### Stelios LinkedIn - ROI Calculator
```
https://www.stonerise.tech/products/procurement/ROI?utm_source=linkedin_stelios&utm_medium=organic_social&utm_campaign=202602_roi_calculator_general&utm_content=week1_post1
```

### Company Page - Demo Request
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_company&utm_medium=organic_social&utm_campaign=202602_invoice_ai_procurement&utm_content=week1_post1
```

### Meta Paid Ad
```
https://www.stonerise.tech/request-demo?utm_source=meta_ads&utm_medium=paid_social&utm_campaign=202602_features_procurement&utm_content=carousel_supplier_mgmt
```

### Google Search Ad
```
https://www.stonerise.tech/request-demo?utm_source=google_ads&utm_medium=cpc&utm_campaign=202602_search_procurement&utm_content=text_ad_v1&utm_term=procurement_software_uk
```

---

## Validation Rules

All UTMs must follow these rules:

✅ **Required:**
- All 5 parameters present (utm_term optional for organic)
- All lowercase characters only
- No spaces (use underscores)
- Correct source for platform and account
- Current date in campaign (YYYYMM)
- Descriptive content identifier

❌ **Forbidden:**
- Missing any required parameters
- Capital letters in values
- Spaces in values
- Generic campaign names (e.g., "february")
- Incomplete source (e.g., "linkedin" instead of "linkedin_michael")

---

## Workflow for New Posts

1. **Open template:** Use `POST-TEMPLATE.md`
2. **Fill in details:** Date, platform, account, campaign
3. **Write content:** Draft post and CTA
4. **Build UTMs:** Use `UTM-QUICK-REFERENCE.md` for values
5. **Validate:** Check all parameters against rules
6. **Test URL:** Click to verify it works
7. **Publish:** Schedule or post immediately
8. **Track:** Add to analytics tracking

---

## Tools & Resources

**Google Campaign URL Builder:**  
https://ga-dev-tools.google/campaign-url-builder/

**URL Shorteners:**
- Bitly: https://bitly.com
- TinyURL: https://tinyurl.com

**Important:** Always shorten the FULL URL including UTM parameters, not the base URL.

---

## Benefits of This System

### 1. **Complete Attribution**
Know exactly which posts, campaigns, and platforms drive traffic and conversions.

### 2. **Performance Comparison**
Compare Michael vs Stelios vs Company Page performance. Compare different campaign themes.

### 3. **ROI Tracking**
Calculate actual ROI per channel, per campaign, per post.

### 4. **Data-Driven Decisions**
Stop guessing what works. Use data to optimize content strategy.

### 5. **Accountability**
Clear tracking of all marketing efforts and their results.

### 6. **Consistency**
Standardized naming ensures clean, usable analytics data.

---

## Maintenance

### Monthly Tasks
1. Update campaign reference table with new themes
2. Archive completed campaigns
3. Review analytics to identify top performers
4. Adjust campaign themes based on performance

### Quarterly Tasks
1. Audit all marketing files for UTM compliance
2. Review and update source/medium values if new platforms added
3. Clean up unused campaign identifiers
4. Update documentation with lessons learned

---

## Analytics Integration

These UTM parameters will appear in:
- **Google Analytics 4** — Source/Medium/Campaign reports
- **Bitly** — Click tracking and attribution
- **CRM** — Lead source attribution
- **Marketing dashboards** — Campaign performance

---

## Questions or Issues?

**Primary Contact:** Matt (Digital Marketing Manager)

**Documentation:**
- Full Rule: `.cursor/rules/utm-parameters-required.mdc`
- Quick Reference: `.cursor/marketing/UTM-QUICK-REFERENCE.md`
- Template: `.cursor/marketing/POST-TEMPLATE.md`

---

**Implementation Complete:** ✅  
**Enforcement Active:** ✅  
**All February Posts Updated:** ✅  
**Documentation Complete:** ✅

---

*Last updated: February 2, 2026*
