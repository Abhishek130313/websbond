import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col" style={{ background: "#fff", color: "#0a0b13" }}>
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);
