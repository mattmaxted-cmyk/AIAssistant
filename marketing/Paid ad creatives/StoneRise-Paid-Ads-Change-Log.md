# StoneRise Paid Ads Change Log

**Document Purpose:** Track all optimisation changes and results across paid advertising campaigns  
**Platforms:** Google Ads, Meta Ads (Facebook/Instagram)

---

## Google Ads — Performance Max Campaign

**Campaign:** `StoneRise_PMax_Procurement_Feb2026`  
**Launch Date:** February 2026  
**Original Landing Page:** `https://www.stonerise.tech/lp/procurement`

---

### 16 February 2026 — Mobile Bid Adjustment

**Platform:** Google Ads

**Change:** Applied -50% bid adjustment to mobile devices

**Rationale:** Desktop users are more valuable to StoneRise and more likely to match ICP. Construction decision-makers (Commercial Directors, Quantity Surveyors, Procurement Managers) typically research and evaluate software from desktop, not mobile.

**Result:** No increase in conversions observed. Mobile traffic reduced but did not translate to improved desktop conversion rates.

**Status:** Monitoring continues

---

### 19 February 2026 — Landing Page Change

**Platform:** Google Ads

**Change:** Moved Google Ads traffic to generic landing page (from `/lp/procurement` to main site)

**Rationale:** Attempting to improve alignment with keywords we can afford. The procurement-specific landing page may have been too narrow for the keyword mix generating traffic.

**New Landing Page:** `https://www.stonerise.tech` (generic homepage)

**Result:** Inconclusive — GA4 tracking was not firing correctly on the generic landing page (0s engagement time). Tracking issue identified and fixed, but data from this period is unreliable.

**How to Measure Success:**

To evaluate whether this change improved performance, create a **Landing Page report** in Google Analytics (GA4):

1. **Go to:** Reports > Engagement > Landing page
2. **Set date range:** Compare 19 Feb onwards vs. previous period (10-18 Feb)
3. **Filter by:** Traffic source = google / cpc (or your campaign UTM parameters)

**Key Metrics to Compare:**

| Metric | What It Tells You | Good Result |
|--------|-------------------|-------------|
| **Bounce rate** | % of users who leave without interaction | Lower is better — aim for <60% |
| **Average engagement time** | How long users spend on page | Higher is better — aim for >30 seconds |
| **Engaged sessions** | Sessions with >10s duration OR conversion OR 2+ page views | Higher % is better |
| **Conversions (form submissions)** | Demo requests from landing page | Compare absolute numbers and conversion rate |
| **Pages per session** | Navigation depth after landing | Higher suggests better content relevance |

**Alternative: Custom Exploration Report**

For a more detailed view:
1. Go to **Explore** > Create new exploration
2. Add dimensions: Landing page, Date, Session source/medium
3. Add metrics: Sessions, Bounce rate, Avg engagement time, Conversions
4. Filter: Source/medium contains "google" AND "cpc"
5. Compare periods using the date comparison feature

---

### 25 February 2026 — Major Campaign Restructure: Focus Strategy

**Platform:** Google Ads

**Changes Made:**

1. **Paused 33 of 36 keywords** — Ruthlessly cut underperforming keywords to focus budget
2. **Kept only 3 proven keywords:**
   - "construction software solutions" (phrase match)
   - "construction building software" (phrase match)
   - "manage construction projects" (phrase match)
3. **Raised max CPC from £2.50-5.00 to £7.00** on all 3 keywords
4. **Removed mobile bid adjustment** — Changed from -50% to 0% to gather more data

**Performance Context Before Changes:**

- **Search Impression Share:** <10% (showing for less than 1 in 10 available searches)
- **Total spend:** £1,104.78 across 14 days (Feb 11-25)
- **Results:** 957 clicks, 19.24% avg CTR, £1.15 avg CPC
- **Conversions:** 4 leads (2 tracked in Google Ads, 2 manual attribution)
- **Problem:** Spreading £70/day budget too thin across 36 keywords, resulting in minimal auction participation

**Rationale:**

Analysis revealed that **3 keywords drove 71% of spend and 100% of conversions:**
- "construction software solutions": 1,884 impressions, 353 clicks, 1+ lead
- "construction building software": 1,022 impressions, 245 clicks, 1+ lead  
- "manage construction projects": 747 impressions, 82 clicks, 2 tracked conversions

All other keywords (33 total) generated high vanity metrics (CTRs up to 49%) but **zero conversions**. Classic case of irrelevant traffic.

The <10% impression share indicated we were **not competitive in auctions** — "first page bid" estimates showed £9.46 needed vs our £2.50-5.00 bids. We were essentially invisible for 90%+ of searches.

**Expected Outcomes (5-7 day timeframe):**

| Metric | Before | Expected After |
|--------|--------|----------------|
| **Search Impression Share** | <10% | 40-60% |
| **Daily Impressions** | ~130 | 400-650 |
| **Daily Clicks** | 20-30 | 10-15 |
| **Avg CPC** | £1.17 | £3-5 |
| **Quality Score** | Not showing | Should appear |
| **Cost per Lead** | £276 (£1,104 ÷ 4) | £150-200 (target) |

**Strategy:**

Better to **show properly for 3 high-intent keywords** than be invisible across 36. With £70/day budget, we can now compete at market rate (£7 CPC) and actually participate in auctions. This is classic B2B SaaS paid search strategy: focus beats dispersion.

**Success Metrics to Monitor:**

- Search Impression Share increases above 40%
- Conversion volume maintains or increases despite lower click volume
- Quality Score appears and improves over time
- Cost per lead decreases as we capture more qualified searches

**Result:** Pending — review after 7 days (March 4, 2026)

---

## Meta Ads — Procurement Campaign

**Campaign Type:** Meta Ads (Facebook/Instagram)  
**Launch Date:** February 2026  
**Original Landing Page:** `https://www.stonerise.tech/lp/procurement`

---

### 25 February 2026 — Creative Consolidation & Landing Page Update

**Platform:** Meta Ads

**Changes Made:**

1. **Turned off underperforming creatives** — Paused low-performing ad creatives based on Meta's delivery and engagement data
2. **Retained top 4 creatives** — Kept only the best-performing assets to concentrate budget on winners
3. **Changed landing page** — Switched to `/lp/procurement2` (mobile-friendly version)

**New Landing Page:** `https://www.stonerise.tech/lp/procurement2`

**Rationale:** 
- Asset consolidation focuses spend on proven performers rather than spreading budget across weak creatives
- Mobile-friendly landing page should improve experience for Meta traffic (predominantly mobile)
- Better mobile UX expected to improve conversion rates

**Result:** Pending — measuring over coming weeks

---

## Summary Table

| Date | Platform | Change | Result |
|------|----------|--------|--------|
| 16 Feb 2026 | Google Ads | -50% mobile bid adjustment | No conversion increase |
| 19 Feb 2026 | Google Ads | Landing page → generic homepage | Inconclusive (tracking broken) |
| 25 Feb 2026 | Google Ads | **Major restructure:** 36→3 keywords, £7 max CPC, 0% mobile adjustment | Pending (review 4 Mar) |
| 25 Feb 2026 | Meta Ads | Paused underperformers, kept top 4, LP → /lp/procurement2 | Pending |

---

**Document Created:** 25 February 2026  
**Last Updated:** 25 February 2026
