export const initialMockEmails = [
  {
    id: 'em-1',
    senderName: 'David Kelling',
    senderEmail: 'david.kelling@apexcapital.io',
    senderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
    subject: 'Follow-up: Q3 Cloud Infrastructure Migration Scope & Timeline',
    receivedAt: '12m ago',
    account: 'Gmail',
    category: 'NEEDS_REPLY',
    urgency: 'urgent',
    replyReason: 'Client is awaiting deadline confirmation for Phase 2 sign-off before Friday board meeting.',
    body: `Hi team,

Following up on our sprint review on Tuesday. We need to confirm whether the Phase 2 database migration will be finalized by this Thursday afternoon or if we need to slip to next week.

Our board meeting is scheduled for Friday at 9:00 AM EST, so having this confirmed in writing before tomorrow EOD is critical.

Could you let me know what our team needs to sign off on?

Thanks,
David Kelling
VP Engineering, Apex Capital`,
    draft: {
      subject: 'Re: Follow-up: Q3 Cloud Infrastructure Migration Scope & Timeline',
      tone: 'Direct & Professional',
      confidence: 96,
      body: `Hi David,

Thanks for checking in. Phase 2 database migration testing has wrapped up, and we are currently on track to deploy to staging by [Thursday at 2:00 PM EST]. 

To proceed without delay, our team just needs sign-off on the rollback strategy document sent over on Monday. 

I will keep you updated tomorrow morning with the staging validation metrics so you have full clarity well ahead of your Friday board meeting.

Best regards,
Alex`,
      placeholders: [
        { id: 'p1', token: '[Thursday at 2:00 PM EST]', label: 'Deployment Time', value: 'Thursday at 2:00 PM EST' }
      ]
    },
    safetyAudit: {
      noAutoSend: true,
      hallucinationRisk: 'Low (0%)',
      toneMatch: '98%',
      missingVariables: 1,
      recommendation: 'Safe to approve once deployment timestamp is verified.'
    },
    status: 'pending_review'
  },
  {
    id: 'em-2',
    senderName: 'Clara Oswald',
    senderEmail: 'clara@talentpathways.com',
    senderAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces',
    subject: 'Quick chat regarding Principal Architect role at Stripe?',
    receivedAt: '45m ago',
    account: 'Outlook',
    category: 'NEEDS_REPLY',
    urgency: 'high',
    replyReason: 'Recruiter reaching out with role details and requesting availability for an initial 20-min intro.',
    body: `Hi there,

I came across your background leading microservices architecture and was really impressed by your recent open source contributions.

We're currently scaling our Platform Infrastructure team at Stripe and looking for a Principal Architect. Given your experience with high-throughput distributed systems, I thought this could be an exciting mutual fit.

Do you have 20 minutes this Thursday or Friday for an informal introductory call? If so, feel free to grab a time that suits you best: https://cal.com/clara-stripe/intro

Best,
Clara Oswald | Senior Technical Recruiter`,
    draft: {
      subject: 'Re: Quick chat regarding Principal Architect role at Stripe?',
      tone: 'Warm & Professional',
      confidence: 94,
      body: `Hi Clara,

Thank you for reaching out! The platform work at Stripe is always impressive, and I would be glad to learn more about the challenges the Platform Infrastructure team is tackling.

I have gone ahead and booked a 20-minute slot on your calendar for [Thursday at 3:30 PM EST]. 

Looking forward to our conversation.

Best regards,
Alex`,
      placeholders: [
        { id: 'p2', token: '[Thursday at 3:30 PM EST]', label: 'Chosen Time Slot', value: 'Thursday at 3:30 PM EST' }
      ]
    },
    safetyAudit: {
      noAutoSend: true,
      hallucinationRisk: 'Low (0%)',
      toneMatch: '95%',
      missingVariables: 1,
      recommendation: 'Verify you have booked the link or offer alternative times.'
    },
    status: 'pending_review'
  },
  {
    id: 'em-3',
    senderName: 'Sarah Jenkins',
    senderEmail: 'billing@cloudscale.net',
    senderAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    subject: 'Invoice #INV-2026-891 Paid Successfully',
    receivedAt: '2h ago',
    account: 'Gmail',
    category: 'NOISE_FILTERED',
    urgency: 'low',
    replyReason: 'Automated payment receipt notification. No response required.',
    body: `Hello,

Your payment of $249.00 USD for CloudScale Pro Services was successfully processed on Oct 14, 2026. 

Invoice: #INV-2026-891
Payment Method: Visa ending in 4242
Status: Paid

You can download your PDF receipt from your billing dashboard anytime: https://cloudscale.net/billing/invoices/891

Thank you for your business!
CloudScale Billing System`,
    draft: null,
    safetyAudit: {
      noAutoSend: true,
      hallucinationRisk: 'N/A',
      toneMatch: 'N/A',
      missingVariables: 0,
      recommendation: 'Filtered by AI rule: Automated receipts require no reply.'
    },
    status: 'skipped'
  },
  {
    id: 'em-4',
    senderName: 'Michael Chang',
    senderEmail: 'mchang@techvanguard.org',
    senderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    subject: 'Speaking invitation: Keynote on Autonomous AI Workflows (Dec 2026)',
    receivedAt: '3h ago',
    account: 'Gmail',
    category: 'NEEDS_REPLY',
    urgency: 'high',
    replyReason: 'Conference organizer asking for speaker availability and topic proposal.',
    body: `Hello Alex,

We are organizing the annual AI Systems Summit in San Francisco this coming December 10-12, 2026. We’ve been following your work on reliable human-in-the-loop agentic architectures.

We’d love to invite you as an opening keynote speaker for our track on "Autonomous Knowledge Workflows". We cover travel, lodging, plus an honorarium.

Could you let us know if your calendar permits participation by end of this week, and if so, what title/abstract you might propose?

Warm regards,
Michael Chang
Program Chair, AI Systems Summit`,
    draft: {
      subject: 'Re: Speaking invitation: Keynote on Autonomous AI Workflows (Dec 2026)',
      tone: 'Enthusiastic & Clear',
      confidence: 91,
      body: `Hi Michael,

Thank you for the kind invitation. The AI Systems Summit has a fantastic reputation, and "Autonomous Knowledge Workflows" is an area I am deeply passionate about.

December 10-12 works well with my schedule. I would be delighted to deliver an opening keynote on "Safe Agentic Collaboration: Building Human-in-the-Loop AI Assistants People Actually Trust."

Could you share the deadline for the final slide deck and any speaker guidelines?

Best regards,
Alex`,
      placeholders: [
        { id: 'p3', token: '[Confirm Dec 10-12 availability]', label: 'Calendar Check', value: 'December 10-12' }
      ]
    },
    safetyAudit: {
      noAutoSend: true,
      hallucinationRisk: 'Low (2%)',
      toneMatch: '94%',
      missingVariables: 1,
      recommendation: 'Check personal calendar for Dec 10-12 conflicts before dispatch.'
    },
    status: 'pending_review'
  },
  {
    id: 'em-5',
    senderName: 'GitHub Notifications',
    senderEmail: 'notifications@github.com',
    senderAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop&crop=faces',
    subject: '[Inbox-Assistant/core] Release v2.4.0 deployed to production',
    receivedAt: '5h ago',
    account: 'Gmail',
    category: 'FYI_LOW',
    urgency: 'low',
    replyReason: 'Automated CI/CD notification. Marked as FYI for awareness.',
    body: `GitHub Actions run #842 for release v2.4.0 completed successfully.
Commit: 8f4b21d "feat: add scheduled sweep radar animation"
Deployed to production environment: us-east-1
Status: All 48 tests passing.

View workflow run: https://github.com/inbox-assistant/core/actions/runs/842`,
    draft: null,
    safetyAudit: {
      noAutoSend: true,
      hallucinationRisk: 'N/A',
      toneMatch: 'N/A',
      missingVariables: 0,
      recommendation: 'Filtered: CI/CD bot notice.'
    },
    status: 'skipped'
  },
  {
    id: 'em-6',
    senderName: 'Rebecca Vance',
    senderEmail: 'rebecca.v@lumina-agency.com',
    senderAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces',
    subject: 'Can we add 2 more landing page variations to current sprint?',
    receivedAt: '6h ago',
    account: 'Outlook',
    category: 'NEEDS_REPLY',
    urgency: 'urgent',
    replyReason: 'Client requesting scope expansion. Requires polite boundary setting and change-order estimate.',
    body: `Hey Alex!

Our marketing head saw the preview of the onboarding flow and absolutely loves it. 

She asked if we could sneak in 2 additional landing page variants before Friday's launch so we can run an A/B/C split test over the weekend. 

Can we squeeze this into our current milestone without pushing the launch date?

Thanks a million,
Rebecca`,
    draft: {
      subject: 'Re: Can we add 2 more landing page variations to current sprint?',
      tone: 'Boundary-Setting & Constructive',
      confidence: 97,
      body: `Hi Rebecca,

I'm thrilled to hear that the onboarding flow hit the mark with your marketing lead!

To ensure Friday's launch remains rock-solid and fully tested, adding two new variations directly into this sprint would risk our testing window. 

Instead, I propose we launch the primary approved flow on Friday as scheduled, and I can prepare the two split-test variants as a quick follow-up sprint starting next Monday. 

I can have an estimate and delivery timeline over to you by tomorrow morning if that works!

Best regards,
Alex`,
      placeholders: []
    },
    safetyAudit: {
      noAutoSend: true,
      hallucinationRisk: 'Zero (0%)',
      toneMatch: '99%',
      missingVariables: 0,
      recommendation: 'Excellent boundary draft. Protects schedule without alienating client.'
    },
    status: 'pending_review'
  }
];
