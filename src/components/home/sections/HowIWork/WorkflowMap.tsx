import { useState, useMemo, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  MarkerType,
  Panel,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import WorkflowNode from './WorkflowNode';
import BandNode from './BandNode';
import { ACTOR, bands, steps, links, type Lane } from '../../../../data/workflow/data';
import './workflow.css';

const NODE_W = 264;

const nodeTypes = { step: WorkflowNode, band: BandNode };

type Filter = 'all' | 'simple' | 'feature';

const laneOf = Object.fromEntries(steps.map((s) => [s.id, s.lane])) as Record<string, Lane>;

const actorHex = (id: string) => {
  const step = steps.find((s) => s.id === id);
  return step ? ACTOR[step.actor].hex : '#6aa5f0';
};

function laneVisible(lane: Lane, filter: Filter) {
  if (filter === 'all') return true;
  if (lane === 'triage' || lane === 'closing' || lane === 'shared') return true;
  return lane === filter;
}

function stepH(s: (typeof steps)[number], showDesc: boolean) {
  let h = 64;
  if (s.title.length > 22) h += 23;
  if (showDesc && s.desc) {
    const lines = Math.max(1, Math.ceil(s.desc.length / 33));
    h += 8 + lines * 18;
  }
  if (s.tags && s.tags.length) h += 12 + 22;
  if (s.kind === 'session') h -= 8;
  if (s.kind === 'milestone') h = showDesc ? 112 : 92;
  return Math.round(h);
}

function buildNodes(filter: Filter, showDesc: boolean): Node[] {
  const bandNodes: Node[] = bands.map((b) => ({
    id: b.id,
    type: 'band',
    position: b.position,
    width: b.style.width,
    height: b.style.height,
    data: { ...b.data },
    draggable: false,
    selectable: false,
    connectable: false,
    zIndex: 0,
    style: { width: b.style.width, height: b.style.height },
  }));

  const stepNodes: Node[] = steps.map((s) => {
    const dim = !laneVisible(s.lane, filter);
    return {
      id: s.id,
      type: 'step',
      position: { x: s.x, y: s.y },
      width: NODE_W,
      height: stepH(s, showDesc),
      style: { width: NODE_W, zIndex: dim ? 4 : 8 },
      data: {
        actor: s.actor,
        kind: s.kind,
        type: s.type,
        title: s.title,
        desc: s.desc,
        tags: s.tags,
        top: s.top,
        bottom: s.bottom,
        loopTarget: s.loopTarget,
        loopSource: s.loopSource,
        compact: !showDesc,
        dim,
      },
    };
  });

  return [...bandNodes, ...stepNodes];
}

function buildEdges(filter: Filter): Edge[] {
  return links.map((e) => {
    const dim = !(
      laneVisible(e.lane, filter) &&
      (e.lane === 'triage' ||
        e.lane === 'closing' ||
        e.lane === 'shared' ||
        laneVisible(laneOf[e.t], filter))
    );
    const color = e.dashed ? '#5d6675' : actorHex(e.s);
    return {
      id: `${e.s}-${e.t}`,
      source: e.s,
      target: e.t,
      sourceHandle: e.sh ?? null,
      targetHandle: e.th ?? null,
      type: 'smoothstep',
      animated: !e.dashed && !dim,
      label: e.label,
      labelShowBg: true,
      labelBgPadding: [6, 3] as [number, number],
      labelBgBorderRadius: 3,
      labelBgStyle: { fill: 'var(--bg)', stroke: 'var(--border)', strokeWidth: 1 },
      labelStyle: {
        fill: 'var(--tx-mute)',
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: 10,
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      },
      style: {
        stroke: color,
        strokeWidth: 2,
        strokeDasharray: e.dashed ? '5 5' : undefined,
        opacity: dim ? 0.12 : 1,
      },
      markerEnd: { type: MarkerType.ArrowClosed, color, width: 16, height: 16 },
      zIndex: 5,
    };
  });
}

function Flow() {
  const [filter, setFilter] = useState<Filter>('all');
  const [showDesc, setShowDesc] = useState(true);

  const initialNodes = useMemo(() => buildNodes('all', true), []);
  const initialEdges = useMemo(() => buildEdges('all'), []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const apply = useCallback(
    (f: Filter, sd: boolean) => {
      setNodes(buildNodes(f, sd));
      setEdges(buildEdges(f));
    },
    [setNodes, setEdges]
  );

  const onFilter = (f: Filter) => {
    setFilter(f);
    apply(f, showDesc);
  };
  const onToggleDesc = () => {
    const v = !showDesc;
    setShowDesc(v);
    apply(filter, v);
  };

  const minimapColor = useCallback((n: Node) => {
    if (n.type === 'band') return 'transparent';
    const s = steps.find((x) => x.id === n.id);
    return s ? ACTOR[s.actor].hex : '#6aa5f0';
  }, []);

  const Seg = ({ id, children }: { id: Filter; children: React.ReactNode }) => (
    <button
      type="button"
      className={'seg' + (filter === id ? ' on' : '')}
      onClick={() => onFilter(id)}
    >
      {children}
    </button>
  );

  return (
    <div className="workflow-map-island">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        minZoom={0.2}
        maxZoom={1.8}
        proOptions={{ hideAttribution: true }}
        defaultEdgeOptions={{ type: 'smoothstep' }}
      >
        <Background variant={'dots' as never} gap={22} size={1.4} color="var(--grid)" />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={minimapColor}
          nodeStrokeWidth={0}
          maskColor="var(--mask)"
          pannable
          zoomable
        />

        <Panel position="top-left">
          <div className="hud-title">
            <div className="hud-eb">AI-ASSISTED DELIVERY · WORKFLOW MAP</div>
            <h1>How I route work between agents, gates &amp; judgement</h1>
            <p>
              From Jira intake to a gated merge — I architect <em>who does what</em>, not just hand
              it all to the model.
            </p>
          </div>
        </Panel>

        <Panel position="top-right">
          <div className="hud-card">
            <div className="hud-row-label">Highlight path</div>
            <div className="seg-group">
              <Seg id="all">All</Seg>
              <Seg id="simple">Simple</Seg>
              <Seg id="feature">Feature</Seg>
            </div>
            <div className="hud-divider"></div>
            <button
              type="button"
              className={'toggle' + (showDesc ? ' on' : '')}
              onClick={onToggleDesc}
            >
              <span className="tg-box"></span> Descriptions
            </button>
          </div>
        </Panel>

        <Panel position="bottom-left">
          <div className="hud-card legend">
            <div className="hud-row-label">Who acts</div>
            {(
              [
                ['agent', 'AI does the work'],
                ['human', 'You decide / review'],
                ['auto', 'CI & tooling'],
              ] as const
            ).map(([a, d]) => (
              <div className="lg-row" key={a}>
                <span className="lg-dot" style={{ background: ACTOR[a].hex }}></span>
                <b>{ACTOR[a].label}</b>
                <span>— {d}</span>
              </div>
            ))}
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default function WorkflowMap() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
