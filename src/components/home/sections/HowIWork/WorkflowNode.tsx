import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { CSSProperties } from 'react';
import type { ActorId, StepKind } from '../../../../data/workflow/data';

interface StepNodeData {
  actor: ActorId;
  kind: StepKind;
  type: string;
  title: string;
  desc?: string;
  tags?: string[];
  top?: boolean;
  bottom?: boolean;
  loopTarget?: boolean;
  loopSource?: boolean;
  compact?: boolean;
  dim?: boolean;
}

const HANDLE: CSSProperties = {
  width: 7,
  height: 7,
  background: 'var(--ac)',
  border: '2px solid var(--bg)',
  borderRadius: '50%',
};
const HANDLE_OFF: CSSProperties = { ...HANDLE, opacity: 0 };

function Icon({ name }: { name: 'shield' | 'merge' | 'bolt' | 'flag' }) {
  const p = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (name === 'shield')
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" {...p}>
        <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  if (name === 'merge')
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" {...p}>
        <g>
          <circle cx="7" cy="6" r="2.4" />
          <circle cx="7" cy="18" r="2.4" />
          <circle cx="17" cy="9" r="2.4" />
          <path d="M7 8.4v7.2M7 12h4a4 4 0 0 0 4-2.4" />
        </g>
      </svg>
    );
  if (name === 'bolt')
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" {...p}>
        <path d="M13 3L5 13h6l-1 8 8-11h-6z" />
      </svg>
    );
  if (name === 'flag')
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" {...p}>
        <path d="M5 21V4M5 5h12l-2 3 2 3H5" />
      </svg>
    );
  return null;
}

export default function WorkflowNode({ data, selected }: NodeProps) {
  const d = data as unknown as StepNodeData;
  const k = d.kind;
  const cls = [
    'rfn',
    `k-${k}`,
    `a-${d.actor}`,
    selected ? 'is-sel' : '',
    d.dim ? 'is-dim' : '',
  ]
    .filter(Boolean)
    .join(' ');

  let icon: 'shield' | 'merge' | null = null;
  if (k === 'gate') icon = 'shield';
  else if (k === 'milestone') icon = 'merge';

  return (
    <div className={cls}>
      {d.top !== false && <Handle type="target" position={Position.Top} style={HANDLE} />}
      {d.loopTarget && (
        <Handle id="loop" type="target" position={Position.Left} style={HANDLE} />
      )}

      <div className="rfn-bar"></div>
      <div className="rfn-in">
        <div className="rfn-eb">
          {icon && (
            <span className="rfn-ic">
              <Icon name={icon} />
            </span>
          )}
          <span className="rfn-dot"></span>
          <span>{d.type}</span>
        </div>
        <div className="rfn-title">{d.title}</div>
        {d.desc && !d.compact && <p className="rfn-desc">{d.desc}</p>}
        {d.tags && d.tags.length > 0 && (
          <div className="rfn-tags">
            {d.tags.map((t) => (
              <span className="rfn-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {d.bottom !== false && (
        <Handle type="source" position={Position.Bottom} style={HANDLE} />
      )}
      {d.loopSource && (
        <Handle id="loop" type="source" position={Position.Left} style={HANDLE_OFF} />
      )}
    </div>
  );
}
