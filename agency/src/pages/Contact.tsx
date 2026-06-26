import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";
import { Phone, Mail, MapPin, Loader2, Send } from "lucide-react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Details required", description: "Name, Email, and Phone are required to proceed.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(getApiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Contact Form Submission: ${formData.service}`,
          message: formData.message || `Interested in ${formData.service}`
        }),
      });

      if (!response.ok) throw new Error("API failed");
      toast({ title: "Message Sent Successfully!", description: "Our team will contact you shortly." });
      
      setFormData({ name: "", email: "", phone: "", service: "Web Development", message: "" });
    } catch {
      toast({ 
        title: "Submission failed", 
        description: "Please check your network or reach us directly on WhatsApp.", 
        variant: "destructive" 
      });
    }
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us | Digital Marketing Agency Delhi NCR | Websbond" 
        description="Connect with Websbond today! Submit your query or call us at +91 9306623619 to grow your business with expert SEO, PPC, SMO & Web Development." 
        path="/contact-us" 
      />

      {/* ── Page Hero Header ── */}
      <section className="relative overflow-hidden py-16 md:py-20 text-white" style={{ background: "linear-gradient(135deg, #002b49 0%, #16243E 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            → CONTACT WEBSBOND
          </div>
          <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Get in touch with Websbond for professional digital marketing services in Delhi NCR. Call or submit your enquiry for expert consultation.
          </p>
        </div>
      </section>

      {/* ── Main Contact Split Section ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 max-w-6xl mx-auto items-stretch">
            
            {/* Left: Contact Info details */}
            <div className="flex flex-col justify-between space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#002b49]">→</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-[#eb560c]">GET IN TOUCH</span>
                </div>
                <h2 className="font-jost font-bold text-3xl md:text-4xl text-[#002b49] mb-4">
                  We're just a <span className="text-[#eb560c]">message away!</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                  Connect with us today to discuss how our result-driven marketing strategies and custom high-performance web systems can take your business to the next level.
                </p>
              </div>

              {/* Cards block */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#eb560c] grid place-items-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Have any question?</h4>
                    <a href="tel:+919306623619" className="font-jost font-bold text-[#002b49] text-base hover:text-[#eb560c] transition-colors mt-0.5 block">
                      +91 9306623619
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#eb560c] grid place-items-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Write email</h4>
                    <a href="mailto:websbond@websbond.com" className="font-jost font-bold text-[#002b49] text-base hover:text-[#eb560c] transition-colors mt-0.5 block">
                      websbond@websbond.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#eb560c] grid place-items-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Our Location</h4>
                    <p className="font-jost font-bold text-[#002b49] text-sm mt-0.5 leading-snug">
                      Delhi NCR & Haryana, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-[#f8fafc] border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-jost font-bold text-xl text-[#002b49] pb-3 border-b border-gray-200 mb-6">
                  Send Us A Message
                </h3>

                <form onSubmit={submitForm} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name" 
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c] shadow-sm font-sans" 
                        required
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address" 
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c] shadow-sm font-sans" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Phone / WhatsApp *</label>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number" 
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c] shadow-sm font-sans" 
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Select Services *</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#002b49] outline-none focus:border-[#eb560c] shadow-sm font-sans"
                    >
                      <option>Web Development</option>
                      <option>SEO & Digital Marketing</option>
                      <option>SMO (Social Media Optimization)</option>
                      <option>SMM (Social Media Marketing)</option>
                      <option>Google Ads Services</option>
                      <option>GMB (Google My Business)</option>
                      <option>Content Marketing Services</option>
                      <option>Mobile App Development</option>
                      <option>Custom Web Design</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 font-bold uppercase block mb-1">Message Brief (Optional)</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us details about integrations, website ideas, or campaign goals..."
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#002b49] placeholder:text-gray-400 outline-none focus:border-[#eb560c] shadow-sm resize-none font-sans" 
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#eb560c] hover:bg-[#d14b0a] text-white font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      {isSubmitting ? "Sending Message..." : "Send Message !"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Interactive Map Placeholder / Callout ── */}
      <section className="bg-slate-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-jost font-bold text-[#002b49] text-xl">Looking to visit our Haryana Office?</h3>
            <p className="text-gray-500 text-sm font-medium">Find us on Google Maps, or call our direct assistance line for navigation.</p>
          </div>
          <a 
            href="https://wa.me/919306623619?text=Namaste!%20Office%20address%20aur%20directions%20chahiye." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-navy text-sm font-bold inline-flex items-center gap-2"
          >
            Get Office Directions
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
