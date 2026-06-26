import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const WhatsAppButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Bottom Left: WhatsApp & Quick Call Widgets */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* Quick Call Button */}
        <a
          href="tel:+919306623619"
          aria-label="Call Direct"
          className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 grid place-items-center shadow-float hover:scale-110 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919306623619?text=Namaste!%20Mujhe%20website%20banwani%20hai."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white grid place-items-center shadow-float hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-6 h-6" fill="currentColor" />
        </a>
      </div>

      {/* Bottom Right: Back To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-slate-900 border border-white/10 text-white grid place-items-center shadow-float hover:bg-slate-800 transition-all active:scale-95 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};
