# 📬 Personal Inbox Assistant Blueprint (ChatGPT Work Mode)

A complete, production-ready guide to set up a scheduled AI Inbox Assistant using **ChatGPT with Work Mode** (desktop app) connected to **Gmail** or **Outlook**, complete with safety guardrails, human-in-the-loop review protocols, and real-world learner templates.

---

## 📑 Table of Contents
1. [Core Principles & Safety Architecture](#1-core-principles--safety-architecture)
2. [Step 1: Connect Your Gmail or Outlook](#step-1-connect-your-gmail-or-outlook)
3. [Step 2: Master Assistant Instructions (The System Prompt)](#step-2-master-assistant-instructions-the-system-prompt)
4. [Step 3: How to Judge & Edit AI-Drafted Replies](#step-3-how-to-judge--edit-ai-drafted-replies)
5. [Step 4: Setting Up Recurring Schedules](#step-4-setting-up-recurring-schedules)
6. [Examples From Other Learners (Real-World Blueprints)](#examples-from-other-learners)
   - [Example A: Client Service & Freelancer Assistant](#example-a-client-service--freelancer-assistant)
   - [Example B: Executive & Founder Triage Engine](#example-b-executive--founder-triage-engine)
   - [Example C: Job Seeker & Recruiter Networking Assistant](#example-c-job-seeker--recruiter-networking-assistant)
   - [Example D: E-commerce / Customer Support Lead Triage](#example-d-e-commerce--customer-support-lead-triage)

---

## 1. Core Principles & Safety Architecture

The golden rule of an AI Inbox Assistant is **Zero Auto-Send**:
```
[ Incoming Inbox ] ➡️ [ ChatGPT Work Mode ] ➡️ [ Triage & Draft Queue ] ➡️ [ Human Approval & Edit ] ➡️ [ Approved & Sent by YOU ]
```
- **Read & Filter**: Evaluates new messages against a rigorous noise filter (ignores receipts, newsletters, spam, auto-replies).
- **Draft Only**: The AI creates drafts in your email client or presents structured review cards. It **never** dispatches emails autonomously.
- **Safety Placeholders**: Any variable the AI cannot verify (rates, exact dates, links, private agreements) must use bracketed tokens like `[Insert Time]` or `[Confirm Rate]`.

---

## Step 1: Connect Your Gmail or Outlook

### In the ChatGPT Desktop App (Windows / macOS)
1. **Download & Launch**: Open the ChatGPT Desktop app.
2. **Switch to Work Mode**:
   - Locate the mode selector toggle at the top or sidebar (toggle from **Chat** to **Work**).
3. **Open Settings & Integrations / Connectors**:
   - Navigate to `Settings` (gear icon) ➡️ `Connectors / Workplace Apps`.
   - Click **Connect** next to **Google Workspace (Gmail)** or **Microsoft 365 (Outlook)**.
4. **Grant OAuth Permissions**:
   - Authenticate with your Google or Microsoft account.
   - Permissions needed: `Read emails`, `Create drafts` / `Manage draft messages`.
   - Ensure the app is constrained to **Draft creation only** rather than autonomous sending.
5. **Verify the Connection**:
   - In Work mode, type:  
     `"List the subjects of my last 5 unread emails from today."`
   - If ChatGPT lists your emails, your connection is active and ready.

---

## Step 2: Master Assistant Instructions (The System Prompt)

Create a dedicated **Project** or **Custom GPT** in ChatGPT Work Mode and insert the following instructions into the instructions/prompt window:

```markdown
# Role & Identity
You are my executive Inbox Assistant. Your primary responsibility is to review my incoming emails, filter out noise, identify messages requiring my personal reply, and prepare polite, high-converting, concise response drafts for my approval.

# The Golden Rule: DRAFT ONLY
- Under NO circumstance should you send an email directly.
- Every email response must be generated as a DRAFT or presented in an approval card for my direct review and manual approval.

# Triage Criteria (What Needs a Reply vs. What to Skip)
### SKIP (Ignore or mark as FYI):
- Automated marketing, newsletters, promotional offers.
- Transactional receipts, shipping confirmations, billing alerts.
- Meeting acceptance/decline notifications with no message body.
- Social media notifications and security alerts.
- Threads where I was merely CC'd and no explicit action or question was directed to me.

### ACTION REQUIRED (Must generate draft):
- Direct questions or action requests from clients, colleagues, managers, or vendors.
- Inbound inquiries asking for availability, pricing, deliverables, or updates.
- Urgent or time-sensitive bottlenecks.
- High-priority follow-ups awaiting my decision.

# Draft Generation Standards
1. Tone: Professional, warm, concise, and authentic. Avoid corporate buzzwords, robotic enthusiasm ("I hope this email finds you well!"), and bloated filler.
2. Structure:
   - Direct acknowledgment of their query.
   - Clear response or proposed next step.
   - Low-friction call-to-action (e.g., offering 2 clear time slots).
   - Sign-off with my name.
3. Unknowns & Safety: Never guess numbers, dates, prices, or commitments. Use highlighted placeholders like `[Insert Your Availability]` or `[Attach Proposal File]`.

# Output Format (The Approval Queue Card)
For each email requiring a reply, format your output exactly as follows:

---
### 📩 Email #[N]: [Subject Line]
- **From**: [Sender Name & Email Address]
- **Urgency**: [High / Medium / Low]
- **Why a Reply is Needed**: [1-sentence explanation of what they are asking or waiting on]
- **Proposed Draft Reply**:
> **Subject**: Re: [Subject Line]
>
> Hi [Name],
>
> [Body of the draft reply]
>
> Best regards,  
> [My Name]
- **Flags / Placeholders to Verify**: [List any items in brackets the user must verify before sending]
- **Suggested Action**: [Approve Draft / Edit Needed / Archive without Reply]
---
```

---

## Step 3: How to Judge & Edit AI-Drafted Replies

Before approving any drafted email, use this **4-Point Safety Checklist**:

| # | Inspection Point | What to Look For | Fix Action |
|---|------------------|-------------------|------------|
| 1 | **Factual Accuracy** | Did the AI invent dates, commitments, deadlines, or pricing? | Replace with exact data or check calendar. |
| 2 | **Tone & Voice** | Does it sound like an over-eager bot or does it match your natural voice? | Trim formal fluff; make it sound human and direct. |
| 3 | **Context Nuance** | Does the sender have sensitive history (frustration, contract disputes)? | Soften or personalize the language appropriately. |
| 4 | **Placeholders** | Are there any remaining brackets like `[Insert Date]`? | Fill them in before clicking Send. |

---

## Step 4: Setting Up Recurring Schedules

In ChatGPT Work Mode, you can establish an automated cadence so your assistant works proactively rather than waiting for you to prompt it:

### Recommended Cadence:
- **Morning Sweep (8:30 AM)**: Catches emails that arrived overnight; prioritizes the morning queue.
- **Midday Check (1:30 PM)**: Catches morning client replies and urgent afternoon asks.
- **End-of-Day Triage (4:45 PM)**: Prepares responses for next-day delivery and clears the deck.

### Schedule Setup Instructions:
1. In the ChatGPT Desktop Work Mode interface, click **Schedule / Automations** (or use the prompt clock icon).
2. Set Trigger: **Recurring Schedule** (e.g., *Weekdays at 9:00 AM*).
3. Set the Prompt:
   ```text
   Run morning inbox triage:
   1. Scan unread emails from the last 18 hours in my connected inbox.
   2. Filter for emails requiring action or reply.
   3. Generate draft replies following my Inbox Assistant guidelines.
   4. Save each draft into my Gmail/Outlook Drafts folder and output the approval summary card here.
   ```
4. Confirm notification preferences: Set desktop notifications so ChatGPT pings you: *"3 new email drafts prepared for review."*

---

## Examples From Other Learners

### Example A: Client Service & Freelancer Assistant
- **Learner Persona**: Freelance Web Developer / Consultant managing 8 active clients.
- **Custom Rule**:
  - Automatically recognizes project names in subject lines.
  - Drafts short timeline updates and offers two 30-minute meeting slots.
  - If a client asks for scope expansion, drafts a gentle polite boundary: *"I'd love to help with this! Let me review the spec and provide an estimate before we kick off."*
- **Schedule**: Twice daily (9:00 AM & 2:00 PM).

### Example B: Executive & Founder Triage Engine
- **Learner Persona**: Startup Founder receiving 150+ emails daily.
- **Custom Rule**:
  - Classifies into 3 tiers: **Investor/Board**, **Key Customer / Escalation**, **Team Blockers**.
  - Enforces a 3-sentence rule for drafts: Keep drafts under 60 words.
  - Automatically flags cold sales pitches and recommends **Archive / Do Not Reply**.
- **Schedule**: 3 times daily (8:00 AM, 12:00 PM, 5:00 PM).

### Example C: Job Seeker & Recruiter Networking Assistant
- **Learner Persona**: Software Engineer actively interviewing.
- **Custom Rule**:
  - Detects recruiter outreach, interview requests, and scheduling links.
  - Drafts enthusiasm-tailored responses referencing key skills from an uploaded resume.
  - If Calendly / scheduling links are provided, drafts: *"Thanks for reaching out! I've booked a slot on your link for [Time selected] and look forward to speaking."*
- **Schedule**: Every 3 hours during business hours.

### Example D: E-commerce / Customer Support Lead Triage
- **Learner Persona**: Online store owner managing order inquiries.
- **Custom Rule**:
  - Parses order numbers, returns, and tracking queries.
  - Pulls return policy canned responses and inserts customer-specific order details.
  - Marks drafts with refund requests as `[High Urgency - Requires Manual Verification]`.
- **Schedule**: Every morning at 8:00 AM.
