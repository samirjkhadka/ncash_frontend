import { useEffect, useState } from "react";

import { Download } from "../components/Download";

import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

import { RuralImpact } from "../components/RuralImpact";
import { Services } from "../components/Services";
import { LoadingScreen } from "../components/LoadingScreen";
import { ComingSoonBanner } from "../components/ComingSoonBanner";
import { Navbar } from "../components/Navbar";
import { FAQ } from "../components/FAQ";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  });
  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      <div className="min-h-screen bg-background">
        <ComingSoonBanner />
        <Navbar />
        <Hero />
        <Services />
        <Features />
        <RuralImpact />

        <FAQ />
        <Download />
        <Footer />
      </div>
    </>
  );
};

export default Index;
