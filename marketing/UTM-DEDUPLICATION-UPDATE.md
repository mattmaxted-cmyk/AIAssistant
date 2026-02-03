# UTM Deduplication Update - February 2, 2026

## Problem Identified

The original UTM structure had date appearing **twice** - in both campaign and content:
```
utm_campaign=202602_invoice_ai_procurement
utm_content=20260203_post1
```

Year and month (`202602`) appeared redundantly in both parameters.

---

## Solution Implemented

**Removed date from utm_campaign entirely.** Date now appears only in utm_content with full precision.

### OLD Structure (With Duplication):
```
utm_campaign=202602_invoice_ai_procurement
utm_content=20260203_post1
```
❌ Date appears twice (YYYYMM in campaign, YYYYMMDD in content)

### NEW Structure (No Duplication):
```
utm_campaign=invoice_ai_procurement
utm_content=20260203_post1
```
✅ Date appears once (full YYYYMMDD in content only)

---

## Updated Parameter Formats

| Parameter | OLD Format | NEW Format | Example |
|-----------|------------|------------|---------|
| utm_campaign | `YYYYMM_theme_product` | `theme_product` | `invoice_ai_procurement` |
| utm_content | `YYYYMMDD_post[N]` | `YYYYMMDD_post[N]` | `20260203_post1` |

---

## Benefits of This Change

1. **No Duplication** - Date appears once, in utm_content with full precision
2. **Cleaner Campaigns** - Campaign names are simpler and more readable
3. **Timeless Campaigns** - Same campaign name can be used across months
4. **Full Date Precision** - Still have year, month, AND day in utm_content
5. **Better Analytics** - Campaign performance can be tracked over time
6. **Flexibility** - Campaigns aren't tied to specific months

---

## Example Comparison

### Before (With Duplication):
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=202602_invoice_ai_procurement&utm_content=20260203_post1
```

### After (No Duplication):
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=invoice_ai_procurement&utm_content=20260203_post1
```

**What changed:**
- Campaign: `202602_invoice_ai_procurement` → `invoice_ai_procurement`
- Content: `20260203_post1` (unchanged)

---

## Updated Campaign Names

All campaigns now follow `[theme]_[product]` format with NO date:

| OLD Campaign Name | NEW Campaign Name |
|-------------------|-------------------|
| `202602_invoice_ai_procurement` | `invoice_ai_procurement` |
| `202602_roi_calculator_general` | `roi_calculator_general` |
| `202602_delivery_tracking_procurement` | `delivery_tracking_procurement` |
| `202602_commercial_teaser_commercial` | `commercial_teaser_commercial` |
| `202602_supplier_mgmt_procurement` | `supplier_mgmt_procurement` |
| `202602_cash_flow_general` | `cash_flow_general` |
| `202602_approval_workflows_procurement` | `approval_workflows_procurement` |
| `202602_connected_systems_general` | `connected_systems_general` |
| `202602_payment_errors_commercial` | `payment_errors_commercial` |
| `202602_scaling_efficiency_general` | `scaling_efficiency_general` |
| `202602_three_way_matching_procurement` | `three_way_matching_procurement` |
| `202602_rfq_workflow_procurement` | `rfq_workflow_procurement` |
| `202602_origin_story_general` | `origin_story_general` |
| `202602_roadmap_preview_general` | `roadmap_preview_general` |
| `202602_data_security_general` | `data_security_general` |
| `202602_ux_focus_general` | `ux_focus_general` |

---

## Files Updated

### 1. ✅ `.cursor/rules/utm-parameters-required.mdc`
- Campaign format updated to exclude date
- Examples updated throughout
- Validation checklist updated
- Campaign reference table updated

### 2. ✅ `.cursor/marketing/linkedin-posts-feb-2026.md`
- All 36 post URLs updated
- All campaigns now use date-free format
- utm_content still has full date (YYYYMMDD_post[N])

### 3. ✅ `.cursor/marketing/UTM-QUICK-REFERENCE.md`
- Campaign naming convention updated
- Active campaigns table updated (removed dates)
- URL examples updated
- Added note about date-independent campaigns

### 4. ✅ `.cursor/marketing/POST-TEMPLATE.md`
- UTM breakdown updated
- Example URL updated
- Campaign format clarified (NO date)

### 5. ✅ `.cursor/marketing/UTM-IMPLEMENTATION-SUMMARY.md`
- Parameters table updated
- Campaign format section added
- Examples updated

### 6. ✅ `.cursor/marketing/README.md`
- Campaign naming updated
- Common mistakes updated
- Examples corrected

### 7. ✅ `.cursor/marketing/UTM-DATE-FORMAT-UPDATE.md`
- URL examples updated
- Template updated
- Campaign format clarified

---

## Complete UTM Structure (Final)

```
?utm_source=[platform]_[account]
&utm_medium=[type]
&utm_campaign=[theme]_[product]
&utm_content=[YYYYMMDD]_post[N]
&utm_term=[keyword] (optional, paid only)
```

### Example:
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=invoice_ai_procurement&utm_content=20260203_post1
```

**Breakdown:**
- `utm_source=linkedin_michael` - Platform + account
- `utm_medium=organic_social` - Traffic type
- `utm_campaign=invoice_ai_procurement` - Campaign theme (NO date)
- `utm_content=20260203_post1` - Full date + post number
- `utm_term=` - Not used for organic

---

## Date Tracking Strategy

**Campaign Level:** Theme-based, date-independent
- Tracks what content theme/initiative
- Can span multiple months
- Easier to aggregate performance

**Content Level:** Date-specific
- Year, month, AND day in one parameter
- Precise posting date
- Post number for multiple posts per day

**Result:** Clean analytics with full date precision and no duplication

---

## Analytics Impact

### Google Analytics Reports

**Campaign Performance:**
- See "invoice_ai_procurement" performance across all time periods
- Compare campaign effectiveness without date segmentation

**Date Analysis:**
- Use utm_content to filter by specific dates
- Extract YYYYMMDD from content parameter
- Track performance by day, week, month, or quarter

**Best of Both:**
- Campaign trends over time
- Specific date performance
- No redundant data

---

**Deduplication Complete:** ✅  
**All Files Updated:** ✅  
**36 LinkedIn Posts Updated:** ✅  
**Documentation Aligned:** ✅

**Implementation Date:** February 2, 2026  
**Owner:** Matt (Digital Marketing Manager)
