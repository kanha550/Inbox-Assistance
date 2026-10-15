import React from 'react';
import { ShieldCheck, CheckCircle2, AlertOctagon, X, Sparkles, Lock } from 'lucide-react';
import { initialPrompts } from '../data/initialPrompts';

export default function SafetyChecklistModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-card animate-slide-up" style={{ maxWidth: '640px' }} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <ShieldCheck size={20} style={{ color: '#34d399' }} />
            <span>Human-In-The-Loop Safety & Review Rubric</span>
          </div>
          <button onClick={onClose} style={{ color: '#94a3b8' }}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <Lock size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: '0.825rem', color: '#a7f3d0' }}>
              <strong>The Golden Rule: Never Auto-Send.</strong> An AI inbox assistant is only as safe as its review checkpoint. ChatGPT prepares the draft, but you retain final sign-off before anything leaves under your name.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#f8fafc', fontWeight: 700 }}>
              The 4-Point Judgment Rubric:
            </h4>

            {initialPrompts.judgeRubric.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '0.85rem 1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.85rem', color: '#e0e7ff', marginBottom: '0.25rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#818cf8' }} />
                  {item.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', paddingLeft: '1.5rem' }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '8px', padding: '0.85rem 1rem', display: 'flex', gap: '0.65rem' }}>
            <AlertOctagon size={18} style={{ color: '#f87171', flexShrink: 0 }} />
            <div style={{ fontSize: '0.775rem', color: '#fca5a5' }}>
              <strong>Edge Cases to Watch:</strong> Legal disclaimers, fee negotiations, emotional conflicts, or refund commitments should always be written or thoroughly vetted by a human.
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
