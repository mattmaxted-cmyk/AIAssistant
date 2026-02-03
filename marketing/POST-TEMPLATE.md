# Social Media Post Template

Use this template for all new social media posts to ensure proper UTM tracking.

---

## Post Information

**Date:** [DD/MM/YYYY]
**Platform:** [LinkedIn / Facebook / Instagram / Twitter]
**Account:** [Michael / Stelios / Company Page]
**Week:** [Week X]
**Post Number:** [Post Y]
**Campaign Theme:** [e.g., Invoice AI, ROI Calculator, Commercial Launch]

---

## Post Content

[Write your post content here]

---

## Call to Action

[Your CTA text - e.g., "Book a demo", "Try our calculator", "Learn more"]

---

## Link (WITH UTMs)

**Base URL:** https://www.stonerise.tech/[page]

**Full URL with UTMs:**
```
https://www.stonerise.tech/[page]?utm_source=[SOURCE]&utm_medium=[MEDIUM]&utm_campaign=[CAMPAIGN]&utm_content=[CONTENT]
```

---

## UTM Breakdown

Fill this out BEFORE publishing:

| Parameter | Value | Reason |
|-----------|-------|--------|
| `utm_source` | [e.g., linkedin_michael] | Platform and account |
| `utm_medium` | [e.g., organic_social] | Traffic type |
| `utm_campaign` | [e.g., invoice_ai_procurement] | Campaign identifier (NO date) |
| `utm_content` | [e.g., 20260203_post1] | Post date (YYYYMMDD) and number |
| `utm_term` | [Optional - paid only] | Targeting/keyword (if applicable) |

---

## URL Shortening (Recommended)

**IMPORTANT:** Shorten the FULL URL with all UTM parameters, not the base URL.

### Step 1: Build Full URL
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=202602_invoice_ai_procurement&utm_content=20260203_post1
```

### Step 2: Shorten with Bitly
1. Go to https://bitly.com
2. Paste your FULL URL (with all UTMs)
3. Customize the slug (e.g., `sr-demo-feb-w1p1`)
4. Create short link

### Step 3: Result
```
https://bit.ly/sr-demo-feb-w1p1
```

**Benefits:**
- Clean appearance in posts
- All UTM tracking preserved
- Additional click analytics from Bitly
- Easier to remember and share

---

## Pre-Publish Checklist

- [ ] Post content written and proofread
- [ ] CTA is clear and compelling
- [ ] UTMs properly formatted (all lowercase, underscores, no spaces)
- [ ] Source matches platform and account
- [ ] Campaign uses current month (YYYYMM format)
- [ ] **Content identifier uses date format (YYYYMMDD_post[N])**
- [ ] Full UTM URL tested (click to verify it works)
- [ ] **Shortened URL created in Bitly** (paste full UTM URL)
- [ ] Shortened URL tested (verify it redirects correctly)
- [ ] Post updated with shortened URL
- [ ] Post scheduled or published
- [ ] Added to tracking spreadsheet with both full and short URLs

---

## Common Destination Pages

| Page Type | URL |
|-----------|-----|
| Demo Request | `https://www.stonerise.tech/request-demo` |
| ROI Calculator | `https://www.stonerise.tech/products/procurement/ROI` |
| Procurement Product | `https://www.stonerise.tech/products/procurement` |
| HR Product | `https://www.stonerise.tech/products/hr` |
| Commercial Product | `https://www.stonerise.tech/products/commercial` |
| About Us | `https://www.stonerise.tech/about` |
| Blog Article | `https://www.stonerise.tech/blog/[slug]` |
| Case Study | `https://www.stonerise.tech/case-studies/[slug]` |

---

## Example: Completed Post

**Date:** 03/02/2026
**Platform:** LinkedIn
**Account:** Michael Loizias
**Week:** Week 1
**Post Number:** Post 1
**Campaign Theme:** Invoice AI

---

### Post Content

Really pleased with how Invoice AI has come together.

The idea was simple: why should anyone manually match invoices to purchase orders in 2026?

So we built something better. Upload your invoices, one or a hundred, and the system does the rest. OCR pulls the data. Matches against your POs and delivery records automatically. Flags anything that doesn't line up.

Watching it work is genuinely satisfying. An invoice lands, and within seconds you can see: matched, matched, matched, query needed.

The QS just reviews the exceptions. Not every single invoice.

It's one of those features where you think "this should have existed years ago." Happy we finally built it.

Drop me a message if you want to see it in action, or book a demo here: [LINK]

---

### Call to Action

"book a demo here"

---

### Link (WITH UTMs)

**Base URL:** https://www.stonerise.tech/request-demo

**Full URL with UTMs:**
```
https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=invoice_ai_procurement&utm_content=20260203_post1
```

---

### UTM Breakdown

| Parameter | Value | Reason |
|-----------|-------|--------|
| `utm_source` | `linkedin_michael` | Michael's LinkedIn personal profile |
| `utm_medium` | `organic_social` | Unpaid social media post |
| `utm_campaign` | `invoice_ai_procurement` | Invoice AI campaign for Procurement (NO date) |
| `utm_content` | `20260203_post1` | February 3, 2026, first post of the day |
| `utm_term` | — | Not applicable (organic post) |

**Note:** utm_content uses date format YYYYMMDD_post[N] where:
- YYYYMMDD = specific posting date (20260203 = Feb 3, 2026)
- post[N] = post number for that day (post1, post2, etc.)

---

**Last Updated:** February 2026
**Owner:** Matt (Digital Marketing Manager)
