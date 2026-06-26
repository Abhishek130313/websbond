import { useState } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Star, Quote, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

const reviews = [
  {
    name: "Dr. Raman Kant Aggarwal",
    role: "Senior Consultant Surgeon",
    text: "Dedicated, focused, genuine, trustworthy and enterprising. Real good value for Customers. The team at Websbond has helped us structure our online presence perfectly.",
    rating: 5
  },
  {
    name: "Dr. Geeta Kadayaprath",
    role: "Founder, The Breast Cancer Clinic",
    text: "Prompt services with a great team which is able to create excellent content and post it at appropriate times. Response to queries and resolution of problems is also very quick. Thank you!",
    rating: 5
  },
  {
    name: "Dr. Sawan Bopanna",
    role: "Medical Director",
    text: "Gopal, Abhishek, and the Websbond team have been very professional in their digital marketing and local SEO services. Definitely recommend their consultancy.",
    rating: 5
  },
  {
    name: "Dr. Neha Khandelwal",
    role: "Consultant Physician",
    text: "Excellent work by Gopal and his team. A very dedicated team and has a lot of creativity when designing and managing local GMB profiles!",
    rating: 5
  },
  {
    name: "Dr. Ajeet Tiwari",
    role: "Medical Professional",
    text: "Marketing is not about providing false details or boasting about yourself but letting people know what you want them to know about yourself. Websbond understands this distinction perfectly.",
    rating: 5
  },
  {
    name: "Apolished Finish",
    role: "E-Commerce Retailer",
    text: "Searching for an exceptional SEO company in Delhi NCR led me to Websbond, and I'm thrilled with my decision! From the moment I contacted them, their professionalism and tech expertise were evident. Our organic traffic has grown by 50%!",
    rating: 5
  }
];

export const TestimonialsPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "SEO & Digital Marketing", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Details required", description: "Name, email and phone number are required.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(getApiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Quote Request: Testimonials Page (${formData.service})`,
          message: formData.message || "Requested consultation from testimonials reviews page"
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Request Received!", description: "We will contact you shortly to review your requirements." });
      setFormData({ name: "", email: "", phone: "", service: "SEO & Digital Marketing", message: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again or contact us directly on WhatsApp.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="Client Testimonials & Reviews | Websbond" 
        description="Read real client reviews and testimonials about Websbond. See how our SEO, SMO, GMB, and website design services help businesses scale in Delhi NCR & Haryana."
        path="/testimonials"
        keywords="websbond reviews, websbond testimonials, best digital marketing agency reviews, seo client testimonials"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white text-center" style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              → TESTIMONIALS
            </div>
            <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
              What Our Clients Say
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Hear what our clients have to say about their journey with us—real experiences, real success, and lasting partnerships built on trust and results.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials List + Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            
            {/* Left: Testimonials Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reviews.map((r, idx) => (
                <div key={idx} className="bg-[#f8fafc] border border-gray-150 p-6 rounded-3xl relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <span className="absolute top-5 right-5 text-gray-200">
                    <Quote className="w-10 h-10 rotate-180" />
                  </span>
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#eb560c] text-[#eb560c]" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-semibold italic mb-6 relative z-10">
                      "{r.text}"
                    </p>
                  </div>
                  <div className="border-t border-gray-200/60 pt-4">
                    <h4 className="font-jost font-bold text-[#002b49] text-sm">{r.name}</h4>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mt-0.5">{r.role}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Request a Quote Form */}
            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 text-[#002b49] shadow-lg sticky top-24">
              <h3 className="font-jost font-bold text-lg border-b border-gray-200 pb-3 mb-5">Request A Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Your Name *" 
                  required 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-sans" 
                />
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="Email Address *" 
                  required 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-sans" 
                />
                <input 
                  type="text" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  placeholder="Phone / WhatsApp *" 
                  required 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-sans" 
                />
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-sans font-semibold"
                >
                  <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                  <option value="SMO Services">SMO Services</option>
                  <option value="Google Ads Services">Google Ads Services</option>
                  <option value="GMB Optimization">GMB Optimization</option>
                  <option value="Web Design & Development">Web Design & Development</option>
                </select>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Tell us about your project requirements..." 
                  rows={3} 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] resize-none font-sans" 
                />
                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="w-full bg-[#eb560c] hover:bg-[#d14b0a] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? "Submitting..." : "Send Message !"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </Layout>
  );
};

export default TestimonialsPage;
