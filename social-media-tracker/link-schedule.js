/**
 * LINK PLACEMENT TEST SCHEDULE
 * ============================
 * Define the link placement rules for each account by week.
 * 
 * Week keys are in "YYYY-MM-DD" format representing the Monday of that week (w/c date).
 * 
 * Rule values should be short descriptions like:
 * - "Links in comments only"
 * - "No links at all"
 * - "Links in posts"
 * - "Split: one post no link, one post link in comment"
 * 
 * Add new weeks as needed. The calendar will display "No rule set" if a week is missing.
 */

const linkSchedule = {
    // Michael Loizias schedule
    michael: {
        "2026-03-23": "Links in comments only",
        "2026-03-30": "No links at all",
        "2026-04-06": "Links in posts",
        "2026-04-13": "Links in comments only",
        "2026-04-20": "No links at all",
        "2026-04-27": "Links in posts"
    },
    
    // Stelios Ioannou schedule
    stelios: {
        "2026-03-23": "Split: one post no link, one post link in comment",
        "2026-03-30": "Links in comments only",
        "2026-04-06": "No links at all",
        "2026-04-13": "Links in posts",
        "2026-04-20": "Split: one post no link, one post link in comment",
        "2026-04-27": "Links in comments only"
    },
    
    // StoneRise Company Page schedule
    company: {
        "2026-03-30": "Links in comments only",
        "2026-04-06": "No links at all",
        "2026-04-13": "Links in posts",
        "2026-04-20": "Links in comments only",
        "2026-04-27": "No links at all"
    }
};

/**
 * Helper function to get the Monday of a given week
 * @param {Date} date - Any date
 * @returns {Date} - The Monday of that week
 */
function getMondayOfWeek(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
}

/**
 * Get the link rule for an account for a specific date
 * @param {string} account - "michael" | "stelios" | "company"
 * @param {Date} date - The date to check
 * @returns {string} - The rule for that week
 */
function getLinkRule(account, date) {
    const monday = getMondayOfWeek(date);
    const key = monday.toISOString().split('T')[0];
    return linkSchedule[account]?.[key] || "No rule set";
}

/**
 * LINK TEST RESULTS
 * =================
 * Record findings from link placement experiments here.
 * 
 * Each result object should have:
 * - week:     The week tested (e.g. "w/c 23 Mar")
 * - account:  Which account (e.g. "Michael", "Stelios", "Company")
 * - strategy: What was tested (e.g. "Links in comments only")
 * - status:   "testing" | "winner" 
 * - notes:    Observations and metrics (optional)
 * 
 * EXAMPLE RESULTS (uncomment and modify to use):
 */

const linkTestResults = [
    // {
    //     week: "w/c 23 Mar",
    //     account: "Michael",
    //     strategy: "Links in comments only",
    //     status: "winner",
    //     notes: "23% higher reach vs posts with inline links. Comments got decent engagement too."
    // },
    // {
    //     week: "w/c 30 Mar",
    //     account: "Stelios",
    //     strategy: "Links in comments only",
    //     status: "testing",
    //     notes: "Testing this week. Early signs positive."
    // }
];
