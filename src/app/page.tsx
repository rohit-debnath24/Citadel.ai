import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import FloatingSidebar from "@/components/FloatingSidebar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import SecurityLayers from "@/components/SecurityLayers";
import AINativeBenefits from "@/components/AINativeBenefits";
import TechStack from "@/components/TechStack";
import MCPValidation from "@/components/MCPValidation";
import CommunityHub from "@/components/CommunityHub";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafcfd] selection:bg-orange-500/30 font-sans relative overflow-hidden">
      {/* Sweet Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Subtle grid */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-80"></div>
         {/* Ambient glowing orbs */}
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#ffbd2e]/10 blur-[120px]"></div>
         <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#ea580c]/5 blur-[100px]"></div>
         <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[40%] rounded-full bg-blue-400/5 blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <TopBanner />
        <Navbar />
        <FloatingSidebar />
        <Hero />
        <FeaturesSection />
        <SecurityLayers />
        <AINativeBenefits />
        <TechStack />
        <MCPValidation />
        <CommunityHub />
        <BottomCTA />
        <Footer />
      </div>
    </main>
  );
}

