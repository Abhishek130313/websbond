import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

/* Fixed right-side social media icons exactly like reference site */
export const SocialSidebar = () => (
  <div
    className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 hidden md:flex"
  >
    <a
      href="https://facebook.com/websbond"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="w-11 h-11 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:opacity-90"
      style={{ background: "#1877F2", borderRadius: "50% 0 0 50%" }}
    >
      <Facebook className="w-5 h-5" fill="white" />
    </a>
    <a
      href="https://instagram.com/websbond"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="w-11 h-11 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:opacity-90"
      style={{
        background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
        borderRadius: "50% 0 0 50%"
      }}
    >
      <Instagram className="w-5 h-5" />
    </a>
    <a
      href="https://linkedin.com/company/websbond"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="w-11 h-11 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:opacity-90"
      style={{ background: "#0A66C2", borderRadius: "50% 0 0 50%" }}
    >
      <Linkedin className="w-5 h-5" fill="white" />
    </a>
    <a
      href="https://youtube.com/@websbond"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="w-11 h-11 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:opacity-90"
      style={{ background: "#FF0000", borderRadius: "50% 0 0 50%" }}
    >
      <Youtube className="w-5 h-5" fill="white" />
    </a>
  </div>
);
