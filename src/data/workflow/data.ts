// Node + edge model for the AI-assisted delivery pipeline (top-down).
// Ported verbatim from flow/data.js — colors/markers wired from ACTOR.

export type ActorId = 'agent' | 'human' | 'auto';

export interface ActorMeta {
  hex: string;
  label: string;
}

export const ACTOR: Record<ActorId, ActorMeta> = {
  agent: { hex: '#5fd4a0', label: 'AGENT' }, // AI does the work
  human: { hex: '#f0a948', label: 'HUMAN' }, // you decide / review
  auto: { hex: '#6aa5f0', label: 'AUTOMATED' }, // CI / tooling
};

// column anchors (x = top-left of a 264px-wide node)
const C = 372;
const L = 56;
const R = 688;

export type Lane = 'triage' | 'simple' | 'feature' | 'shared' | 'closing';

export interface BandData {
  idx: string;
  label: string;
  sub: string;
}

export interface BandModel {
  id: string;
  type: 'band';
  position: { x: number; y: number };
  data: BandData;
  style: { width: number; height: number };
}

export const bands: BandModel[] = [
  {
    id: 'b-triage',
    type: 'band',
    position: { x: -64, y: -52 },
    data: { idx: '01', label: 'TRIAGE', sub: 'Intake & routing' },
    style: { width: 1108, height: 612 },
  },
  {
    id: 'b-exec',
    type: 'band',
    position: { x: -64, y: 588 },
    data: { idx: '02', label: 'EXECUTION', sub: 'Two paths, by complexity' },
    style: { width: 1108, height: 980 },
  },
  {
    id: 'b-close',
    type: 'band',
    position: { x: -64, y: 1592 },
    data: { idx: '03', label: 'CLOSING', sub: 'Merge, teardown & capture' },
    style: { width: 1108, height: 470 },
  },
];

export type StepKind =
  | 'intake'
  | 'step'
  | 'prioritized'
  | 'gate'
  | 'milestone'
  | 'output'
  | 'session';

export interface StepModel {
  id: string;
  actor: ActorId;
  kind: StepKind;
  lane: Lane;
  x: number;
  y: number;
  title: string;
  type: string;
  desc: string;
  tags?: string[];
  top?: boolean;
  bottom?: boolean;
  loopTarget?: boolean;
  loopSource?: boolean;
}

