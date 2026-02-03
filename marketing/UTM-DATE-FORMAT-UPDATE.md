# UTM Date Format Update - February 2, 2026

## Changes Made

Updated the UTM naming scheme to use specific dates instead of week numbers for better tracking precision.

---

## New utm_content Format

### OLD Format (Week-based):
```
utm_content=week1_post1
utm_content=week2_post3
```

### NEW Format (Date-based):
```
utm_content=20260203_post1  (February 3, 2026, Post 1)
utm_content=20260210_post1  (February 10, 2026, Post 1)
utm_content=20260210_post2  (February 10, 2026, Post 2)
```

**Format:** `YYYYMMDD_post[N]`
- Date in ISO 8601 format (YYYYMMDD)
- Post number increments for multiple posts on same day
- Future-proof for scheduling multiple posts per day

---

## February 2026 Posting Schedule

### Stelios Ioannou (Monday & Friday)
- **Week 1:** Mon Feb 2, Fri Feb 6
- **Week 2:** Mon Feb 9, Fri Feb 13  
- **Week 3:** Mon Feb 16, Fri Feb 20
- **Week 4:** Mon Feb 23, Fri Feb 27

### Michael Loizias (Tuesday, Wednesday, Thursday)
- **Week 1:** Tue Feb 3, Wed Feb 4, Thu Feb 5
- **Week 2:** Tue Feb 10, Wed Feb 11, Thu Feb 12
- **Week 3:** Tue Feb 17, Wed Feb 18, Thu Feb 19
- **Week 4:** Tue Feb 24, Wed Feb 25, Thu Feb 26

### StoneRise Company Page (Monday, Tuesday, Wednesday, Thursday)
- **Week 2:** Mon Feb 9, Tue Feb 10, Wed Feb 11, Thu Feb 12
- **Week 3:** Mon Feb 16, Tue Feb 17, Wed Feb 18, Thu Feb 19
- **Week 4:** Mon Feb 23, Tue Feb 24, Wed Feb 25, Thu Feb 26

---

## Updated Files

### 1. LinkedIn Posts Document
**File:** `.cursor/marketing/linkedin-posts-feb-2026.md`
- All 36 posts updated with correct dates and UTMs
- Post titles now include specific dates (e.g., "Monday, February 2, 2026")
- All UTM parameters updated to new date format

### 2. Cursor Rule
**File:** `.cursor/rules/utm-parameters-required.mdc`
- Updated utm_content format specification
- New examples using date-based format
- Validation rules updated

### 3. Quick Reference Guide
**File:** `.cursor/marketing/UTM-QUICK-REFERENCE.md`
- Updated content identifier examples
- New URL examples with dates

---

## Example URLs

### Stelios - First Post (Mon, Feb 2, 2026)
```
https://www.stonerise.tech/products/procurement/ROI?utm_source=linkedin_stelios&utm_medium=organic_social&utm_campaign=roi_calculator_general&utm_content=20260202_post1
```

### Michael - First Post (Tue, Feb 3, 2026)
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=invoice_ai_procurement&utm_content=20260203_post1
```

### Company Page - First Post (Mon, Feb 9, 2026)
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_company&utm_medium=organic_social&utm_campaign=invoice_ai_procurement&utm_content=20260209_post1
```

---

## Benefits of Date-Based Format

1. **Precise Tracking:** Know exactly which date each post was published
2. **Historical Analysis:** Easy to track performance by specific date
3. **Multi-Post Support:** Can schedule multiple posts per day (post1, post2, post3)
4. **Sortable:** Dates sort naturally in analytics dashboards
5. **Future-Proof:** Scales to any posting frequency
6. **No Ambiguity:** No confusion about "which week" - specific date is clear

---

## Template for Future Posts

When creating a new post:

**Step 1:** Determine the post date
- Example: February 15, 2026

**Step 2:** Convert to YYYYMMDD format
- Result: 20260215

**Step 3:** Add post number
- First post of the day: `20260215_post1`
- Second post of the day: `20260215_post2`

**Step 4:** Build complete UTM
```
?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=invoice_ai_procurement&utm_content=20260215_post1
```

**Note:** Campaign format is now `[theme]_[product]` with NO date. Date appears only in utm_content.

---

## Validation Checklist

When creating UTMs with new format:

- [ ] Date is in YYYYMMDD format (8 digits)
- [ ] Date is correct for scheduled post date
- [ ] Post number starts at post1 for first post of the day
- [ ] Post number increments if multiple posts same day
- [ ] All lowercase (no capitals)
- [ ] Underscores used (no spaces or hyphens)
- [ ] Complete URL tested and works

---

## LinkedIn Auto-Shortening Note

LinkedIn automatically shortens URLs that exceed a certain length, so the long UTM parameters won't clutter the posts. The tracking data is preserved in the shortened link.

---

**Update Completed:** February 2, 2026  
**Updated by:** AI Assistant  
**Owner:** Matt (Digital Marketing Manager)
