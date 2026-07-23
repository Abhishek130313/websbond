import { Send, PhoneCall } from "lucide-react";

export const MidCtaBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-950 via-indigo-950 to-purple-900 text-white select-none relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center text-center lg:text-left">

          {/* Left Text & Dual Capsule Buttons */}
          <div className="lg:col-span-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 block mb-3">
              ✦ Ready to Scale Your Revenue?
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-jost mb-6">
              Is Your Business Ready to{" "}
              <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-white bg-clip-text text-transparent">
                Grow with Strategic Web Design and Digital Marketing?
              </span>
            </h2>

            {/* Dual Capsule Buttons (Video 00:38) */}
            <div className="inline-flex flex-col sm:flex-row items-center p-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <button
                onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs sm:text-sm transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Request Proposal</span>
              </button>

              <span className="w-8 h-8 rounded-full bg-white text-purple-950 font-black text-[11px] flex items-center justify-center my-2 sm:my-0 sm:mx-2 shrink-0">
                OR
              </span>

              <a
                href="tel:+919306623619"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-purple-950 hover:bg-purple-50 font-extrabold text-xs sm:text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-purple-900" />
                <span>Contact Now</span>
              </a>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
                alt="Websbond Digital Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
