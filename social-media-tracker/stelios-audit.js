/**
 * STELIOS IOANNOU — LINKEDIN POST AUDIT
 * ======================================
 * Historical post data from LinkedIn Analytics export.
 * Date range: Apr 2025 – Apr 2026 (StoneRise era posts only).
 *
 * HOW TO ADD POST TEXT:
 * Find the post by its id or date, then fill in the `text` field.
 * Leave as empty string "" if not yet added.
 *
 * HOW TO ADD LINK PLACEMENT:
 * Set `linkPlacement` to one of:
 *   "post"    — link was included in the post body
 *   "comment" — link was posted in the first comment
 *   "none"    — no link on this post
 *   ""        — not yet recorded (shows as Unknown in the UI)
 *
 * FIELDS:
 * - id:            Unique number
 * - date:          YYYY-MM-DD
 * - url:           Full LinkedIn post URL
 * - impressions:   Total impressions from LinkedIn Analytics
 * - engagements:   Total engagements from LinkedIn Analytics
 * - linkPlacement: "post" | "comment" | "none" | ""
 * - text:          Full post text (paste from LinkedIn)
 * - notes:         Optional internal notes
 */

const steliosAuditPosts = [
    {
        id: 1,
        date: "2025-04-04",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_hiring-share-7314051608022036481-2ka4",
        impressions: 414,
        engagements: null,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 2,
        date: "2025-08-28",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7366828899856437251-eeKe",
        impressions: 902,
        engagements: 22,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 3,
        date: "2025-09-30",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_great-to-see-this-role-going-live-at-stonerise-share-7378715897693118464-FinD",
        impressions: 1049,
        engagements: 22,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 4,
        date: "2025-10-28",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_great-to-see-this-role-going-live-were-share-7388862653844123648-WjJ1",
        impressions: 1153,
        engagements: 14,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 5,
        date: "2025-12-10",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-ugcPost-7404459987613274112-wBQ9",
        impressions: 1900,
        engagements: 61,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 6,
        date: "2025-12-11",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_michaels-post-yesterday-highlighted-how-ugcPost-7404807439008825344-_Na8",
        impressions: 1137,
        engagements: 18,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 7,
        date: "2026-01-06",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_proud-to-be-sharing-this-milestone-moment-ugcPost-7414244695817777152-kCFj",
        impressions: 1064,
        engagements: 22,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 8,
        date: "2026-01-12",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7416418885849128960-6XFN",
        impressions: 2168,
        engagements: 22,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 9,
        date: "2026-02-02",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7424036574897725440-6Aeo",
        impressions: 2385,
        engagements: 59,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 10,
        date: "2026-02-04",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7424723616128483328-oGpp",
        impressions: 674,
        engagements: 6,
        linkPlacement: "",
        text: "",
        notes: ""
    },
    {
        id: 11,
        date: "2026-02-06",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7425478584674373633-ImG1",
        impressions: 1199,
        engagements: 24,
        linkPlacement: "post",
        text: "Interesting conversation this week with a regional roofing contractor.\n\nThey walked me through their current procurement process:\n\n• 8 hours per week on purchase order admin\n• 6 hours per week matching invoices\n• An estimated 2 percent of invoices with errors that slip through\n\nWe ran the numbers together.\n\nAdmin cost\n£18,000 per year in wasted time\n\nErrors and overpayments\n£40,000 estimated annual leakage\n\nTotal\n£58,000 per year\n\nStoneRise Technology Procurement cost\n£8,400 per year\n\nROI payback\nUnder 2 months\n\nNot every business has the same profile. But most are surprised when they actually quantify the cost of their current processes.\n\nWorth doing the maths.\n\nCheckout our quick ROI calculator here:\n\nhttps://lnkd.in/e5ychtdy\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 12,
        date: "2026-02-09",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7426565757854957568-V_Rd",
        impressions: 960,
        engagements: 16,
        linkPlacement: "post",
        text: "Quick exercise. Work out what your procurement admin actually costs.\n\nTake your average purchase order volume. Multiply it by the time spent per PO. Requests, approvals, chasing, receipting, invoice matching. Then add the hourly cost of the people doing the work.\n\nFor a contractor processing 500 POs a month, with an average handling time of 10 minutes each, that is 83 hours every month. At a blended cost of £25 per hour, that is over £25,000 a year. Just in admin time.\n\nThat is before you account for errors. Duplicate payments. Missed credits. Suppliers overcharging because nobody is checking properly.\n\nSoftware that cuts handling time by 80% pays for itself many times over.\n\nThat is the business case for StoneRise Technology. Not features. Financial return.\n\nRun your numbers:\nhttps://lnkd.in/eYpki88G\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 13,
        date: "2026-02-11",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7427290368477478912-AdU2",
        impressions: 422,
        engagements: 11,
        linkPlacement: "post",
        text: "Cash flow kills construction businesses. We all know this.\n\nWhat I've seen time and again, though, is that most contractors do not have real-time visibility of their cash position. They have a rough sense of what is due in and out, but the detail is buried in spreadsheets or sitting in someone's head.\n\nAt Milestone, we built StoneRise Technology to solve that.\n\nEvery purchase order, every invoice, every payment application is visible in real time. You can see exactly what is committed, what has been delivered, what has been invoiced, and what is due.\n\nThe Commercial App takes this further. Subcontractor liabilities, client applications, retention positions, all in one view.\n\nBetter visibility leads to better decisions, and better decisions protect cash flow.\n\nIf cash management keeps you up at night, let's talk about what real visibility could do for your business.\n\nhttps://lnkd.in/djvzeyVV\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 14,
        date: "2026-02-17",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7429464707759026177-P9Di",
        impressions: 657,
        engagements: 18,
        linkPlacement: "post",
        text: "One of the questions I get most from managing directors is this.\n\"How do we grow without the back office growing at the same rate?\"\n\nIt's a real problem. Win more work and you need more buyers, more accounts staff, more admin. Overheads scale with revenue, and margins stay flat.\n\nThe answer is systems that scale.\n\nStoneRise Technology is built for exactly this. Process twice the purchase orders without doubling your procurement admin. Match invoices in seconds instead of hours.\n\nThe efficiency gains compound as you grow.\n\nIf you're planning growth this year and worried about overhead creep, let's talk about what's possible.\n\nhttps://lnkd.in/enGF_huG\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 15,
        date: "2026-02-19",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7430189627958943744-u9sb",
        impressions: 3153,
        engagements: 20,
        linkPlacement: "post",
        text: "Every contractor I've worked with has the same problem. Payment errors.\n\nInvoices that don't match the purchase order. Deliveries billed twice. Credit notes missed. Suppliers overcharging because nobody is cross-checking.\n\nOver a year, these add up. On a £20m turnover, even 0.5 percent leakage is £100k straight off your bottom line.\n\nStoneRise Technology Procurement is designed to catch this.\n\nEvery invoice is matched against the purchase order and delivery records. The system flags discrepancies automatically. Your team reviews the exceptions, not every invoice.\n\nIt's not about adding more checks. It's about automating the checks you should already be doing.\n\nIf you are not confident that every invoice you pay is correct, it's worth having a conversation.\n\nhttps://lnkd.in/e5Qr27XK\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 16,
        date: "2026-02-23",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7431639014140657665-apUf",
        impressions: 1932,
        engagements: 11,
        linkPlacement: "post",
        text: "Most contractors I speak to are running four or five different systems. Procurement in one place. Commercial in spreadsheets. HR somewhere else. None of them talk to each other.\n\nThe real problem isn't the number of systems. It's the time spent reconciling them.\n\nMonthly cost meetings where half the time is spent arguing about whose numbers are right. QSs maintaining shadow spreadsheets because they don't trust the \"official\" system. Data being entered three times because nothing integrates.\n\nI've seen businesses with full-time roles that exist purely to reconcile systems.\n\nStoneRise Technology removes this. One platform for construction operations. Procurement, Commercial, and HR all connected. One source of truth, feeding cleanly into your existing finance system.\n\nThe cost saving isn't software versus software. It's integration versus fragmentation.\n\nIf reconciliation is eating your team's time, let's talk.\n\nhttps://lnkd.in/dQ_DKgq4\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 17,
        date: "2026-02-25",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7432363899083145216-MUfq",
        impressions: 3593,
        engagements: 18,
        linkPlacement: "post",
        text: "Had a good conversation this week with an MD looking at procurement software.\n\nHis question was simple.\n\"How do I justify the cost to my board?\"\n\nWe walked through it together.\n\nCurrent state\n\n• 200 purchase orders per month\n• 20 minutes average handling time\n• Three people touching every order\n• An estimated 1.5 percent of invoice errors slipping through\n\nAnnual cost of the above: north of £50,000 in time and leakage.\n\nStoneRise cost\nUnder £10,000 per year.\n\nPayback\nAround 10 weeks.\n\nThe numbers aren't complicated. Most businesses just haven't sat down and worked them out.\n\nIf you want to build a business case, our ROI calculator is a good starting point:\nhttps://lnkd.in/eYpki88G\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 18,
        date: "2026-03-03",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_ai-and-risk-management-the-future-of-construction-ugcPost-7434561479158337536-u860",
        impressions: 1709,
        engagements: 48,
        linkPlacement: "post",
        text: "AI in construction isn't about replacing people. It's about risk management.\n\nCommercial compliance. Contractual disputes. Cost overruns. Payment delays.\n\nRight now, these problems get spotted when they've already happened. When it's too late. When it's already cost you money.\n\nAI changes that.\n\nIt can foresee issues before they become problems. Predict disputes before they escalate. Flag compliance risks before they turn into claims.\n\nWe're going to see a massive trend towards AI in risk management. And the contractors who adopt it early will have a significant advantage over those who don't.\n\nIt's not about automation for automation's sake. It's about seeing problems coming and stopping them before they hit.\n\nThat's the future. And we're building it into StoneRise now.\n\nSee how we're using AI: https://lnkd.in/eSpdJ-9C\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: "Video post"
    },
    {
        id: 19,
        date: "2026-03-05",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7435263044911353857-b28S",
        impressions: 619,
        engagements: 10,
        linkPlacement: "post",
        text: "Most expense systems track receipts. They don't actually manage expenses.\n\nThere's a difference.\n\nTracking means someone snaps a photo, types in the amount, picks a category, submits it. Then someone else checks it, maybe queries it, eventually approves it.\n\nThen someone else reconciles it against bank statements. Then someone else reformats everything for your accountant.\n\nThat's not a system. That's a chain of admin tasks dressed up as one.\nProper expense management means the system does the work.\n\nOur HR App captures receipts digitally. Amount, date, VAT, supplier. No loose paperwork, no manual re-entry.\n\nMileage claims pull the current HMRC rates automatically. No one needs to look up whether it's 45p or 25p per mile. The system knows.\n\nCategories map to your chart of accounts. Approval workflows route to the right person based on value or type.\n\nEverything stays HMRC compliant because the rules are built in, not bolted on afterwards.\n\nWhen your accountant needs the data, it exports clean. Sage integration, proper formatting, audit trail intact.\n\nYour team spends less time on admin.\nYour Finance team spends less time chasing paperwork.\nYour accountant gets clean data instead of a folder of receipts to decode.\n\nThat's what expenses done properly looks like.\n\nLearn more: https://lnkd.in/dVCx-sJp\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 20,
        date: "2026-03-09",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7436712506514911232-MYjn",
        impressions: 524,
        engagements: 13,
        linkPlacement: "post",
        text: "You sign up for new software. Someone walks you through the basics. Then they disappear.\n\nSix months later, you're using maybe 30% of what you paid for. The features that could actually transform your workflows sit untouched because no one showed you how they fit your business.\n\nSound familiar?\n\nThat's what happens when support is treated as a cost centre instead of part of the product.\n\nAt StoneRise, every customer gets a dedicated Customer Success Manager from day one. Not a shared inbox. Not a chatbot. A real person who knows your business and stays with you.\n\nThey're with you through implementation. They're with you when you go live. They're with you six months later when you want to roll out a new module or onboard a new team.\n\nNo extra charge. No upsell. That's just how we work.\n\nWe can get your Procurement module live in 2 to 3 weeks. Not because we rush it, but because we've done this before and we know how to get you there properly.\n\nThe goal isn't to sell you software and disappear. The goal is to make sure you actually succeed with it.\n\nThat's the difference between a vendor and a partner.\n\nLearn more: https://lnkd.in/dQT_5krd\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 21,
        date: "2026-03-12",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_ai-will-enable-construction-professionals-ugcPost-7437799796519747584-l5hO",
        impressions: 802,
        engagements: 26,
        linkPlacement: "post",
        text: "AI is moving faster than most industries are ready for. Construction is no exception.\n\nI spent years as Finance and Commercial Director. The volume of manual work that sits behind a contracting operation is significant. QSs checking invoices line by line. Commercial teams cross referencing data that should cross reference itself. Project managers chasing paperwork instead of managing risk.\n\nThat's not a people problem. It's a process problem. And AI solves it.\n\nThe heavy lifting, validation, matching, reconciliation, gets automated. What's left for your team is the work that actually requires them. The commercial judgements. The risk calls. The negotiations. The decisions that need context and experience.\n\nSame team. More coverage. Better accuracy.\n\nThe businesses that adopt this early won't just be more efficient. They'll be operating at a level their competitors can't match with headcount alone.\n\nThat's what we're building at StoneRise. AI that handles the grunt work so your people can focus on the decisions that matter.\n\nIf you want to see how it works in practice, drop me a message.\n\nSee how it works: https://lnkd.in/dskQyXGy\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: "Video post"
    },
    {
        id: 22,
        date: "2026-03-16",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_i-have-walked-into-contractors-turning-over-share-7439264437737349120-wo1C",
        impressions: 5378,
        engagements: 13,
        linkPlacement: "none",
        text: "I have walked into contractors turning over £30m a year and found purchase orders in a ring binder.\n\nFinance teams in manufacturing, logistics, and retail went digital 10 to 20 years ago. Real-time spend visibility. Automated approvals. Full audit trails.\n\nConstruction is still paper. Still folders. Still 1 person chasing a signature down a corridor.\n\nAnd it is not just procurement.\n\nCommercial managers running CVRs in spreadsheets that no one else can read. Site managers logging near misses in a notebook. H&S records stored in a lever arch file that gets pulled out for an audit and put straight back.\n\nThe same pattern, across every function.\n\nWhere it is not paper, it is a spreadsheet. Managed by 1 person who becomes the single point of failure the moment they go on leave.\n\nThe commercial cost of that is not just admin overhead.\n\nIt is committed spend you cannot see. Margin movements you find out about too late. Compliance gaps that only surface when something goes wrong.\n\nConstruction has not been slow to adopt technology because of change aversion. It has been slow because most technology does not solve the actual problem. It digitises the folder.\n\nThe question is not why construction is behind. The question is what it costs to stay there.",
        notes: ""
    },
    {
        id: 23,
        date: "2026-03-19",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_real-time-visibility-procurement-to-commercial-ugcPost-7440336651735732224-Coyv",
        impressions: 829,
        engagements: 21,
        linkPlacement: "post",
        text: "Your procurement team places a £300k material order.\n\nIn most construction businesses, that information sits in 1 place. A spreadsheet. An email chain. A standalone procurement tool.\n\nYour commercial team has no idea it exists.\n\nIt will not show up in their cost reporting until the invoice arrives, gets approved, and gets manually entered. That could be weeks away. It could be months.\n\nIn the meantime, your commercial manager is reporting project costs against a number that is already wrong. Your cash flow forecast does not reflect committed spend. Your margin is a guess dressed up as a report.\n\nThis is not a process failure. It is a systems architecture problem.\n\nWhen procurement and commercial operate in separate tools, the business is always looking at partial information. Every CVR, every forecast, every board report is built on data that is already out of date by the time it is presented.\n\nThe cost of that delay is not measured in admin hours. It is measured in margin.\n\nReal commercial control means committed spend is visible the moment an order is placed. Not when the invoice lands. Not when someone updates the spreadsheet. At the point of commitment.\n\nThat is the standard every other industry operates to. Construction is not there yet.\n\nSee how the modules connect: https://lnkd.in/dH8F6f7b\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: "Video post"
    },
    {
        id: 24,
        date: "2026-03-25",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_excel-is-probably-the-second-best-tool-for-share-7442223880217432064--wiy",
        impressions: 678,
        engagements: 12,
        linkPlacement: "none",
        text: "Excel is probably the second best tool for almost everything.\n\nIt's fast, flexible, and most people already know how to use it. You can build something that works in an afternoon. No sales process, no implementation, no training programme. You just open a blank sheet and go.\n\nThat's exactly why it's so dangerous at scale.\n\nThe same qualities that make Excel so easy to start with are what make it so painful to grow through.\n\nThe version that lives on Dave's desktop. The formula that breaks when someone adds a column. The report that takes three hours on a Friday because the data is split across six different files. The purchase order that got approved verbally but never made it onto the sheet.\n\nThese aren't Excel problems. They're growth problems. And Excel didn't cause them. It just stopped being able to absorb them.\n\nI've seen businesses carrying genuine operational risk because their entire procurement process sits in a spreadsheet. Not because they didn't know better. Because Excel got them through the early stages so well that no one felt the urgency to change.\n\nThe bottleneck doesn't announce itself. It builds quietly, row by row.\nThe businesses that scale fastest aren't the ones that abandon Excel earliest.\n\nThey're the ones that recognise when it's become the ceiling rather than the floor.",
        notes: ""
    },
    {
        id: 25,
        date: "2026-03-27",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7442225304602976256-uaLF",
        impressions: 397,
        engagements: 19,
        linkPlacement: "none",
        text: "Most procurement problems in construction are not procurement problems.\n\nThey are visibility problems. Control problems. And in a lot of cases, a single point of failure dressed up as a process.\n\nWhen Michael E Loizias and I started building StoneRise, we already knew what needed solving. We had lived it. Running our own construction business, we had dealt with the same spreadsheets, the same chasing, the same end of month scramble to understand what had actually been spent.\n\nA Finance Director at a £40m contractor shouldn't have to chase someone for a spreadsheet to understand their month-end exposure.\n\nSo that's what we built around. A single workflow where every request, approval, purchase order and delivery lives in one place. Not a better spreadsheet. A replacement for the process that the spreadsheet was never really fit to run.\n\nApprovals that move without someone chasing. POs that generate automatically. Delivery confirmation that doesn't rely on a phone call.\n\nI am genuinely proud of what the team has built.\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 26,
        date: "2026-03-30",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_the-problem-with-point-solution-health-and-ugcPost-7444307799645241344-rdrw",
        impressions: 658,
        engagements: 23,
        linkPlacement: "comment",
        text: "Most health and safety software is a point solution.\n\nYour H&S manager flags a subcontractor for non compliance. Files it in the system. Job done.\n\nBut does your commercial team know? Does procurement know before they place the next order with that same subcontractor?\n\nNo. Because the systems don't talk to each other.\n\nSo what happens? Commercial places a new order with a subcontractor who's already been flagged for safety violations. Procurement approves a purchase order for a supplier who failed their last audit.\n\nNo one knows. No visibility. No feedback loop.\n\nThis is the problem with point solutions. They solve one problem in isolation but create bigger problems across the business.\n\nAt StoneRise, when your H&S manager flags a subcontractor, that information is immediately visible to commercial, procurement, and operations.\n\nOne system. Holistic view of the whole business and the whole supply chain.\n\nEveryone sees the same information at the same time. No surprises. No working with non compliant suppliers because the left hand didn't know what the right hand was doing.\n\nThat's what happens when you build software that actually understands how construction businesses work.\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: "Video post"
    },
    {
        id: 27,
        date: "2026-04-02",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7445394843729678336-J5Uc",
        impressions: 610,
        engagements: 10,
        linkPlacement: "comment",
        text: "The variation dispute started in September. By February, it was still dragging on.\n\nThe subcontractor insisted they'd submitted the claim in March, before the original deadline. We had no record of it. They said one of our site managers verbally approved the extra work. The site manager said he never did. Both sides were confident they were right.\n\nThe problem wasn't bad faith. The problem was that nobody could prove what actually happened. Email threads didn't go back far enough. The spreadsheet tracking variations had been updated dozens of times since March. Who changed what, and when? Impossible to say.\n\nWe eventually settled for more than we should have because our position wasn't defensible. Not because we were wrong, but because we couldn't prove we were right.\n\nThat experience is why we built comprehensive audit trails into StoneRise. Every approval gets logged with a timestamp and the person who made it. Every change to an order or variation is tracked. Every document upload is recorded. If someone updates a value, the system knows who did it and when.\n\nWhen auditors ask questions, you can show them the history. When a dispute goes legal, the trail is there. When someone claims they approved something months ago, you can check.\n\nAudit trails aren't exciting. But they're the difference between a defensible position and a costly settlement based on who remembers what.\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 28,
        date: "2026-04-03",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_one-platform-no-dependencies-ugcPost-7445757136959156224-6qb_",
        impressions: 249,
        engagements: 12,
        linkPlacement: "none",
        text: "Most contractors I speak to have 4 or 5 different systems. Procurement in one. Timesheets in another. HR somewhere else. Commercial in a spreadsheet.\n\nThe problem is not the number of systems. It is the dependencies between them.\n\nWhen you rely on an API to sync data between platforms, you are trusting that connection to work every time. When it does not, you are back to manual exports and reconciliation. When the third party updates their software, you are waiting to see if your integration breaks.\n\nAt Milestone, we lived this. We had tools that worked fine in isolation. But getting data from one place to another was constant admin. Someone always had to chase it.\n\nWith StoneRise, everything sits in one platform. No middleware. No sync delays. No \"waiting for the API to catch up.\" The data is just there, because it never left.\n\nThe other challenge we spent a lot of time on: usability across the whole business.\n\nSite teams and office staff have very different comfort levels with software. If the system only works for people who already know their way around IT, you have just created a two tier business. Half the team uses it properly, the other half works around it.\n\nWe built for the site manager who checks in from a van between jobs. Not just the Commercial Director at a desk with two monitors.\n\nIf you are running multiple systems and spending time reconciling between them, send me a message.",
        notes: "Video post"
    },
    {
        id: 29,
        date: "2026-04-06",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_most-people-think-commercial-management-in-share-7446844318536929281-WfrR",
        impressions: 1070,
        engagements: 14,
        linkPlacement: "none",
        text: "Most people think commercial management in construction is about spreadsheets and payment notices.\n\nThe real problem is what sits underneath all of that.\n\nTraditional commercial management looks like this:\n→ QS buried in Excel trying to track variations across 12 subcontract packages\n→ Payment applications submitted manually with no audit trail\n→ Main contract entitlement and subcontract liability managed in completely separate systems\n→ Nobody actually knows the true margin until the final account\n\nWe built a platform that manages it all in one place.\n\n→ Upstream and downstream in a single system\n→ AI that reviews subcontractor variations against the subcontract documents, spec, and pricing before a human ever touches it\n→ Automated variation linking so every subcontract cost has a corresponding client recovery\n→ Real-time margin visibility across every package, on every project\n\nAll connected. All auditable.\n\nThe speed advantage is obvious. But here's what most people miss.\n\nThe bigger win is not doing things faster. It is doing things you were never actually doing properly in the first place.\n\nMost QSs are firefighting. Chasing submissions, querying invoices, reconciling costs that should have been captured months ago. The system we built forces the right process from day one.\n\nBid adjudication built in. Payment applications with a full lifecycle from submission to invoice.\n\nIf you are not commercially tight from the start, no amount of heroics at final account will save your margin.\nThat is what the Commercial module is designed to change.\n\nBuilt by QSs who ran construction businesses. Not a software company trying to interpret what QS work actually looks like.\n\nWe are opening early access to the Commercial module to a small group before the public launch.\n\nComment 'STONERISE' below and I'll get you in.",
        notes: ""
    },
    {
        id: 30,
        date: "2026-04-08",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_builtbyconstruction4construction-stonerise-share-7447568982691278848-r7HP",
        impressions: 187,
        engagements: 11,
        linkPlacement: "none",
        text: "People behave differently when they know their work is visible.\n\nNot because they're trying to hide something. Because visibility creates natural accountability.\n\nIn construction, margin leaks rarely come from one big mistake. They come from dozens of small decisions that seem reasonable at the time.\n\nA quick verbal approval. A price that looks \"about right\". An order placed without comparing quotes because it's urgent.\n\nWhen procurement happens in spreadsheets and WhatsApp threads, there's no visibility. Teams make judgment calls in isolation. By the time Finance sees the invoice, it's too late to question it.\n\nWhen everything runs through a proper system, behaviour shifts.\n\nBuyers compare quotes because they know the decision is tracked. Site teams check stock levels before ordering because the data is right there. Managers approve faster because they can see what's waiting.\n\nIt's not about catching people out. It's about catching issues early.\n\nThe difference compounds. A £200 saving here, a duplicate order spotted there, a better price negotiated because you had leverage.\n\nOver 12 months on a live project, those small behavioural changes add up to real margin protection.\n\nThat's what proper procurement software does. It doesn't just digitise your POs. It changes how your teams work.\n\n#BuiltByConstruction4Construction #StoneRise #ChallengingTheStatusQuo",
        notes: ""
    },
    {
        id: 31,
        date: "2026-04-14",
        url: "https://www.linkedin.com/posts/stelios-ioannou-1382682a_the-uk-government-is-seriously-considering-share-7449743320492326912-sAL2",
        impressions: 78,
        engagements: 1,
        linkPlacement: "none",
        text: "The UK government is seriously considering banning retentions in construction and it's already getting a lot of reaction across the industry.\n\nFrom the conversations I've been following, there's actually a surprising level of agreement on one thing:\n\n👉 The current retention system doesn't really work.\n\nBut beyond that, views split quite quickly.\n\nPotential benefits:\n\nBetter cashflow for subcontractors and SMEs\nLess risk of losing money if a contractor goes under\nA step toward improving payment culture across the industry\nFor a lot of the supply chain, this feels long overdue.\n\nBut there are also some real concerns:\n\nWhat actually replaces retention as security for defects?\nWill the cost just get pushed elsewhere or priced in upfront?\nAre we really removing risk or just moving it around?\nDoes this mean more bonds, guarantees and admin?\nAnd then there's the practical side of it.\n\nThis isn't a small change. It fundamentally shifts how construction contracts are structured and how risk is managed.\n\nWe're likely to see:\n\nNew commercial approaches\nChanges to standard forms like JCT and NEC\nMore focus on certification and audit trails\nA bit of friction while the industry works it out\nMy take is pretty simple:\n\nThe direction of travel makes sense.\nBut the detail is going to matter a lot.\nAnd the industry will find a way to adapt, as it always does.\n\nKeen to hear views from both sides:\n\nIf you're a subcontractor or SME, does this actually fix the problem?\nIf you're a main contractor or client, what worries you most?\nAnd practically, what do you think replaces retention?\n\nIs this a necessary reform or are we just creating a different set of challenges?\n\nInterested to hear what people think 👇",
        notes: ""
    }
];
