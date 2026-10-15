# 📬 Personal Inbox Assistant (ChatGPT Work Mode & Interactive Dashboard)

An autonomous AI Inbox Assistant application and complete prompt toolkit for **ChatGPT with Work Mode**, connecting to **Gmail** or **Microsoft Outlook**.

---

## 🚀 Key Features

1. **Human-in-the-Loop Safe Approval**:
   - Zero emails sent automatically. All AI drafts are staged for direct review and manual approval.
   - 4-point safety verification (Hallucination risk, tone match, missing variables, commitment check).
2. **AI Triage & Noise Filter**:
   - Classifies incoming messages into **Needs Reply (Urgent / High)**, **FYI / Low Priority**, and **Filtered Noise (Receipts, Newsletters, Spam)**.
3. **Interactive Draft Studio**:
   - Live editable response drafts.
   - Instant tone switcher (*Direct & Professional*, *Warm & Helpful*, *Boundary-Setting*, *Executive*).
   - Dynamic placeholder detector with 1-click replacement tokens (`[Insert Time]`, `[Confirm Date]`).
4. **Scheduled Automated Sweeps**:
   - Simulates morning (9:00 AM) and afternoon (2:00 PM) automated inbox triage sweeps with real-time status radar.
5. **Prompt Studio & Learner Presets**:
   - Ready-to-copy master prompts, scheduled sweep prompts, and real-world configurations from other learners (Freelancer, Founder, Job Seeker, Support Lead).

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) in your browser.

---

## 📂 Documentation & Blueprints

- [INBOX_ASSISTANT_GUIDE.md](file:///c:/Users/hp/OneDrive/Desktop/Inbox%20Assistance/INBOX_ASSISTANT_GUIDE.md) — Step-by-step setup guide for ChatGPT Desktop with Work Mode, triage criteria, and judgment rubrics.
- [PROMPT_TEMPLATES.md](file:///c:/Users/hp/OneDrive/Desktop/Inbox%20Assistance/PROMPT_TEMPLATES.md) — Ready-to-copy system prompts, sweep prompts, and ad-hoc check prompts.