export const steps: StepModel[] = [
  // TRIAGE (single center column)
  {
    id: 'intake',
    actor: 'auto',
    kind: 'intake',
    lane: 'triage',
    x: C,
    y: 8,
    title: 'Pull from Jira',
    type: 'AUTOMATED',
    desc: 'Dev-ready tickets flow into the queue.',
    tags: ['jira API'],
    top: false,
  },
  {
    id: 'handoff',
    actor: 'agent',
    kind: 'step',
    lane: 'triage',
    x: C,
    y: 156,
    title: 'Read session-handoff.md',
    type: 'AGENT',
    desc: 'Restore full context per active worktree.',
    tags: ['worktree'],
    loopTarget: true,
  },
  {
    id: 'classify',
    actor: 'agent',
    kind: 'step',
    lane: 'triage',
    x: C,
    y: 304,
    title: 'Classify complexity',
    type: 'AGENT',
    desc: 'Route each ticket — simple vs. intermediate.',
  },
  {
    id: 'prioritized',
    actor: 'agent',
    kind: 'prioritized',
    lane: 'triage',
    x: C,
    y: 452,
    title: 'Prioritized queue',
    type: 'SYSTEM',
    desc: 'Ordered & ready — fork by complexity.',
  },

  // SIMPLE lane (left)
  {
    id: 's1',
    actor: 'human',
    kind: 'step',
    lane: 'simple',
    x: L,
    y: 636,
    title: 'Scope the change',
    type: 'HUMAN',
    desc: 'Quick alignment on intent and approach.',
  },
  {
    id: 's2',
    actor: 'agent',
    kind: 'step',
    lane: 'simple',
    x: L,
    y: 804,
    title: 'Implement → PR',
    type: 'AGENT',
    desc: 'Agent codes the change and opens a pull request.',
  },

  // FEATURE lane (right)
  {
    id: 'f1',
    actor: 'human',
    kind: 'step',
    lane: 'feature',
    x: R,
    y: 636,
    title: 'Template + system design',
    type: 'HUMAN',
    desc: 'You architect the approach before any code.',
  },
  {
    id: 'f2',
    actor: 'agent',
    kind: 'step',
    lane: 'feature',
    x: R,
    y: 804,
    title: 'Taskify → isolated worktree',
    type: 'AGENT',
    desc: 'Break into tasks; spin up a clean worktree.',
    tags: ['git worktree'],
  },
  {
    id: 'f3',
    actor: 'agent',
    kind: 'step',
    lane: 'feature',
    x: R,
    y: 972,
    title: 'Sub-agents per phase',
    type: 'AGENT',
    desc: 'Phase-scoped agents write code against AC tests.',
    tags: ['sub-agents', 'AC tests'],
  },
  {
    id: 'f4',
    actor: 'agent',
    kind: 'step',
    lane: 'feature',
    x: R,
    y: 1140,
    title: 'Agent review → manual validation',
    type: 'AGENT',
    desc: 'Self-review pass, then you sanity-check.',
  },
  {
    id: 'f5',
    actor: 'human',
    kind: 'step',
    lane: 'feature',
    x: R,
    y: 1308,
    title: 'Human review',
    type: 'HUMAN',
    desc: 'Final read before anything can merge.',
  },

  // GATE (shared convergence)
  {
    id: 'gate',
    actor: 'auto',
    kind: 'gate',
    lane: 'shared',
    x: C,
    y: 1380,
    title: 'Guard rails CI',
    type: 'AUTOMATED GATE',
    desc: 'Any PR that regresses a metric gets automatic feedback — before it reaches human review.',
    tags: ['jscpd', 'eslint-plugin-sonarjs', 'knip'],
  },

  // MERGE milestone
  {
    id: 'merge',
    actor: 'human',
    kind: 'milestone',
    lane: 'shared',
    x: C,
    y: 1504,
    title: 'Merge to main',
    type: 'MILESTONE',
    desc: 'Gated, reviewed, green.',
  },

  // CLOSING
  {
    id: 'done',
    actor: 'auto',
    kind: 'output',
    lane: 'closing',
    x: L,
    y: 1648,
    title: 'Done',
    type: 'AUTOMATED',
    desc: 'Remove handoff + tear down the worktree.',
    bottom: false,
  },
  {
    id: 'inprog',
    actor: 'agent',
    kind: 'output',
    lane: 'closing',
    x: C,
    y: 1648,
    title: 'Still in progress',
    type: 'AGENT',
    desc: 'Write session-handoff.md for the next run.',
    loopSource: true,
    bottom: false,
  },
  {
    id: 'vault',
    actor: 'agent',
    kind: 'session',
    lane: 'closing',
    x: R,
    y: 1632,
    title: 'Vault Session',
    type: 'SESSION',
    desc: 'Capture the key decisions.',
  },
  {
    id: 'wrapup',
    actor: 'agent',
    kind: 'session',
    lane: 'closing',
    x: R,
    y: 1760,
    title: 'Wrap-Up Session',
    type: 'SESSION',
    desc: 'Process improvements.',
  },
  {
    id: 'learn',
    actor: 'agent',
    kind: 'session',
    lane: 'closing',
    x: R,
    y: 1888,
    title: 'Learnings',
    type: 'SESSION',
    desc: 'Technical takeaways.',
    bottom: false,
  },
];

export interface LinkModel {
  s: string;
  t: string;
  lane: Lane;
  label?: string;
  sh?: string;
  th?: string;
  dashed?: boolean;
}

export const links: LinkModel[] = [
  // triage chain
  { s: 'intake', t: 'handoff', lane: 'triage' },
  { s: 'handoff', t: 'classify', lane: 'triage' },
  { s: 'classify', t: 'prioritized', lane: 'triage' },
  // fork
  { s: 'prioritized', t: 's1', lane: 'simple', label: 'simple' },
  { s: 'prioritized', t: 'f1', lane: 'feature', label: 'intermediate / feature' },
  // simple lane
  { s: 's1', t: 's2', lane: 'simple' },
  { s: 's2', t: 'gate', lane: 'simple' },
  // feature lane
  { s: 'f1', t: 'f2', lane: 'feature' },
  { s: 'f2', t: 'f3', lane: 'feature' },
  { s: 'f3', t: 'f4', lane: 'feature' },
  { s: 'f4', t: 'f5', lane: 'feature' },
  { s: 'f5', t: 'gate', lane: 'feature' },
  // converge → merge
  { s: 'gate', t: 'merge', lane: 'shared' },
  // closing fan-out
  { s: 'merge', t: 'done', lane: 'closing' },
  { s: 'merge', t: 'inprog', lane: 'closing' },
  { s: 'merge', t: 'vault', lane: 'closing' },
  { s: 'vault', t: 'wrapup', lane: 'closing' },
  { s: 'wrapup', t: 'learn', lane: 'closing' },
  // feedback loop
  { s: 'inprog', t: 'handoff', lane: 'triage', sh: 'loop', th: 'loop', dashed: true, label: 'next run' },
];
