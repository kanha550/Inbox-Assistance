import React from 'react';
import { Mail, Sparkles, Clock, ShieldCheck, Users, Play, CheckCircle2 } from 'lucide-react';

export default function Navbar({
  selectedAccount,
  onSelectAccount,
  onTriggerSweep,
  isSweeping,
  onOpenPrompts,
  onOpenLearners,
  onOpenSafety
}) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="brand-icon">
          <Mail size={20} />
        </div>
        <div>
          <div className="brand-title">Inbox Assistant</div>
        </div>
        <div className="brand-mode-badge" title="ChatGPT Work Mode connector is active">
          <span className="mode-dot"></span>
          ChatGPT Work Mode
        </div>
      </div>

      <div className="nav-center">
        <button
          className={`account-chip ${selectedAccount === 'Gmail' ? 'active' : ''}`}
          onClick={() => onSelectAccount('Gmail')}
        >
          <span style={{ color: '#ea4335', fontWeight: 'bold' }}>M</span> Gmail
        </button>
        <button
          className={`account-chip ${selectedAccount === 'Outlook' ? 'active' : ''}`}
          onClick={() => onSelectAccount('Outlook')}
        >
          <span style={{ color: '#0078d4', fontWeight: 'bold' }}>O</span> Outlook
        </button>
      </div>

      <div className="nav-actions">
        <button
          className="btn-secondary"
          onClick={onOpenPrompts}
          title="View & copy ChatGPT Work mode prompts"
        >
          <Sparkles size={15} style={{ color: '#818cf8' }} />
          <span>Prompt Studio</span>
        </button>

        <button
          className="btn-secondary"
          onClick={onOpenLearners}
          title="See examples from other learners"
        >
          <Users size={15} style={{ color: '#38bdf8' }} />
          <span>Learner Presets</span>
        </button>

        <button
          className="btn-secondary"
          onClick={onOpenSafety}
          title="View Human-in-the-Loop Safety Checklist"
        >
          <ShieldCheck size={15} style={{ color: '#34d399' }} />
          <span>Safety Rubric</span>
        </button>

        <button
          className="btn-primary"
          onClick={onTriggerSweep}
          disabled={isSweeping}
          title="Simulate scheduled inbox sweep"
        >
          {isSweeping ? (
            <>
              <Clock size={16} className="animate-spin" />
              <span>Sweeping Inbox...</span>
            </>
          ) : (
            <>
              <Play size={16} />
              <span>Run Sweep Now</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
