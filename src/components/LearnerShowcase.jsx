import React from 'react';
import { Users, X, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { learnerProfiles } from '../data/learnerProfiles';

export default function LearnerShowcase({ isOpen, onClose, onSelectProfile }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-card animate-slide-up" style={{ maxWidth: '850px' }} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <Users size={20} style={{ color: '#38bdf8' }} />
            <span>Examples from Other Learners (Real-World Blueprints)</span>
          </div>
          <button onClick={onClose} style={{ color: '#94a3b8' }}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            See how different professionals customize their triage criteria, tone guardrails, and scheduled sweeps. Click <strong>Apply Preset</strong> to test their rules on incoming emails!
          </p>

          <div className="learner-grid">
            {learnerProfiles.map(profile => (
              <div key={profile.id} className="learner-card">
                <div className="learner-header">
                  <img src={profile.avatar} alt={profile.name} className="learner-avatar" />
                  <div>
                    <div className="learner-name">{profile.name}</div>
                    <div className="learner-role">{profile.role}</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', color: '#c7d2fe', fontWeight: 600 }}>
                  "{profile.tagline}"
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ fontSize: '0.725rem', color: '#94a3b8' }}>
                    <strong>Schedule:</strong> {profile.schedule}
                  </div>
                  <div style={{ fontSize: '0.725rem', color: '#10b981' }}>
                    <strong>Saved:</strong> {profile.weeklyTimeSaved}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.2rem' }}>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>CUSTOM RULES:</div>
                  {profile.specialRules.slice(0, 2).map((rule, idx) => (
                    <div key={idx} className="learner-rule-chip">
                      • {rule}
                    </div>
                  ))}
                </div>

                <button
                  className="btn-secondary"
                  style={{ marginTop: 'auto', justifyContent: 'center', fontSize: '0.775rem' }}
                  onClick={() => {
                    onSelectProfile(profile);
                    onClose();
                  }}
                >
                  <span>Apply This Preset</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
