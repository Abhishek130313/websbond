import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { SocialSidebar } from "./SocialSidebar";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col" style={{ background: "#fff", color: "#0a0b13" }}>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[300] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:outline-none">
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content" className="flex-1" role="main">{children}</main>
    <Footer />
    <WhatsAppButton />
    <SocialSidebar />
  </div>
);
