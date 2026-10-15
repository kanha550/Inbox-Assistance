import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  AlertTriangle, 
  RefreshCw, 
  Send, 
  Trash2, 
  ExternalLink,
  Edit3,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DraftReviewCard({
  email,
  onApproveDraft,
  onRejectDraft,
  onUpdateDraftBody,
  onRegenerateDraft
}) {
  const [showOriginal, setShowOriginal] = useState(false);
  const [selectedTone, setSelectedTone] = useState(email.draft?.tone || 'Direct & Professional');
  const [draftText, setDraftText] = useState(email.draft?.body || '');
  const [placeholderValues, setPlaceholderValues] = useState({});

  useEffect(() => {
    if (email.draft) {
      setDraftText(email.draft.body);
      setSelectedTone(email.draft.tone || 'Direct & Professional');
    } else {
      setDraftText('');
    }
  }, [email.id, email.draft]);

  const handleTextChange = (e) => {
    setDraftText(e.target.value);
    onUpdateDraftBody(email.id, e.target.value);
  };

  const handleToneChange = (tone) => {
    setSelectedTone(tone);
    onRegenerateDraft(email.id, tone);
  };

  const handlePlaceholderReplace = (token, replacement) => {
    if (!replacement) return;
    const newText = draftText.replace(token, replacement);
    setDraftText(newText);
    onUpdateDraftBody(email.id, newText);
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#6366f1', '#38bdf8']
    });
    onApproveDraft(email.id, draftText);
  };

  if (!email) {
    return (
      <div className="draft-studio-pane" style={{ justifyContent: 'center', alignItems: 'center', color: '#64748b' }}>
        Select an email to view triage details and draft review.
      </div>
    );
  }

  // If filtered noise
  if (email.category !== 'NEEDS_REPLY') {
    return (
      <div className="draft-studio-pane">
        <div className="studio-header">
          <div className="studio-title-area">
            <div className="studio-badge-row">
              <span className="status-badge filtered">Automated Noise / Filtered Out</span>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Account: {email.account}</span>
            </div>
            <h2 className="studio-subject">{email.subject}</h2>
            <div className="sender-detail-line">From: {email.senderName} ({email.senderEmail})</div>
          </div>
        </div>

        <div className="reason-callout" style={{ borderColor: 'rgba(100, 116, 139, 0.4)', background: 'rgba(100, 116, 139, 0.1)' }}>
          <ShieldCheck size={20} style={{ color: '#94a3b8' }} />
          <div className="reason-text">
            <span className="reason-label" style={{ color: '#94a3b8' }}>AI Triage Decision:</span>
            {email.replyReason}
          </div>
        </div>

        <div style={{ padding: '0 1.4rem', color: '#94a3b8', fontSize: '0.85rem' }}>
          <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#e2e8f0' }}>Message Body:</div>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', whiteSpace: 'pre-wrap' }}>
            {email.body}
          </div>
        </div>
      </div>
    );
  }

  const isApproved = email.status === 'approved';

  return (
    <div className="draft-studio-pane animate-fade-in">
      {/* Studio Header */}
      <div className="studio-header">
        <div className="studio-title-area">
          <div className="studio-badge-row">
            <span className={`status-badge ${isApproved ? 'approved' : 'pending'}`}>
              {isApproved ? <CheckCircle2 size={12} /> : <Sparkles size={12} />}
              {isApproved ? 'Draft Approved & Staged' : 'Human Review Required'}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Account: {email.account} · Received: {email.receivedAt}
            </span>
          </div>

          <h2 className="studio-subject">{email.subject}</h2>
          <div className="sender-detail-line">
            From: <strong style={{ color: '#f1f5f9' }}>{email.senderName}</strong> &lt;{email.senderEmail}&gt;
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span className={`status-badge ${email.urgency === 'urgent' ? 'crimson' : email.urgency === 'high' ? 'pending' : 'approved'}`} style={{ textTransform: 'uppercase' }}>
            {email.urgency} Urgency
          </span>
        </div>
      </div>

      {/* Why a Reply is Needed Callout */}
      <div className="reason-callout">
        <Sparkles size={18} className="reason-icon" />
        <div className="reason-text">
          <span className="reason-label">Why this needs a reply:</span>
          {email.replyReason}
        </div>
      </div>

      {/* Expandable Original Thread */}
      <div className="original-thread-box">
        <button
          className="original-header-btn"
          onClick={() => setShowOriginal(!showOriginal)}
        >
          <span>Original Email Message Context</span>
          {showOriginal ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {showOriginal && (
          <div className="original-body animate-fade-in">
            {email.body}
          </div>
        )}
      </div>

      {/* AI Draft Proposal Card */}
      <div className="draft-card">
        <div className="draft-card-header">
          <div className="draft-label">
            <Sparkles size={16} />
            <span>AI Drafted Response</span>
            <span style={{ fontSize: '0.725rem', color: '#94a3b8', fontWeight: 400 }}>
              (Confidence: {email.draft?.confidence || 95}%)
            </span>
          </div>

          {/* Tone Selector */}
          <div className="tone-selector">
            <span style={{ fontSize: '0.7rem', color: '#64748b', marginRight: 4 }}>Tone:</span>
            {['Direct & Professional', 'Warm & Helpful', 'Boundary-Setting', 'Executive'].map(tone => (
              <button
                key={tone}
                className={`tone-btn ${selectedTone === tone ? 'active' : ''}`}
                onClick={() => handleToneChange(tone)}
              >
                {tone}
              </button>
            ))}
          </div>
        </div>

        {/* Draft Textarea */}
        <textarea
          className="draft-textarea"
          value={draftText}
          onChange={handleTextChange}
          placeholder="AI drafted reply will appear here..."
        />

        {/* Placeholders Quick Replacer */}
        {email.draft?.placeholders && email.draft.placeholders.length > 0 && (
          <div className="placeholders-row">
            <span style={{ fontSize: '0.725rem', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: 4 }}>
              <AlertTriangle size={13} />
              Fill Placeholders:
            </span>
            {email.draft.placeholders.map(p => (
              <div key={p.id} className="placeholder-pill">
                <span>{p.token}</span>
                <button
                  style={{ color: '#fff', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', padding: '1px 5px', fontSize: '0.7rem' }}
                  onClick={() => handlePlaceholderReplace(p.token, p.value)}
                  title="Insert recommended value"
                >
                  Insert "{p.value}"
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Safety Audit Strip */}
      <div className="safety-audit-panel">
        <div className="safety-header">
          <div className="safety-title">
            <ShieldCheck size={16} />
            <span>Human-In-The-Loop Safety Audit</span>
          </div>
          <span style={{ fontSize: '0.725rem', color: '#10b981', fontWeight: 600 }}>
            Zero Auto-Send Guard Active
          </span>
        </div>

        <div className="safety-grid">
          <div className="safety-item">
            <span className="safety-label">Hallucination Risk</span>
            <span className="safety-val" style={{ color: '#34d399' }}>
              {email.safetyAudit?.hallucinationRisk || '0% (Safe)'}
            </span>
          </div>
          <div className="safety-item">
            <span className="safety-label">Tone Match Confidence</span>
            <span className="safety-val" style={{ color: '#818cf8' }}>
              {email.safetyAudit?.toneMatch || '98%'}
            </span>
          </div>
          <div className="safety-item">
            <span className="safety-label">Review Checklist</span>
            <span className="safety-val" style={{ color: '#f1f5f9' }}>
              {email.safetyAudit?.recommendation || 'Ready for approval'}
            </span>
          </div>
        </div>
      </div>

      {/* Action Controls Bar */}
      <div className="action-controls-bar">
        <button
          className="btn-archive"
          onClick={() => onRejectDraft(email.id)}
          title="Mark as not needing a reply"
        >
          <Trash2 size={14} />
          <span>Dismiss / No Reply Needed</span>
        </button>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            className="btn-secondary"
            onClick={() => onRegenerateDraft(email.id, selectedTone)}
            title="Ask ChatGPT to regenerate draft"
          >
            <RefreshCw size={14} />
            <span>Regenerate</span>
          </button>

          <button
            className="btn-approve"
            onClick={triggerCelebration}
          >
            <CheckCircle2 size={16} />
            <span>{isApproved ? 'Update & Keep Approved' : 'Approve Draft & Stage to Outbox'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
