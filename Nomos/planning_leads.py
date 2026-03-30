"""
Planning Leads → Instantly
--------------------------
Reads the weekly planning applications CSV, filters for qualifying leads
(budget >= £200k AND architect email present), then pushes each lead
to the Instantly Architects/Agents campaign via the v2 API.

Usage:
    python planning_leads.py "2026 Week 10.csv"

Requirements:
    pip install requests
"""

import csv
import sys
import requests

# ── CONFIG ────────────────────────────────────────────────────────────────────

INSTANTLY_API_KEY  = "MGZkMmFmOTktNjUyYy00NzlkLWE2ZWItZTIxZGFkY2FmODM1Om5zYU5yVGR2eGJtZg=="
CAMPAIGN_ID        = "1bdf52b0-fa28-4223-a3bc-79dfd4f16a4d"
BUDGET_THRESHOLD   = 0.2   # £0.2m = £200k minimum

# ── INSTANTLY API ─────────────────────────────────────────────────────────────

INSTANTLY_URL = "https://api.instantly.ai/api/v2/leads/add"

def push_to_instantly(leads: list[dict]) -> dict:
    """Push a batch of leads to Instantly. Returns the API response."""
    response = requests.post(
        INSTANTLY_URL,
        headers={
            "Authorization": f"Bearer {INSTANTLY_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "campaign_id": CAMPAIGN_ID,
            "skip_if_in_workspace": True,
            "leads": leads,
        },
    )
    return response.json()

# ── CSV PROCESSING ────────────────────────────────────────────────────────────

def process_csv(filepath: str):
    qualifying = []
    skipped_budget = 0
    skipped_no_email = 0

    with open(filepath, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Filter 1: budget
            try:
                budget = float(row.get("£m Value From") or 0)
            except ValueError:
                budget = 0

            if budget < BUDGET_THRESHOLD:
                skipped_budget += 1
                continue

            # Filter 2: architect email
            email = (row.get("Architect Agent Email") or "").strip()
            if not email:
                skipped_no_email += 1
                continue

            qualifying.append({
                "email": email,
                "first_name": (row.get("Architect Agent Contact") or "").strip(),
                "company_name": (row.get("Architect Agent") or "").strip(),
                "custom_variables": {
                    "heading":        (row.get("Heading") or "").strip(),
                    "proposal":       (row.get("Proposal") or "").strip(),
                    "site_address":   (row.get("Site Address") or "").strip(),
                    "budget_from":    (row.get("£m Value From") or "").strip(),
                    "budget_to":      (row.get("£m Value To") or "").strip(),
                    "local_authority":(row.get("Local Authority") or "").strip(),
                    "project_stage":  (row.get("Project Stage") or "").strip(),
                },
            })

    print(f"\nCSV summary:")
    print(f"  Skipped — budget below £{BUDGET_THRESHOLD}m : {skipped_budget}")
    print(f"  Skipped — no architect email              : {skipped_no_email}")
    print(f"  Qualifying leads                          : {len(qualifying)}")

    return qualifying

# ── MAIN ──────────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 2:
        print("Usage: python planning_leads.py <path_to_csv>")
        sys.exit(1)

    filepath = sys.argv[1]
    print(f"Processing: {filepath}")

    leads = process_csv(filepath)

    if not leads:
        print("\nNo qualifying leads found. Nothing sent to Instantly.")
        return

    # Instantly accepts up to 1000 leads per request — batch if needed
    BATCH_SIZE = 1000
    total_uploaded = 0

    for i in range(0, len(leads), BATCH_SIZE):
        batch = leads[i:i + BATCH_SIZE]
        print(f"\nPushing batch {i // BATCH_SIZE + 1} ({len(batch)} leads) to Instantly...")
        result = push_to_instantly(batch)

        uploaded = result.get("leads_uploaded", 0)
        skipped  = result.get("skipped_count", 0)
        dupes    = result.get("duplicated_leads", 0)
        invalid  = result.get("invalid_email_count", 0)
        total_uploaded += uploaded

        print(f"  Uploaded : {uploaded}")
        print(f"  Skipped  : {skipped}  (already in workspace)")
        print(f"  Dupes    : {dupes}")
        print(f"  Invalid  : {invalid}")

        if result.get("status") not in ("success", None):
            print(f"  API response: {result}")

    print(f"\nDone. Total leads uploaded this run: {total_uploaded}")

if __name__ == "__main__":
    main()
