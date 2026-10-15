import React, { useState } from 'react';
import { Search, Inbox, AlertCircle, CheckCircle2, ShieldBan, Sparkles } from 'lucide-react';

export default function EmailList({
  emails,
  selectedEmailId,
  onSelectEmail,
  activeFilter,
  onSelectFilter
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmails = emails.filter(email => {
    // Category filtering
    if (activeFilter === 'NEEDS_REPLY' && email.category !== 'NEEDS_REPLY') return false;
    if (activeFilter === 'PENDING' && email.status !== 'pending_review') return false;
    if (activeFilter === 'APPROVED' && email.status !== 'approved') return false;
    if (activeFilter === 'NOISE' && email.category === 'NEEDS_REPLY') return false;

    // Search query filtering
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      const matchSubject = email.subject.toLowerCase().includes(q);
      const matchSender = email.senderName.toLowerCase().includes(q) || email.senderEmail.toLowerCase().includes(q);
      const matchSnippet = email.snippet ? email.snippet.toLowerCase().includes(q) : email.body.toLowerCase().includes(q);
      return matchSubject || matchSender || matchSnippet;
    }
    return true;
  });

  return (
    <div className="inbox-pane">
      <div className="inbox-pane-header">
        <div className="inbox-title-row">
          <div className="inbox-title">
            <Inbox size={18} style={{ color: '#818cf8' }} />
            <span>Triage Stream</span>
            <span className="inbox-count-tag">{filteredEmails.length}</span>
          </div>
        </div>

        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: 10, color: '#64748b' }} />
          <input
            type="text"
            placeholder="Search sender, subject, keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.45rem 0.65rem 0.45rem 2rem', fontSize: '0.8rem' }}
          />
        </div>

        {/* Filter Pills */}
        <div className="filter-pills">
          <button
            className={`filter-pill ${activeFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => onSelectFilter('ALL')}
          >
            All
          </button>
          <button
            className={`filter-pill ${activeFilter === 'PENDING' ? 'active' : ''}`}
            onClick={() => onSelectFilter('PENDING')}
          >
            Needs Review
          </button>
          <button
            className={`filter-pill ${activeFilter === 'APPROVED' ? 'active' : ''}`}
            onClick={() => onSelectFilter('APPROVED')}
          >
            Approved
          </button>
          <button
            className={`filter-pill ${activeFilter === 'NOISE' ? 'active' : ''}`}
            onClick={() => onSelectFilter('NOISE')}
          >
            Filtered Noise
          </button>
        </div>
      </div>

      <div className="email-items-container">
        {filteredEmails.length === 0 ? (
          <div style={{ padding: '2.5rem 1rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
            No emails matching this view.
          </div>
        ) : (
          filteredEmails.map(email => {
            const isSelected = email.id === selectedEmailId;
            return (
              <div
                key={email.id}
                className={`email-item ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectEmail(email.id)}
              >
                <div className="avatar-wrapper">
                  <img src={email.senderAvatar} alt={email.senderName} className="avatar-img" />
                  <span className={`urgency-dot ${email.urgency}`} title={`Urgency: ${email.urgency}`} />
                </div>

                <div className="email-content">
                  <div className="email-header-line">
                    <span className="email-sender">{email.senderName}</span>
                    <span className="email-time">{email.receivedAt}</span>
                  </div>

                  <div className="email-subject">{email.subject}</div>

                  <div className="email-snippet">
                    {email.body.substring(0, 110)}...
                  </div>

                  <div className="email-footer-tags">
                    {email.category === 'NEEDS_REPLY' ? (
                      email.status === 'approved' ? (
                        <span className="status-badge approved">
                          <CheckCircle2 size={11} /> Approved
                        </span>
                      ) : (
                        <span className="status-badge pending">
                          <Sparkles size={11} /> Draft Ready
                        </span>
                      )
                    ) : (
                      <span className="status-badge filtered">
                        <ShieldBan size={11} /> Filtered Out
                      </span>
                    )}

                    <span style={{ fontSize: '0.675rem', color: '#64748b', marginLeft: 'auto', fontFamily: 'monospace' }}>
                      {email.account}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
