import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

/* 
  This section matches the reference site's "Empowering Businesses" + "Trusted Certifications" layout.
  - White bg
  - 2-col: left image, right text content
  - Certification logos: Google Partner, Microsoft Certified, Clutch
*/

const WHY_POINTS = [
  "Result-Driven Digital Marketing Strategies",
  "Certified Google Partner & SEO Experts",
  "100% Transparent Reporting & Analytics",
  "Affordable Packages for SMEs & Startups",
  "Dedicated Account Manager & 24/7 Support",
  "Proven Track Record in Delhi NCR & Haryana",
];

const CERTIFICATIONS = [
  { name: "Google Partner", bg: "#fff", border: "#e2e8f0", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Partners_logo.svg/200px-Google_Partners_logo.svg.png" },
  { name: "Microsoft Certified", bg: "#fff", border: "#e2e8f0", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png" },
  { name: "Clutch", bg: "#fff", border: "#e2e8f0", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&auto=format&fit=crop&q=60" },
];

export const Process = () => (
  <>
    {/* ── Trusted Certifications ── */}
    <section className="py-14" style={{ background: "#f0f2f5" }}>
      <div className="container">
        <h2
          className="font-jost font-bold text-center mb-8"
          style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#002b49" }}
        >
          Trusted Certifications
        </h2>
        <div className="grid grid-cols-3 gap-5 max-w-2xl mx-auto">
          {[
            { name: "Google Partner", text: "Google\nPartner" },
            { name: "Microsoft Certified", text: "Microsoft\nCertified" },
            { name: "Clutch", text: "Clutch" },
          ].map((cert) => (
            <div
              key={cert.name}
              className="bg-white rounded-lg flex items-center justify-center py-8 px-4 text-center font-bold"
              style={{ boxShadow: "0 2px 15px rgba(0,0,0,0.06)", border: "1px solid #e8ecf0", color: "#002b49", fontSize: 18, lineHeight: 1.3, whiteSpace: "pre-line" }}
            >
              {cert.text}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Empowering Businesses / About Section ── */}
    <section className="py-16 md:py-20" style={{ background: "#fff" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
              alt="Digital marketing team"
              className="w-full rounded-lg object-cover"
              style={{ height: 420 }}
            />
            {/* Orange stats badge overlay */}
            <div
              className="absolute bottom-6 right-6 text-white rounded-lg p-4 text-center"
              style={{ background: "#eb560c" }}
            >
              <div className="font-jost font-bold text-3xl">5+</div>
              <div className="text-sm font-medium">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span style={{ color: "#002b49" }}>→</span>
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#eb560c" }}>
                ABOUT US
              </span>
            </div>
            <h2
              className="font-jost font-bold mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#002b49", lineHeight: 1.2 }}
            >
              Empowering Businesses<br />
              Elevating Visibility{" "}
              <span style={{ color: "#eb560c" }}>Driving Growth</span>
            </h2>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              As the <strong>best digital marketing agency in Delhi NCR & Haryana</strong>, we transform
              your online presence. Founded with a passion for data-driven results, Websbond leverages
              the power of <strong>SEO services in Delhi</strong>, social media optimization, and
              Website Design to deliver measurable results.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-8">
              {WHY_POINTS.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#eb560c" }}
                  />
                  <span className="text-gray-700 text-sm">{pt}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "#eb560c" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d14b0a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#eb560c")}
            >
              Explore More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);
