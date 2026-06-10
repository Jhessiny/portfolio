import type { NodeProps } from '@xyflow/react';

interface BandNodeData {
  idx: string;
  label: string;
  sub: string;
}

export default function BandNode({ data }: NodeProps) {
  const d = data as unknown as BandNodeData;
  return (
    <div className="rfband">
      <div className="rfband-rail">
        <span className="rfband-idx">{d.idx}</span>
        <span className="rfband-label">{d.label}</span>
        <span className="rfband-sub">{d.sub}</span>
      </div>
    </div>
  );
}
