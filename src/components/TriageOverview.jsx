import React from 'react';
import { Mail, AlertCircle, FileEdit, CheckCircle2, ShieldAlert, Sparkles, Filter } from 'lucide-react';

export default function TriageOverview({
  emails,
  activeFilter,
  onSelectFilter,
  pendingCount,
  approvedCount,
  filteredCount
}) {
  const urgentCount = emails.filter(e => e.urgency === 'urgent' && e.status === 'pending_review').length;

  return (
    <div>
      {/* Metrics Strip */}
      <div className="metrics-strip">
        <div className="metric-card">
          <div className="metric-icon-box purple">
            <Mail size={22} />
          </div>
          <div className="metric-data">
            <div className="metric-value">{emails.length}</div>
            <div className="metric-label">Emails Ingested</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box amber">
            <AlertCircle size={22} />
          </div>
          <div className="metric-data">
            <div className="metric-value">{pendingCount}</div>
            <div className="metric-label">Needs Reply (Drafts Ready)</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box crimson">
            <ShieldAlert size={22} />
          </div>
          <div className="metric-data">
            <div className="metric-value">{urgentCount}</div>
            <div className="metric-label">Urgent Bottlenecks</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon-box emerald">
            <CheckCircle2 size={22} />
          </div>
          <div className="metric-data">
            <div className="metric-value">{approvedCount}</div>
            <div className="metric-label">Human Approved & Staged</div>
          </div>
        </div>
      </div>
    </div>
  );
}
