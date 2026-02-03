# StoneRise Marketing Files

This folder contains all marketing content and planning documents for StoneRise Technology.

---

## 📋 Important: UTM Parameters Required

**ALL social media posts and marketing links MUST include properly formatted UTM parameters.**

This is enforced via Cursor rules. See `.cursor/rules/utm-parameters-required.mdc` for full details.

---

## Files in This Folder

### Marketing Plans
- `marketing-plan-2026.md` — Complete multi-channel marketing strategy for 2026

### Social Media Content
- `linkedin-posts-feb-2026.md` — All LinkedIn posts for February 2026 (Michael, Stelios, Company Page)

### UTM Documentation
- `UTM-QUICK-REFERENCE.md` — Quick reference guide for UTM parameters
- `POST-TEMPLATE.md` — Template for creating new social posts with proper UTMs

---

## Creating New Social Posts

### Step 1: Use the Template
Open `POST-TEMPLATE.md` and copy the template structure.

### Step 2: Fill in Post Details
- Date, platform, account
- Week and post number
- Campaign theme

### Step 3: Write Content
Draft your post content and call to action.

### Step 4: Build UTMs
Use the quick reference guide (`UTM-QUICK-REFERENCE.md`) to construct proper UTM parameters:

- **Source:** Platform + account (e.g., `linkedin_michael`)
- **Medium:** Traffic type (e.g., `organic_social`)
- **Campaign:** Date + theme + product (e.g., `202602_invoice_ai_procurement`)
- **Content:** Identifier (e.g., `week1_post1`)
- **Term:** Optional, paid only

### Step 5: Validate
Before publishing, check:
- [ ] All parameters lowercase
- [ ] No spaces (use underscores)
- [ ] Correct source for platform
- [ ] Current date in campaign
- [ ] URL works when clicked

### Step 6: Publish
Schedule or publish your post.

---

## UTM Naming Conventions

### Source Format
`[platform]_[account_type]`

Examples:
- `linkedin_michael`
- `linkedin_stelios`
- `linkedin_company`
- `facebook_company`
- `meta_ads`
- `google_ads`

### Medium Values
- `organic_social` — Unpaid social posts
- `paid_social` — Paid social ads
- `email` — Email campaigns
- `cpc` — Google paid search
- `retargeting` — Retargeting campaigns

### Campaign Format
`YYYYMM_[theme]_[product]`

Examples:
- `202602_invoice_ai_procurement`
- `202602_roi_calculator_general`
- `202603_commercial_launch_commercial`

### Content Format
- Weekly posts: `YYYYMMDD_post[N]` (date-based)
- Ads: `[type]_[descriptor]`

**Example:**
- `20260203_post1` (February 3, 2026, first post)
- `20260203_post2` (February 3, 2026, second post)

---

## Common Mistakes to Avoid

❌ Missing UTMs entirely
❌ Using capital letters
❌ Using spaces instead of underscores
❌ Wrong source (e.g., `linkedin` instead of `linkedin_michael`)
❌ Vague campaign names (e.g., `february` instead of `invoice_ai_procurement`)
❌ Including date in campaign (e.g., `202602_invoice_ai` - date goes in utm_content only)

---

## Tools

### Building UTMs
**Google Campaign URL Builder:**
https://ga-dev-tools.google/campaign-url-builder/

### Shortening URLs (Recommended for All Posts)

**Why?** Long UTM URLs look messy in social posts. URL shorteners solve this while keeping all tracking intact.

**Bitly (Recommended):**
- https://bitly.com
- Free: 50 links/month
- Custom slugs available
- Click analytics dashboard
- **Process:** Build full UTM URL → Paste in Bitly → Customize slug → Get short link

**TinyURL:**
- https://tinyurl.com
- Free and unlimited
- Simple, no analytics

**Rebrandly:**
- https://www.rebrandly.com
- Custom branded domains (e.g., `stonerise.link/demo`)
- Professional appearance
- Paid plans required

### Shortening Workflow

1. **Build full URL with UTMs:**
   ```
   https://www.stonerise.tech/request-demo?utm_source=linkedin_michael&utm_medium=organic_social&utm_campaign=202602_invoice_ai_procurement&utm_content=week1_post1
   ```

2. **Shorten in Bitly:**
   - Paste the FULL URL (with all UTMs)
   - Customize slug: `sr-demo-feb-w1p1`
   - Create link

3. **Result:**
   ```
   https://bit.ly/sr-demo-feb-w1p1
   ```

4. **Use in post:** Clean URL that preserves all tracking

**IMPORTANT:** Always shorten the FULL URL including all UTM parameters. Never shorten just the base URL, as you'll lose all tracking data.

---

## Questions?

Contact Matt (Digital Marketing Manager)

**Last Updated:** February 2026
