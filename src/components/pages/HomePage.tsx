import { YcHero } from "../yc/YcHero";
import { YcHook } from "../yc/YcHook";
import { YcSolution } from "../yc/YcSolution";
import { YcLoop } from "../yc/YcLoop";
import { YcNotSaas } from "../yc/YcNotSaas";
import { YcGoals } from "../yc/YcGoals";
import { YcValue } from "../yc/YcValue";
import { YcSignals } from "../yc/YcSignals";
import { YcProof } from "../yc/YcProof";
import { YcCta } from "../yc/YcCta";

export default function HomePage() {
  return (
    <>
      {/* 1. THE CRISIS — daily pain, AI brain fry, cognitive stats */}
      <YcHero />
      {/* 2. THE HOOK — it's not you, it's the architecture */}
      <YcHook />
      {/* 3. THE SOLUTION — Unified Intelligence Layer, Quadrant Living */}
      <YcSolution />
      {/* 4. THE COGNITIVE LOOP — Think → Act → Govern → Adjust → Redo → Repeat → L00p */}
      <YcLoop />
      {/* 5. WHAT WE ARE NOT — not migration, not integration, not SaaS, not AI chat */}
      <YcNotSaas />
      {/* 6. GOALS-DRIVEN — every feature from goals/milestones/metrics, L00p health */}
      <YcGoals />
      {/* 7. UNIVERSAL VALUE — same Unified Intelligence Layer, your walk of life */}
      <YcValue />
      {/* 8. SPINE SIGNALS — Before (Blind) → Signal → Outcome */}
      <YcSignals />
      {/* 9. PROOF — $8M Red Account + Founder story */}
      <YcProof />
      {/* 10. CTA — "Stop being the bridge. Start being the architect." */}
      <YcCta />
    </>
  );
}
