import { useState } from "react";
import { Sparkles, Phone, Mail, MessageCircle, Send, Shield, Loader2, ArrowRight, ArrowLeft, Cpu, Share2 } from "lucide-react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

export const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({ title: "Details required", description: "Name and Email are required to proceed.", variant: "destructive" });
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
          subject: `Brief: ${goal} | Scale: ${size}`,
          message: formData.message || `Interested in ${goal} for a ${size} project.`
        }),
      });

      if (!response.ok) throw new Error("API failed");
      toast({ title: "Brief Submitted!", description: "We will contact you shortly via WhatsApp and email." });
      
      // Reset form
      setStep(1);
      setGoal("");
      setSize("");
      setFormData({ name: "", email: "", phone: "", message: "" });
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
        title="Contact Websbond | Hire Best Web Developer Delhi NCR & Ads Agency" 
        description="Get a website built today! Contact our team at +91 9306623619 or websbond@websbond.com for custom React sites and SEO optimization." 
        path="/contact" 
      />

      {/* ── Visual Hero Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface-2 to-amber-500/5 dark:to-amber-950/10 pt-8 pb-12 border-b border-border">
        
        {/* Grids and Aurora */}
        <div className="absolute inset-0 grid-mesh opacity-[0.05] dark:opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none animate-aurora-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-amber-500/5 blur-[90px] pointer-events-none animate-aurora-2" />

        {/* Floating communication/contact hitech elements in bg */}
        <div className="absolute top-10 right-16 w-7 h-7 border border-amber-500/20 rounded-full flex items-center justify-center animate-pulse pointer-events-none">
          <Mail className="w-3.5 h-3.5 text-amber-400/40" />
        </div>
        <div className="absolute bottom-6 left-1/4 w-5 h-5 bg-cyan-500/5 rounded-full animate-bounce pointer-events-none" style={{ animationDuration: '6s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="flex flex-col items-start text-left gap-5">
              <div className="inline-flex items-center gap-2 border border-cyan-200 dark:border-cyan-500/20 bg-cyan-50/60 dark:bg-cyan-950/20 backdrop-blur-md text-cyan-600 dark:text-cyan-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
                Start Your Journey
              </div>
              
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground tracking-tight">
                Let's Build Something<br />
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">
                  Extraordinary.
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed font-semibold">
                Kya aapke paas koi project design, app idea ya business grow karne ka plan hai? Humse connect karein aur hum premium setup ready kar denge. Website banwana hai? Shuru karein.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919306623619?text=Namaste!%20Mujhe%20website%20banwani%20hai.%20Free%20consultation%20chahiye."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all text-xs shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Consultant
                </a>
                <a
                  href="#onboarding-form"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all text-xs"
                >
                  Fill Contact Form <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: 3D Nodes Connection Visual */}
            <div className="relative flex items-center justify-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center [perspective:1200px] pointer-events-auto group/hero">
                
                {/* 3D Wrapper */}
                <div className="relative w-[260px] h-[200px] [transform-style:preserve-3d] [transform:rotateX(22deg)_rotateY(-15deg)] group-hover/hero:[transform:rotateX(12deg)_rotateY(2deg)] transition-all duration-700 ease-out">
                  
                  {/* Connection Node 3: Database & Analytics */}
                  <div className="absolute inset-0 bg-card border border-border rounded-2xl p-4 shadow-card backdrop-blur-md [transform:translateZ(60px)] transition-transform duration-700 ease-out group-hover/hero:[transform:translateZ(80px)] flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/5 pb-2 text-foreground">
                      <div className="flex items-center gap-1.5">
                        <Share2 className="w-4 h-4 text-cyan-600 animate-pulse" />
                        <span className="text-[8px] text-foreground font-bold font-mono">Live_Data_Stream</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center py-2 gap-2">
                      <div className="flex justify-between items-center text-[7px] font-mono text-cyan-600">
                        <span>Lead Capture</span>
                        <span>Active</span>
                      </div>
                      <div className="flex items-center gap-2 h-1 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full w-2/3 group-hover/hero:w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>

                  {/* Connection Node 2: API logic */}
                  <div className="absolute inset-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.15)] [transform:translateZ(10px)] group-hover/hero:[transform:translateZ(15deg)] flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[8px] text-amber-500 dark:text-amber-300 font-mono border-b border-slate-200/50 dark:border-slate-800 pb-2">
                      <div className="flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-amber-400 animate-spin-slow" />
                        <span>Integration_Hub</span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-1.5 py-1">
                      <div className="w-full h-1 bg-amber-100 dark:bg-amber-500/20 rounded" />
                      <div className="w-full h-1 bg-amber-100 dark:bg-amber-500/20 rounded" />
                    </div>
                  </div>

                  {/* Connection Node 1: Base */}
                  <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-amber-500/20 rounded-2xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_5px_15px_rgba(0,0,0,0.2)] [transform:translateZ(-40px)] group-hover/hero:[transform:translateZ(-50deg)] flex flex-col justify-between">
                    <span className="text-[7px] text-muted-foreground font-mono">Infrastructure_Platform</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Onboarding Content ── */}
      <div className="bg-background text-foreground py-10 transition-colors duration-300">
        
        <section className="container mx-auto px-4 pb-10">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6 items-stretch">
            
            {/* Onboarding Wizard Form Card */}
            <div id="onboarding-form" className="glass-panel border-border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[460px]">
              
              {/* Step Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 dark:border-white/[0.06] mb-6 text-xs text-muted-foreground">
                <span className="font-bold text-foreground uppercase tracking-wider">Step {step} of 3</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <span key={s} className={`w-6 h-1.5 rounded-full transition-all ${step >= s ? "bg-amber-500" : "bg-slate-200 dark:bg-slate-800"}`} />
                  ))}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                
                {/* Step 1: Goals */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h3 className="font-display font-bold text-lg text-foreground">What is your primary project goal?</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { key: "development", label: "Website Development", desc: "React, custom designs, Next.js catalog site" },
                        { key: "seo", label: "SEO Visibility mapping", desc: "Target Position 1 on local Google searches" },
                        { key: "ads", label: "Paid Campaign Funnels", desc: "Google & Meta high-ROI lead generation ads" },
                        { key: "all-in-one", label: "Unify All Services", desc: "A custom plan integrating development, SEO, and ads" },
                      ].map((opt) => (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => { setGoal(opt.label); setStep(2); }}
                          className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 ${
                            goal === opt.label 
                              ? "bg-amber-500/5 dark:bg-amber-500/10 border-amber-500 text-foreground" 
                              : "bg-card border-border text-muted-foreground hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <span className="font-bold text-foreground text-xs sm:text-sm mb-1">{opt.label}</span>
                          <span className="text-xs text-muted-foreground leading-normal font-semibold">{opt.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Scale */}
                {step === 2 && (
                  <div className="space-y-5">
                    <h3 className="font-display font-bold text-lg text-foreground">What is the scale of this project?</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { key: "small", label: "MVP Launch / Single Page", desc: "Perfect for single-page campaigns or local business profiles" },
                        { key: "medium", label: "Corporate Web System", desc: "Perfect for dynamic corporate portals, blogs, or brand sites" },
                        { key: "large", label: "Custom E-Commerce Platform", desc: "Headless commerce or customized inventory checkouts" },
                        { key: "consulting", label: "Enterprise Tech Strategy", desc: "Technical audits and strategy consultation sessions" },
                      ].map((opt) => (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => { setSize(opt.label); setStep(3); }}
                          className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 ${
                            size === opt.label 
                              ? "bg-amber-500/5 dark:bg-amber-500/10 border-amber-500 text-foreground" 
                              : "bg-card border-border text-muted-foreground hover:border-slate-300 dark:hover:border-slate-700"
                          }`}
                        >
                          <span className="font-bold text-foreground text-xs sm:text-sm mb-1">{opt.label}</span>
                          <span className="text-xs text-muted-foreground leading-normal font-semibold">{opt.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Direct Details */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-lg text-foreground">Provide Contact Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] text-muted-foreground font-bold uppercase block mb-1">Your Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter full name" 
                          className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm font-sans" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-muted-foreground font-bold uppercase block mb-1">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter email address" 
                          className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm font-sans" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] text-muted-foreground font-bold uppercase block mb-1">WhatsApp / Phone</label>
                      <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number" 
                        className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm font-sans" 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-muted-foreground font-bold uppercase block mb-1">Project Brief / Description (Optional)</label>
                      <textarea 
                        rows={3} 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us details about integrations, current web URL, or strategy targets..."
                        className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm resize-none font-sans" 
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="border-t border-slate-200/80 dark:border-white/[0.06] pt-5 mt-6 flex justify-between gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-surface-2 text-foreground font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Go Back
                  </button>
                ) : (
                  <div />
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={step === 1 && !goal}
                    className="bg-foreground hover:opacity-90 disabled:opacity-40 disabled:pointer-events-none text-background font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all ml-auto shadow-sm"
                  >
                    Continue <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submitForm}
                    disabled={isSubmitting}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/10 disabled:opacity-50 ml-auto transition-all"
                  >
                    {isSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3 h-3" />}
                    {isSubmitting ? "Submitting brief..." : "Submit Project Brief"}
                  </button>
                )}
              </div>

            </div>

            {/* Live Brief Summary Panel */}
            <div className="glass-panel border-border rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-foreground pb-3 border-b border-slate-200/80 dark:border-white/[0.06] mb-5">
                  Live Project Outline
                </h3>

                <div className="space-y-5">
                  {/* Goal Item */}
                  <div className="flex gap-3 items-start">
                    <div className={`w-5.5 h-5.5 rounded-full border grid place-items-center shrink-0 text-[10px] ${
                      goal ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10" : "border-border text-muted-foreground"
                    }`}>
                      {goal ? "✓" : "1"}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Primary Goal</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 font-semibold">{goal || "Awaiting Step 1 completion"}</div>
                    </div>
                  </div>

                  {/* Scale Item */}
                  <div className="flex gap-3 items-start">
                    <div className={`w-5.5 h-5.5 rounded-full border grid place-items-center shrink-0 text-[10px] ${
                      size ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10" : "border-border text-muted-foreground"
                    }`}>
                      {size ? "✓" : "2"}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Project Scale</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 font-semibold">{size || "Awaiting Step 2 completion"}</div>
                    </div>
                  </div>

                  {/* Details Item */}
                  <div className="flex gap-3 items-start">
                    <div className={`w-5.5 h-5.5 rounded-full border grid place-items-center shrink-0 text-[10px] ${
                      formData.name && formData.email ? "border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10" : "border-border text-muted-foreground"
                    }`}>
                      {formData.name && formData.email ? "✓" : "3"}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Handoff Info</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 font-semibold">
                        {formData.name ? `${formData.name} (${formData.email})` : "Awaiting Step 3 completion"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200/80 dark:border-white/[0.06] pt-4 mt-6 flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div className="text-[9px] sm:text-[10px] text-muted-foreground leading-normal font-semibold">
                  Websbond commits to direct client communication. Zero spam lists or reseller lists.
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Grid Coordinates Cards */}
        <section className="container mx-auto px-4 grid sm:grid-cols-3 gap-5 pb-10">
          {[
            { icon: Phone, title: "Call Us Direct", val: "+91 9306623619", sub: "Mon - Sat: 10AM - 9PM" },
            { icon: Mail, title: "Email Us", val: "websbond@websbond.com", sub: "Services: service@websbond.com | Support: support@websbond.com" },
            { icon: MessageCircle, title: "Chat on WhatsApp", val: "+91 9306623619", sub: "Click to chat instantly" },
          ].map((card, idx) => (
            <a 
              key={idx} 
              href={card.title === "Email Us" ? `mailto:${card.val}` : card.title === "Chat on WhatsApp" ? `https://wa.me/919306623619` : `tel:${card.val}`}
              target={card.title === "Call Us Direct" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="glass-panel border-border shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/20 hover:bg-slate-500/[0.02] dark:hover:bg-white/[0.03] transition-all rounded-3xl p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/5 border border-amber-500/20 text-amber-500 dark:text-amber-400 grid place-items-center shrink-0">
                <card.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{card.title}</div>
                <div className="font-bold text-foreground mt-1 text-xs sm:text-sm font-sans truncate max-w-[200px]">{card.val}</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground font-semibold mt-0.5">{card.sub}</div>
              </div>
            </a>
          ))}
        </section>
        
      </div>
    </Layout>
  );
};

export default ContactPage;
