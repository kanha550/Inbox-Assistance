import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TriageOverview from './components/TriageOverview';
import EmailList from './components/EmailList';
import DraftReviewCard from './components/DraftReviewCard';
import PromptConfigModal from './components/PromptConfigModal';
import LearnerShowcase from './components/LearnerShowcase';
import SafetyChecklistModal from './components/SafetyChecklistModal';
import { initialMockEmails } from './data/mockEmails';
import { Clock, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

export default function App() {
  const [emails, setEmails] = useState(initialMockEmails);
  const [selectedEmailId, setSelectedEmailId] = useState(initialMockEmails[0].id);
  const [selectedAccount, setSelectedAccount] = useState('Gmail');
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  // Sweep simulation state
  const [isSweeping, setIsSweeping] = useState(false);
  const [sweepMessage, setSweepMessage] = useState('');
  
  // Modals
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [isLearnersModalOpen, setIsLearnersModalOpen] = useState(false);
  const [isSafetyModalOpen, setIsSafetyModalOpen] = useState(false);
  
  // Toast notification
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  // Find currently selected email
  const selectedEmail = emails.find(e => e.id === selectedEmailId) || emails[0];

  // Counters
  const pendingCount = emails.filter(e => e.status === 'pending_review' && e.category === 'NEEDS_REPLY').length;
  const approvedCount = emails.filter(e => e.status === 'approved').length;
  const filteredCount = emails.filter(e => e.category !== 'NEEDS_REPLY').length;

  // Handlers
  const handleApproveDraft = (emailId, approvedText) => {
    setEmails(prev => prev.map(e => {
      if (e.id === emailId) {
        return {
          ...e,
          status: 'approved',
          draft: e.draft ? { ...e.draft, body: approvedText } : null
        };
      }
      return e;
    }));
    showToast('Draft approved & staged into your inbox Drafts folder. Ready for your final send!');
  };

  const handleRejectDraft = (emailId) => {
    setEmails(prev => prev.map(e => {
      if (e.id === emailId) {
        return { ...e, status: 'skipped' };
      }
      return e;
    }));
    showToast('Email marked as dismissed. No draft needed.');
  };

  const handleUpdateDraftBody = (emailId, newBody) => {
    setEmails(prev => prev.map(e => {
      if (e.id === emailId && e.draft) {
        return {
          ...e,
          draft: { ...e.draft, body: newBody }
        };
      }
      return e;
    }));
  };

  const handleRegenerateDraft = (emailId, newTone) => {
    setEmails(prev => prev.map(e => {
      if (e.id === emailId && e.draft) {
        let updatedBody = e.draft.body;
        if (newTone === 'Direct & Professional') {
          updatedBody = `Hi ${e.senderName.split(' ')[0]},\n\nThanks for your note. Regarding your inquiry, we are on track and ready to proceed. Let me know if you need any additional files or clarifications.\n\nBest,\nAlex`;
        } else if (newTone === 'Warm & Helpful') {
          updatedBody = `Hi ${e.senderName.split(' ')[0]},\n\nGreat to hear from you! I'm happy to help move this forward smoothly. Everything is looking good on our end, and I'd love to jump on a quick call if you want to walk through details.\n\nWarmly,\nAlex`;
        } else if (newTone === 'Boundary-Setting') {
          updatedBody = `Hi ${e.senderName.split(' ')[0]},\n\nThanks for reaching out. To ensure our current launch commitments remain intact, I suggest we keep this sprint focused on our primary agreed milestones. I'll be glad to provide an estimate for this addition next Monday.\n\nBest regards,\nAlex`;
        } else if (newTone === 'Executive') {
          updatedBody = `Hi ${e.senderName.split(' ')[0]},\n\nConfirmed. Staging deployment is on track. Rollback docs are verified. Will send final metrics tomorrow morning prior to the board briefing.\n\nRegards,\nAlex`;
        }

        return {
          ...e,
          draft: {
            ...e.draft,
            tone: newTone,
            body: updatedBody
          }
        };
      }
      return e;
    }));
    showToast(`Draft rewritten with "${newTone}" tone.`);
  };

  const handleTriggerSweep = () => {
    setIsSweeping(true);
    setSweepMessage('Connecting to inbox via ChatGPT Work Mode...');

    setTimeout(() => {
      setSweepMessage('Filtering automated notifications, receipts, and newsletters...');
    }, 1000);

    setTimeout(() => {
      setSweepMessage('Drafting contextual replies for actionable threads...');
    }, 2000);

    setTimeout(() => {
      setIsSweeping(false);
      setSweepMessage('');
      showToast('Sweep complete: 4 draft replies prepared in approval queue. 0 emails sent automatically.');
    }, 3200);
  };

  const handleSelectProfile = (profile) => {
    showToast(`Loaded preset for ${profile.name} (${profile.role}). Custom rules active.`);
  };

  return (
    <div className="app-wrapper">
      <Navbar
        selectedAccount={selectedAccount}
        onSelectAccount={setSelectedAccount}
        onTriggerSweep={handleTriggerSweep}
        isSweeping={isSweeping}
        onOpenPrompts={() => setIsPromptModalOpen(true)}
        onOpenLearners={() => setIsLearnersModalOpen(true)}
        onOpenSafety={() => setIsSafetyModalOpen(true)}
      />

      {/* Sweep Radar Status Bar */}
      {isSweeping && (
        <div className="sweep-status-banner animate-fade-in">
          <div className="sweep-info">
            <span className="mode-dot"></span>
            <strong>Scheduled Sweep in Progress:</strong> {sweepMessage}
          </div>
          <div className="sweep-badge">ZERO_AUTO_SEND: ACTIVE</div>
        </div>
      )}

      {/* Metric summary strip */}
      <TriageOverview
        emails={emails}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
        pendingCount={pendingCount}
        approvedCount={approvedCount}
        filteredCount={filteredCount}
      />

      {/* Main Dual-Pane Dashboard */}
      <div className="main-content">
        <EmailList
          emails={emails}
          selectedEmailId={selectedEmailId}
          onSelectEmail={setSelectedEmailId}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />

        <DraftReviewCard
          email={selectedEmail}
          onApproveDraft={handleApproveDraft}
          onRejectDraft={handleRejectDraft}
          onUpdateDraftBody={handleUpdateDraftBody}
          onRegenerateDraft={handleRegenerateDraft}
        />
      </div>

      {/* Modals */}
      <PromptConfigModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
      />

      <LearnerShowcase
        isOpen={isLearnersModalOpen}
        onClose={() => setIsLearnersModalOpen(false)}
        onSelectProfile={handleSelectProfile}
      />

      <SafetyChecklistModal
        isOpen={isSafetyModalOpen}
        onClose={() => setIsSafetyModalOpen(false)}
      />

      {/* Toast */}
      {toast && (
        <div className="toast-notice animate-slide-up">
          <CheckCircle2 size={18} style={{ color: '#10b981' }} />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
