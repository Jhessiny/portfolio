# GSAP animation plan — portfolio sections

## Context

Adding GSAP to the existing portfolio to demonstrate library experience for a job application. Goal: **identifiably GSAP-shaped** animations across existing sections — things a reviewer scanning source will recognize as GSAP (not generic CSS fades). Five sections get animation; three are primary showcases (each exercising distinct APIs), two are supporting touches.

Aesthetic (must match existing terminal/cyber dark theme):
- Eases: `power3.out` / `expo.out` for entrances, `power2.inOut` for scrubs. Snappy, decisive — not floaty.
- Durations: 0.4–0.7s entrances, 0.3s micro, scroll scrubs tied 1:1 to scroll.
- Staggers: 0.06–0.1s.
- Accent motion color: `#64ffda`.
- All animations must branch on `prefers-reduced-motion` (final state, no motion) and `max-width: 768px` (simplified or disabled where appropriate) via `gsap.matchMedia()`.

---

## 1. Introduction (hero) — primary showcase

**Goal:** Replace the existing `setTimeout`-driven boot sequence with a single `gsap.timeline()` master. Same visual outcome, cleaner choreography, adds SplitText for the signature GSAP signal.

**APIs:** `gsap.timeline`, `SplitText`, `gsap.matchMedia`, custom easing.

**Animation beats (in timeline order):**

1. **Boot terminal typewriter (0 → 1.6s)**
   - Drive `#boot-terminal` text by tweening an index counter from 0 → full length, slicing the source string each tick.
   - Ease: `none` (constant typing cadence).
   - Cursor blink handled by separate yoyo tween on a pseudo-element or span.

2. **Glitch-out of boot overlay (1.6 → 2.0s)**
   - Scale `#boot-overlay` on `scaleY` from 1 → 0.02 → 0 with 3 opacity flickers (0.4 → 0.9 → 0.2 → 0) mid-scale.
   - Ease: `power4.in`.

3. **Frame reveal (2.0 → 2.5s)**
   - Stagger in: `#left-panel`, `#right-panel`, `#split-line`, `.hero-grid`, `#bottom-bar`, `#bottom-bar-line`.
   - `opacity: 0 → 1`, `y: 8 → 0`. Stagger `0.06s`.
   - Ease: `power3.out`.

4. **SplitText headline reveal (2.3 → 3.1s)** — overlaps frame reveal.
   - SplitText on `#ai-text`, `#augmented-text`, `#developer-text` into chars.
   - `opacity: 0, y: 14, rotationX: -40` → final. Stagger `0.025s` per char within each word, `0.2s` gap between words.
   - Ease: `back.out(1.8)` — small overshoot. Snap but not floaty.

5. **Decrypt scramble on `#augmented-text` (3.1 → 3.8s)** — runs after headline reveal settles.
   - Custom GSAP tween that animates a counter and writes scrambled chars to `textContent` each tick, resolving to final text char-by-char left-to-right.
   - Uses `onUpdate` to produce the scramble string. Ease: `power2.out`.

6. **Hero copy slide (3.3 → 3.9s)** — overlaps scramble.
   - `.hero-copy`: `x: 40 → 0`, `opacity: 0 → 1`. Ease: `expo.out`.

7. **Hero copy children stagger (3.5 → 4.2s)**
   - `.hero-stagger` (5 items): `y: 12 → 0`, `opacity: 0 → 1`. Stagger `0.08s`.
   - Ease: `power3.out`.

8. **Avatar settle (3.8 → 4.3s)**
   - `#avatar-image`: `scale: 1.04 → 1`, `opacity: 0 → 1`.
   - Ease: `expo.out`.

9. **Agent badge (4.3 → 4.6s)**
   - `#agent-badge`: `scale: 0.8 → 1`, `opacity: 0 → 1`.
   - Ease: `back.out(2)`.

