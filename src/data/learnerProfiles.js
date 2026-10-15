export const learnerProfiles = [
  {
    id: 'freelancer',
    name: 'Alex Mercer',
    role: 'Freelance Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
    tagline: 'Protects delivery timelines & drafts clear change orders',
    inboxType: 'Gmail + Google Workspace',
    schedule: 'Twice Daily: 9:00 AM & 2:00 PM',
    weeklyTimeSaved: '4.5 hours / week',
    specialRules: [
      'Scope creep guard: Automatically draft boundary-setting estimates if clients ask for unplanned features.',
      'Always offer two specific 30-min meeting slots rather than generic "whenever you are free".',
      'Sign off as "Best regards, Alex" with portfolio link placeholder.'
    ],
    samplePrompt: `You are my freelance client communication assistant.
When clients request out-of-scope work, never say yes blindly. Always draft a polite boundary acknowledging enthusiasm, stating the current sprint deadline is priority, and offering a quick follow-up estimate for next week.`
  },
  {
    id: 'founder',
    name: 'Elena Rostova',
    role: 'Early-stage Startup Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces',
    tagline: 'Aggressive triage for 150+ daily emails with 3-sentence rule',
    inboxType: 'Microsoft Outlook 365',
    schedule: '3x Daily: 8:00 AM, 1:00 PM, 5:30 PM',
    weeklyTimeSaved: '7.2 hours / week',
    specialRules: [
      'The 3-Sentence Rule: Maximum 60 words per drafted response.',
      'Auto-filter cold outbound sales pitches directly to Archive without drafting.',
      'Highlight emails from investors and enterprise leads with [RED URGENCY].'
    ],
    samplePrompt: `You are my executive triage chief of staff.
I receive 150+ emails daily. Keep all drafted responses under 3 sentences. Cut all polite throat-clearing. Direct, decisive, respectful tone. Flag any investor inquiries immediately.`
  },
  {
    id: 'jobseeker',
    name: 'Marcus Vance',
    role: 'Staff Infrastructure Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    tagline: 'Captures recruiter outreach & schedules interviews seamlessly',
    inboxType: 'Gmail Personal',
    schedule: 'Every 3 hours during business hours',
    weeklyTimeSaved: '3.8 hours / week',
    specialRules: [
      'Detect recruiter inquiries and scan for scheduling links (Calendly/Cal.com).',
      'Cross-reference requested tech stack with uploaded resume highlights.',
      'Draft polite declines for junior or non-remote positions with high respect.'
    ],
    samplePrompt: `You are my career networking assistant.
When recruiters reach out with relevant staff-level backend or infra roles, draft warm, high-confidence responses expressing interest. If they share a calendar link, draft a confirmation that I will select a time slot.`
  },
  {
    id: 'support_lead',
    name: 'Sarah Chen',
    role: 'E-commerce Brand Owner & Support Lead',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces',
    tagline: 'Automates return policy drafts & urgent order triage',
    inboxType: 'Gmail Support Inbox',
    schedule: 'Every morning at 8:00 AM & 12:30 PM',
    weeklyTimeSaved: '6.0 hours / week',
    specialRules: [
      'Extract order numbers from subject and body into draft tags.',
      'Insert canned return policy guidelines while maintaining empathetic human warmth.',
      'Never execute refunds automatically—always flag [Manual Verification Needed].'
    ],
    samplePrompt: `You are my e-commerce customer support triage engine.
Identify customer inquiries regarding orders, tracking, and exchanges. Draft empathetic, clear solutions referencing our 30-day return policy. Never approve refunds without human review.`
  }
];
