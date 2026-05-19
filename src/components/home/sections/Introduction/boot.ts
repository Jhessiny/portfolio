const hero = document.getElementById('home')!;
const rightPanel = document.getElementById('right-panel')!;
const splitLine = document.getElementById('split-line')!;

hero.addEventListener('mousemove', (e) => {
  const half = window.innerWidth / 2;
  if (e.clientX > half) {
    // Hovering right side — overlay covers entire image
    rightPanel.style.width = '100%';
    splitLine.style.opacity = '0';
  } else {
    // Hovering left side — back to normal
    rightPanel.style.width = '50%';
    splitLine.style.opacity = '1';
  }
});

hero.addEventListener('mouseleave', () => {
  rightPanel.style.width = '50%';
  splitLine.style.opacity = '1';
});

// ── 0. BOOT SEQUENCE ─────────────────────────────────
const bootOverlay = document.getElementById('boot-overlay')!;
const bootTerminal = document.getElementById('boot-terminal')!;
const bootCursor = document.getElementById('boot-cursor')!;
const avatarImg = document.getElementById('avatar-image')!;
const leftPanel = document.getElementById('left-panel')!;
const bottomBar = document.getElementById('bottom-bar')!;
const bottomBarLine = document.getElementById('bottom-bar-line')!;
const heroCopy = document.querySelector('.hero-copy') as HTMLElement;
const heroGrid = document.querySelector('.hero-grid') as HTMLElement;

const BOOT_LINES = [
  '> SYSTEM INIT...',
  '> LOADING PROFILE_',
  '> RESOLVING ASSETS [████████░░] 80%',
  '> RESOLVING ASSETS [██████████] 100%',
  '> RENDER COMPLETE_',
];

function typeLineChars(container: HTMLElement, line: string, charDelay: number): Promise<void> {
  return new Promise((resolve) => {
    let i = 0;
    const span = document.createElement('span');
    container.insertBefore(span, bootCursor);
    const interval = setInterval(() => {
      span.textContent += line[i];
      i++;
      if (i >= line.length) {
        clearInterval(interval);
        resolve();
      }
    }, charDelay);
  });
}

