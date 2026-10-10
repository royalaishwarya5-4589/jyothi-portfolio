
import { Suspense } from "react";

import CursorBloom from "@/components/CursorBloom";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TransitionBridge from "@/components/TransitionBridge";
import Identity from "@/components/Identity";
import FirstMove from "@/components/FirstMove";
import Engineering from "@/components/Engineering";
import Experiments from "@/components/Experiments";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

function SectionFallback() {
  return <div aria-hidden="true" />;
}

export default function Home() {
  return (
    <Suspense fallback={<SectionFallback />}>
      <SmoothScroll>
        <div className="noise-overlay" aria-hidden="true" />

        <Suspense fallback={<SectionFallback />}>
          <CursorBloom />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Nav />
        </Suspense>

        <main id="main-content">
          <Suspense fallback={<SectionFallback />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <TransitionBridge />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Identity />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <FirstMove />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Engineering />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Experiments />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Journey />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </SmoothScroll>
    </Suspense>
  );
}
