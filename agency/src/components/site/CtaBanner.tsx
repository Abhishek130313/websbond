import { ArrowRight, Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const CtaBanner = ({
  title = "Ready to Take Your Business to the Next Level?",
  highlight = "Let's Talk!",
  subtitle = "Get a free consultation and custom digital marketing strategy for your business.",
  ctaLabel = "Free Consultation",
  ctaTo = "/contact",
  trustItems = [
    { label: "No Hidden Charges" },
    { label: "Cancel Anytime" },
    { label: "Dedicated Support" },
  ],
}: {
  title?: string;
  highlight?: string;
  subtitle?: string;
  trustItems?: { label: string }[];
  ctaLabel?: string;
  ctaTo?: string;
}) => (
  <section
    className="py-16"
    style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}
  >
    <div className="container text-center">
      <h2 className="font-jost font-bold text-white text-3xl md:text-4xl mb-3">
        {title} <span style={{ color: "#eb560c" }}>{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-white/70 text-lg mb-6 max-w-xl mx-auto">{subtitle}</p>
      )}

      {/* Trust items */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {trustItems.map((t) => (
          <div key={t.label} className="flex items-center gap-2 text-white/80">
            <Check className="w-4 h-4 text-[#eb560c]" />
            <span className="text-sm font-semibold">{t.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to={ctaTo}
          className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{ background: "#eb560c" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
        >
          {ctaLabel} <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="tel:+919306623619"
          className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:border-white hover:bg-white/10"
        >
          <Phone className="w-4 h-4" /> +91 9306623619
        </a>
      </div>
    </div>
  </section>
);