function delay(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

// ── Phase 2: Block Glitch ──
const GLITCH_COLORS = ['#64ffda', '#00d4ff', '#a855f7', '#7c3aed', '#3b82f6', '#c084fc', '#22d3ee', '#ffffff', '#e0f2fe', '#6b7280', '#9ca3af', '#4b5563', '#374151'];

function createGlitchBlocks(): HTMLElement[] {
  const blocks: HTMLElement[] = [];
  const columnCount = 8 + Math.floor(Math.random() * 5); // 8-12 columns
  for (let i = 0; i < columnCount; i++) {
    // Each column is a full-height container with stacked color segments
    const column = document.createElement('div');
    column.className = 'glitch-block';
    const w = 30 + Math.random() * 120;
    column.style.width = `${w}px`;
    column.style.height = '100%';
    column.style.left = `${Math.random() * 100}%`;
    column.style.top = '0';
    column.style.display = 'flex';
    column.style.flexDirection = 'column';
    column.style.transform = `translateX(${(Math.random() - 0.5) * 60}px)`;
    column.style.opacity = String(0.6 + Math.random() * 0.4);

    // Fill column with 6-14 segments of random heights and colors
    const segCount = 6 + Math.floor(Math.random() * 9);
    for (let s = 0; s < segCount; s++) {
      const seg = document.createElement('div');
      seg.style.flex = String(0.5 + Math.random() * 3); // random height ratio
      seg.style.background = GLITCH_COLORS[Math.floor(Math.random() * GLITCH_COLORS.length)];
      column.appendChild(seg);
    }

    bootOverlay.appendChild(column);
    blocks.push(column);
  }
  return blocks;
}

function removeGlitchBlocks(blocks: HTMLElement[]) {
  blocks.forEach((b) => b.remove());
}

async function runGlitchEffect() {
  // Hide terminal text during glitch
  bootTerminal.style.display = 'none';

  for (let cycle = 0; cycle < 5; cycle++) {
    const blocks = createGlitchBlocks();
    await delay(70 + Math.random() * 30);
    removeGlitchBlocks(blocks);
    await delay(30 + Math.random() * 20);
  }
}

// ── Phase 4: UI Reveal ──
function revealUI() {
  rightPanel.style.opacity = '1';
  rightPanel.style.transform = 'translateX(0)';
  leftPanel.style.opacity = '1';
  heroCopy.style.opacity = '1';
  heroCopy.style.transform = 'translateX(0) translateY(-50%)';
  splitLine.style.opacity = '1';
  heroGrid.style.opacity = '1';
  bottomBar.style.opacity = '1';
  bottomBarLine.style.opacity = '1';
}

// ── Master Sequence ──
async function runBootSequence() {
  // Phase 1: type terminal lines
  for (let l = 0; l < BOOT_LINES.length; l++) {
    const line = BOOT_LINES[l];
    const charDelay = Math.floor(450 / line.length);
    await typeLineChars(bootTerminal, line, charDelay);
    if (l < BOOT_LINES.length - 1) {
      const br = document.createElement('br');
      bootTerminal.insertBefore(br, bootCursor);
      await delay(200);
    }
  }
  await delay(300);

  // Phase 2: block glitch
  await runGlitchEffect();
  bootOverlay.style.display = 'none';

  // Phase 3: avatar fade-in
  avatarImg.style.opacity = '1';
  await delay(200);

  // Phase 4: UI slide-in (overlaps with avatar fade tail)
  revealUI();
  await delay(700);

  // Phase 5: stagger hero copy children in
  const staggerEls = heroCopy.querySelectorAll<HTMLElement>('.hero-stagger');
  for (let i = 0; i < staggerEls.length; i++) {
    staggerEls[i].style.opacity = '1';
    staggerEls[i].style.transform = 'translateY(0)';
    await delay(150);
  }

  // Phase 6: show AUGMENTED and run decrypt
  augEl.style.opacity = '1';
  await runDecryptAsync();

  // Phase 7: reveal AI and DEVELOPER
  const aiEl = document.getElementById('ai-text')!;
  const devEl = document.getElementById('developer-text')!;
  aiEl.style.opacity = '1';
  devEl.style.opacity = '1';

  // Phase 8: show agent badge
  const agentBadge = document.getElementById('agent-badge');
  if (agentBadge) agentBadge.style.opacity = '1';

  // Phase 9: existing hero animations (available tag)
  startHeroAnimations();
}

// ── 1. AUGMENTED Decrypt ──────────────────────────────
const augEl = document.getElementById('augmented-text')!;
const h1El = augEl.closest('h1')!;
const TARGET = 'AUGMENTED';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

// Measure the final width and lock it so decrypt chars don't cause reflow
augEl.style.display = 'inline-block';
augEl.style.minWidth = `${augEl.offsetWidth}px`;

let decryptInterval: ReturnType<typeof setInterval> | null = null;

function runDecrypt(onComplete?: () => void) {
  if (decryptInterval) clearInterval(decryptInterval);
  let iter = 0;
  decryptInterval = setInterval(() => {
    augEl.innerHTML = TARGET.split('').map((ch, i) => {
      const c = i < iter ? ch : CHARS[Math.floor(Math.random() * CHARS.length)];
      return `<span style="display:inline-block;width:1ch;text-align:center;letter-spacing:0">${c}</span>`;
    }).join('');
    iter += 0.35;
    if (iter >= 9) {
      augEl.innerHTML = TARGET.split('').map((ch) =>
        `<span style="display:inline-block;width:1ch;text-align:center;letter-spacing:0">${ch}</span>`
      ).join('');
      clearInterval(decryptInterval!);
      decryptInterval = null;
      onComplete?.();
    }
  }, 38);
}

function runDecryptAsync(): Promise<void> {
  return new Promise((resolve) => runDecrypt(resolve));
}

// Fire again on h1 mouseenter
h1El.addEventListener('mouseenter', runDecrypt);

// ── 2. Available Tag Sequence ─────────────────────────
const tag = document.getElementById('available-tag')!;
const dot = document.getElementById('available-dot')!;
const text = document.getElementById('available-text')!;

const sequence: [string, number][] = [
  ['SCANNING_.', 800],
  ['SCANNING_..', 1120],
  ['SCANNING_...', 1440],
  ['MATCH FOUND_', 1850],
  ['Available', 2450],
];

function startHeroAnimations() {
  sequence.forEach(([status, seqDelay]) => {
    setTimeout(() => {
      const display = status.replace('_', '');
      text.textContent = display;

      if (status.startsWith('SCANNING')) {
        tag.className = 'tag tag-scanning flex items-center gap-[7px]';
        dot.className = 'w-[5px] h-[5px] rounded-full inline-block dot-blink';
      } else if (status.startsWith('MATCH')) {
        tag.className = 'tag tag-found flex items-center gap-[7px]';
        dot.className = 'w-[5px] h-[5px] rounded-full inline-block dot-found';
      } else {
        tag.className = 'tag tag-available flex items-center gap-[7px]';
        dot.className = 'w-[5px] h-[5px] rounded-full inline-block dot-pulse';
      }
    }, seqDelay);
  });
}

// Kick off boot
runBootSequence();
