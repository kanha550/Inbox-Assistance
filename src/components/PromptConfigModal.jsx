import React, { useState } from 'react';
import { Sparkles, Copy, Check, X, Shield, Clock } from 'lucide-react';
import { initialPrompts } from '../data/initialPrompts';

export default function PromptConfigModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('system');
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-card animate-slide-up" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <Sparkles size={20} style={{ color: '#818cf8' }} />
            <span>ChatGPT Work Mode Prompt Studio</span>
          </div>
          <button onClick={onClose} style={{ color: '#94a3b8' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', padding: '0.85rem 1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            className={`filter-pill ${activeTab === 'system' ? 'active' : ''}`}
            onClick={() => setActiveTab('system')}
          >
            Master System Prompt
          </button>
          <button
            className={`filter-pill ${activeTab === 'morning' ? 'active' : ''}`}
            onClick={() => setActiveTab('morning')}
          >
            Morning Sweep (9 AM)
          </button>
          <button
            className={`filter-pill ${activeTab === 'afternoon' ? 'active' : ''}`}
            onClick={() => setActiveTab('afternoon')}
          >
            Afternoon Sweep (2 PM)
          </button>
        </div>

        <div className="modal-body">
          {activeTab === 'system' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#c7d2fe' }}>
                  Paste this into Custom GPT or Project System Instructions:
                </span>
                <button
                  className="btn-secondary"
                  style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
                  onClick={() => handleCopy(initialPrompts.systemPrompt, 'sys')}
                >
                  {copiedKey === 'sys' ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  <span>{copiedKey === 'sys' ? 'Copied!' : 'Copy Prompt'}</span>
                </button>
              </div>
              <div className="code-block">{initialPrompts.systemPrompt}</div>
            </div>
          )}

          {activeTab === 'morning' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#c7d2fe' }}>
                  Scheduled Morning Sweep Prompt (Weekdays 9:00 AM):
                </span>
                <button
                  className="btn-secondary"
                  style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
                  onClick={() => handleCopy(initialPrompts.morningSweepPrompt, 'morn')}
                >
                  {copiedKey === 'morn' ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  <span>{copiedKey === 'morn' ? 'Copied!' : 'Copy Prompt'}</span>
                </button>
              </div>
              <div className="code-block">{initialPrompts.morningSweepPrompt}</div>
            </div>
          )}

          {activeTab === 'afternoon' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#c7d2fe' }}>
                  Scheduled Afternoon Sweep Prompt (Weekdays 2:00 PM):
                </span>
                <button
                  className="btn-secondary"
                  style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}
                  onClick={() => handleCopy(initialPrompts.afternoonSweepPrompt, 'aft')}
                >
                  {copiedKey === 'aft' ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  <span>{copiedKey === 'aft' ? 'Copied!' : 'Copy Prompt'}</span>
                </button>
              </div>
              <div className="code-block">{initialPrompts.afternoonSweepPrompt}</div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