**matchMedia branches:**
- `(prefers-reduced-motion: reduce)` → skip timeline, set all targets to final state.
- `(max-width: 640px)` → skip boot terminal (it's hidden on mobile anyway), shorten total to ~2s, drop SplitText rotationX.

---

## 2. WorkExperience — primary showcase

**Goal:** Scroll-scrubbed SVG timeline draw. As the user scrolls past the section, a vertical line draws downward through the experience items, dots ignite when the line reaches them, and item content slides in synchronized to scroll position.

**APIs:** `ScrollTrigger.create` with `scrub`, `gsap.timeline`, `stagger`.

**Setup:**
- Convert `.exp-line` from CSS border to inline SVG `<line>` / `<path>`.
- Initial state: `strokeDasharray = length`, `strokeDashoffset = length`.
- Each `.exp-dot`: `scale: 0`, `boxShadow: none`.
- Each `.exp-item` content (`.exp-right`): `x: 24`, `opacity: 0`.
- `.exp-header`: handled separately (see below).

**Scrubbed master timeline (ScrollTrigger: `start: "top 75%"`, `end: "bottom 60%"`, `scrub: 1`):**

1. Line draws: `strokeDashoffset: length → 0`. Ease: `power2.inOut`. Occupies full timeline duration.
2. Dots ignite at positions `0.2`, `0.45`, `0.7`, `0.95` along the timeline. Each:
   - `scale: 0 → 1` (ease: `back.out(2.5)`)
   - `boxShadow: 0 0 0 rgba(100,255,218,0)` → `0 0 12px rgba(100,255,218,0.6)`
3. Item content slides in at positions matching dots (offset `-0.05s` each so it arrives just before the dot lights):
   - `x: 24 → 0`, `opacity: 0 → 1`. Ease: `power3.out`.

**Header (separate, non-scrubbed ScrollTrigger):**
- `.exp-header`: `y: 16 → 0`, `opacity: 0 → 1`. Duration `0.5s`, ease: `power3.out`. `once: true`, `start: "top 80%"`.

**matchMedia branches:**
- `(prefers-reduced-motion: reduce)` → all final state, no scrub.
- `(max-width: 768px)` → replace scrubbed timeline with non-scrubbed entrance: line draws in `1.2s`, dots + items stagger in `once: true`. Scrub on touch feels off.

---

## 3. Projects (carousel) — primary showcase

**Goal:** Two layered enhancements. (A) The existing glitch transition becomes a composed GSAP timeline. (B) The screenshot subtly tracks the cursor via `quickTo`.

**APIs:** `gsap.timeline`, `quickTo`, CSS custom property tweens.

### A. Glitch transition timeline (fires on prev/next)

Replace the current CSS-keyframe glitch with a GSAP timeline. Each "layer" of the glitch is its own tween — composable, reversible, tweakable.

**Out phase (0 → 0.35s):**
- `#proj-rgb` red channel x-offset: `--rgb-x-r: 0 → -14px`. Ease: `power3.in`.
- `#proj-rgb` blue channel x-offset: `--rgb-x-b: 0 → 14px`. Ease: `power3.in`.
- `#proj-screenshot` blur: `0 → 6px`, scale: `1 → 1.04`, opacity: `1 → 0`.
- `#proj-slices` clip-path polygon morph into 3 horizontal slice bands (offset 8px alternating). Ease: `steps(4)` for a digital/stepped feel.
- `#proj-title`, `#proj-stack`, `#proj-url` fade + tiny `x: -6 → 0 → 6` jitter.

**Swap (0.35s — instantaneous):**
- Update `#proj-screenshot` `src`, `#proj-title`, `#proj-stack`, `#proj-url` textContent.

**In phase (0.35 → 0.75s):**
- Reverse all the above with `expo.out` ease — sharper, decisive arrival.
- RGB channels converge back to `0`, slices re-merge, blur → 0, scale → 1, opacity → 1.
- Text elements fade in with a small `y: 4 → 0`.

**Key detail:** the two phases are separate timelines chained with `.then()` or a master timeline — this lets you re-trigger interrupts gracefully if the user clicks next during a transition (kill the in-progress timeline, play a new out).

### B. Cursor parallax on the screenshot

- Create `gsap.quickTo("#proj-screenshot", "x", { duration: 0.4, ease: "power3" })` and same for `y`.
- On `mousemove` within `#carousel-wrapper`: compute normalized cursor position `(-1 to 1)`, multiply by 8 (max ±8px translate), call the `quickTo` functions.
- On `mouseleave`: `quickTo(0, 0)` for both.
- The `--rgb-x-r` and `--rgb-x-b` values should still drive through this layer — they're set on a parent wrapper, not `#proj-screenshot` itself, so they compose.

**matchMedia branches:**
- `(prefers-reduced-motion: reduce)` → swap without glitch (instant crossfade, 0.2s), no parallax.
- `(max-width: 1024px)` → disable cursor parallax (no cursor on touch). Keep glitch transition.

**Header entrance (separate):**
- `.proj-header` and `.proj-row`: simple non-scrubbed ScrollTrigger, `y: 20 → 0`, `opacity: 0 → 1`. `once: true`, ease `power3.out`, stagger `0.08s`.

---

## 4. CaseStudies — supporting touch

**Goal:** Add a scrubbed parallax on each case study card's thumbnail/inner content. The inner content moves slightly slower than the card frame as the card passes through the viewport. Subtle depth, GSAP-identifiable in source via `ScrollTrigger.create({ scrub: 1 })`.

**APIs:** `ScrollTrigger.create` with smoothed scrub, `gsap.utils.toArray`.

**Animation:**
- For each `.cs-card-link`:
  - Inner content (image/thumbnail wrapper): `y: -20 → 20` over card's passage through viewport.
  - `scrub: 1` (1s smoothing — gives a buttery lag, not a stiff 1:1 tie).
  - ScrollTrigger: `start: "top bottom"`, `end: "bottom top"`.

Keep the existing `[data-animate]` entrance reveals untouched — they fire once on scroll-in, the parallax layers on top for the duration of viewport passage.

**matchMedia branches:**
- `(prefers-reduced-motion: reduce)` → skip parallax entirely.
- `(max-width: 768px)` → reduce range to `-10 → 10` (small screens = less travel needed).

---

## 5. SkillsAndResume — supporting touch

**Goal:** Convert the language proficiency bars from CSS `transition: width` on `.in-view` to **scroll-scrubbed width fills**. Bars fill live as the user scrolls the section into view. Optional magnetic hover on skill pills using `quickTo`.

**APIs:** `ScrollTrigger.create` with scrub on `width`, `quickTo` (optional).

### Scrubbed language bars

- For each `.sr-lang__fill`:
  - Tween `width: 0% → targetPercent%` (target lives on the element as a CSS var or data attribute).
  - ScrollTrigger: `start: "top 85%"`, `end: "top 50%"`, `scrub: 0.5`.
  - Ease: `power2.out` (applied within the tween; scrub respects it).

### Optional: magnetic pill hover

- For each `[data-sr-pill]`:
  - Create `quickTo` for `x` and `y`, duration `0.3s`, ease `power3`.
  - On `mouseenter`: compute cursor position relative to pill center, translate pill by `(cursorDelta * 0.25)` capped at ±4px.
  - On `mouseleave`: `quickTo(0, 0)`.
- Small effect, strong GSAP signal via `quickTo` in source.

**matchMedia branches:**
- `(prefers-reduced-motion: reduce)` → bars at final width instantly, no pill magnetism.
- `(max-width: 1024px)` → no pill magnetism (no cursor). Scrubbed bars OK on mobile.

---

## API coverage summary

What a reviewer grepping the source will find after implementation:

| API | Section(s) |
|---|---|
| `gsap.timeline` | Introduction, Projects |
| `gsap.matchMedia` | all 5 sections |
| `SplitText` | Introduction |
| `ScrollTrigger.create` (non-scrub) | WorkExperience header, Projects header |
| `ScrollTrigger.create` (scrub) | WorkExperience, CaseStudies, SkillsAndResume |
| `quickTo` | Projects, SkillsAndResume |
| `stagger` | Introduction, WorkExperience, Projects |
| Custom `onUpdate` tweens | Introduction (typewriter, scramble) |

Six distinct APIs, three primary showcases, two supporting touches. Enough surface area to substantiate real GSAP experience in an interview follow-up.

---

## Things to verify while building

- Hero timeline looks visually identical or sharper than the current setTimeout version (don't regress).
- WorkExperience scrub feels synchronized (line never "arrives late" behind dots igniting — tune position offsets).
- Projects glitch feels intentional, not broken — the RGB split should be subtle, not chromatic-aberration-tacky.
- `prefers-reduced-motion` properly kills everything. Test via DevTools Rendering panel.
- Mobile (375×667): no scrubs on WorkExperience, no cursor parallax anywhere, hero stays snappy.
- Fonts loading: call `ScrollTrigger.refresh()` in `document.fonts.ready` — Google Fonts shift layout and mess up trigger positions.
