# UTM Quick Reference Guide

## UTM Template

```
?utm_source=[SOURCE]&utm_medium=[MEDIUM]&utm_campaign=[CAMPAIGN]&utm_content=[CONTENT]&utm_term=[TERM]
```

---

## Source Reference

| Platform/Account | utm_source value |
|-----------------|------------------|
| Michael LinkedIn | `linkedin_michael` |
| Stelios LinkedIn | `linkedin_stelios` |
| Company LinkedIn | `linkedin_company` |
| Company Facebook | `facebook_company` |
| Company Instagram | `instagram_company` |
| Company Twitter/X | `twitter_company` |
| Email Campaigns | `email` |
| Google Ads | `google_ads` |
| Meta Ads | `meta_ads` |

---

## Medium Reference

| Traffic Type | utm_medium value |
|--------------|------------------|
| Unpaid social posts | `organic_social` |
| Paid social ads | `paid_social` |
| Email campaigns | `email` |
| Google PPC | `cpc` |
| Retargeting ads | `retargeting` |
| Partner links | `partnership` |

---

## Campaign Naming Convention

**Format:** `YYYYMM_theme_product`

**Examples:**
- `invoice_ai_procurement`
- `roi_calculator_general`
- `commercial_launch_commercial`
- `weekly_post_general`

---

## Active Campaigns (Date-Independent)

| Campaign Theme | utm_campaign | Product Focus |
|----------------|--------------|---------------|
| Invoice AI | `invoice_ai_procurement` | Procurement |
| ROI Calculator | `roi_calculator_general` | General |
| Delivery Tracking | `delivery_tracking_procurement` | Procurement |
| Mobile Expenses | `mobile_expenses_hr` | HR |
| Commercial Teaser | `commercial_teaser_commercial` | Commercial |
| Weekly Content | `weekly_post_general` | General |
| Supplier Management | `supplier_mgmt_procurement` | Procurement |
| Cash Flow | `cash_flow_general` | General |
| Approval Workflows | `approval_workflows_procurement` | Procurement |
| Connected Systems | `connected_systems_general` | General |
| Payment Errors | `payment_errors_commercial` | Commercial |
| Scaling Efficiency | `scaling_efficiency_general` | General |
| Three Way Matching | `three_way_matching_procurement` | Procurement |
| RFQ Workflow | `rfq_workflow_procurement` | Procurement |
| Origin Story | `origin_story_general` | General |
| Roadmap Preview | `roadmap_preview_general` | General |
| Data Security | `data_security_general` | General |
| UX Focus | `ux_focus_general` | General |
| Cost Analysis | `cost_analysis_general` | General |

**Note:** Campaign names are date-independent and can be used across any month. Posting dates are tracked in utm_content.

---

## Content Identifier Examples

| Post Type | utm_content format | Example |
|-----------|-------------------|---------|
| Organic social posts | `YYYYMMDD_post[N]` | `20260203_post1` |
| Multiple posts same day | `YYYYMMDD_post[N]` | `20260203_post2` |
| Video ads | `video_[cta]` | `video_demo_cta` |
| Carousel ads | `carousel_[topic]` | `carousel_features` |
| Static images | `static_[type]` | `static_testimonial` |
| Text ads | `text_ad_[variant]` | `text_ad_v1` |

**Date Format for Organic Posts:**
- Format: `YYYYMMDD_post[N]`
- YYYYMMDD = exact posting date (ISO 8601)
- post[N] = post number (post1, post2, post3 for multiple posts)
- Example: `20260203_post1` = February 3, 2026, first post
- Example: `20260215_post2` = February 15, 2026, second post

**Benefits:**
- Precise tracking by specific date
- Naturally sortable in analytics
- Supports multiple posts per day
- No ambiguity about "weeks"
- Future-proof for any schedule

---

## Complete URL Examples

### Michael LinkedIn - Invoice AI (Tuesday, Feb 3, 2026)
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=invoice_ai_procurement&utm_content=20260203_post1
```

### Stelios LinkedIn - ROI Focus (Monday, Feb 2, 2026)
```
https://www.stonerise.tech/products/procurement/ROI?utm_source=linkedin_stelios&utm_medium=organic_social&utm_campaign=roi_calculator_general&utm_content=20260202_post1
```

### Company Page - Product Feature (Monday, Feb 9, 2026)
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_company&utm_medium=organic_social&utm_campaign=invoice_ai_procurement&utm_content=20260209_post1
```

### Meta Paid Ad - Carousel
```
https://www.stonerise.tech/request-demo?utm_source=meta_ads&utm_medium=paid_social&utm_campaign=supplier_mgmt_procurement&utm_content=carousel_supplier_mgmt
```

### Google Search Ad
```
https://www.stonerise.tech/request-demo?utm_source=google_ads&utm_medium=cpc&utm_campaign=search_procurement&utm_content=text_ad_v1&utm_term=procurement_software_uk
```

---

## Pre-Check Before Publishing

- [ ] All 5 parameters present (utm_term optional for organic)
- [ ] All lowercase (no capitals)
- [ ] Underscores `_` instead of spaces
- [ ] Correct source for platform and account
- [ ] Current date in campaign (YYYYMM)
- [ ] **utm_content uses date format (YYYYMMDD_post[N])**
- [ ] **Date matches actual posting date**
- [ ] **Post number correct (post1, post2, etc.)**
- [ ] Descriptive content identifier
- [ ] URL properly formatted with `&` between parameters

**Critical for utm_content:**
- ✅ Use YYYYMMDD format for posting date
- ✅ Add _post1, _post2 for post number
- ❌ Don't use week numbers (week1_post1)
- ❌ Don't use month abbreviations (feb03_post1)
- ❌ Don't use wrong date order (03022026_post1)

---

## Tools

### UTM Building
**Google Campaign URL Builder:**
https://ga-dev-tools.google/campaign-url-builder/

### URL Shortening (Recommended)

**Why shorten?** Long UTM URLs look messy in social posts. Shorten them AFTER building the complete URL to keep tracking intact.

**Bitly (Recommended):**
- URL: https://bitly.com
- Free tier: 50 links/month
- Custom slugs available (e.g., `bit.ly/sr-demo-feb`)
- Click analytics included
- **Process:** Paste full URL with UTMs → Create custom slug → Get short link

**TinyURL:**
- URL: https://tinyurl.com
- Completely free, unlimited links
- Simpler interface, no analytics

**Rebrandly:**
- URL: https://www.rebrandly.com
- Custom branded domains (e.g., `stonerise.link/demo`)
- More professional appearance
- Paid plans required for custom domains

### Shortening Workflow

1. **Build full URL:** `https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=202602_invoice_ai_procurement&utm_content=week1_post1`

2. **Shorten in Bitly:** Paste full URL → Customize slug to `sr-demo-w1p1`

3. **Result:** `https://bit.ly/sr-demo-w1p1`

4. **Use in post:** The short URL preserves all UTM tracking

**CRITICAL:** Always shorten the FULL URL including all UTM parameters, never shorten the base URL alone.

---

**Last Updated:** February 2026
**Owner:** Matt (Digital Marketing Manager)
