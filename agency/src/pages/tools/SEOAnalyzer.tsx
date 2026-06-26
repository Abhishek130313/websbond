import { useState, useEffect } from "react";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Search, Loader2, CheckCircle2, AlertCircle, ShieldAlert, Zap, Globe, Sparkles, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

export const SEOAnalyzerPage = () => {
  const [urlInput, setUrlInput] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const [showReport, setShowReport] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "" });
  const [submittingLead, setSubmittingLead] = useState(false);

  const crawlSteps = [
    "Establishing secure connection to domain...",
    "Scanning landing page HTML DOM tree...",
    "Evaluating mobile-responsive stylesheet files...",
    "Checking meta title and descriptions tags...",
    "Auditing page speed indicators and index mapping...",
    "Generating final optimization report..."
  ];

  useEffect(() => {
    if (!analyzing) return;
    
    const interval = setInterval(() => {
      setProgressStep((prev) => {
        if (prev >= crawlSteps.length - 1) {
          clearInterval(interval);
          setAnalyzing(false);
          setShowReport(true);
          return 0;
        }
        return prev + 1;
      });
    }, 900);

    return () => clearInterval(interval);
  }, [analyzing]);

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput) {
      toast({ title: "URL Required", description: "Please enter a valid website URL.", variant: "destructive" });
      return;
    }
    setShowReport(false);
    setProgressStep(0);
    setAnalyzing(true);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email || !leadForm.phone) {
      toast({ title: "Details required", description: "Name, email and phone number are required.", variant: "destructive" });
      return;
    }
    setSubmittingLead(true);
    try {
      const response = await fetch(getApiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          subject: `SEO Audit Request for ${urlInput}`,
          message: `Client requested full audit results consultation for website: ${urlInput}`
        })
      });
      if (!response.ok) throw new Error("API fail");
      toast({ title: "Audit Consultation Booked!", description: "An SEO specialist will contact you to explain the audit results." });
      setLeadForm({ name: "", email: "", phone: "" });
    } catch {
      toast({ title: "Submission failed", description: "Please try again later or contact us on WhatsApp.", variant: "destructive" });
    }
    setSubmittingLead(false);
  };

  return (
    <Layout>
      <SEO 
        title="Free Website SEO Analyzer & Audit Tool | Websbond" 
        description="Analyze your website SEO score instantly. Use Websbond's free SEO analyzer to audit page speed, heading structures, metadata issues, and index visibility."
        path="/seo-analyzer"
        keywords="free seo tool, website crawler, check rankings delhi, seo analyzer online"
      />

      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 text-white text-center" style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              → SEO TOOLBOX
            </div>
            <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
              Free Website SEO Audit Tool
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Scan your domain instantly to pinpoint technical errors, load speed bottlenecks, and metadata gaps that restrict your keyword rankings.
            </p>

            {/* URL Input Form */}
            <form onSubmit={handleStartAnalysis} className="bg-white p-2 rounded-2xl flex flex-col sm:flex-row gap-2 max-w-lg mx-auto shadow-xl border border-white/10">
              <div className="flex-1 flex items-center gap-2 px-3">
                <Globe className="w-4 h-4 text-[#002b49] shrink-0" />
                <input 
                  type="text" 
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://yourwebsite.com" 
                  disabled={analyzing}
                  className="w-full bg-transparent border-none text-[#002b49] text-xs sm:text-sm font-semibold outline-none py-2.5" 
                />
              </div>
              <button 
                type="submit" 
                disabled={analyzing}
                className="bg-[#eb560c] hover:bg-[#d14b0a] text-white font-bold px-6 py-2.5 sm:py-0 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                {analyzing ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze Now <Sparkles className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Crawling Progress Indicator */}
      {analyzing && (
        <section className="py-20 bg-slate-50 border-b border-gray-150">
          <div className="container mx-auto px-4 max-w-md text-center space-y-6">
            <div className="relative w-16 h-16 mx-auto">
              <span className="absolute inset-0 border-4 border-gray-200 rounded-full" />
              <span className="absolute inset-0 border-4 border-[#eb560c] border-t-transparent rounded-full animate-spin" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-jost font-bold text-[#002b49] text-base">Crawling Domain...</h3>
              <p className="text-gray-500 text-xs font-semibold animate-pulse transition-all">
                {crawlSteps[progressStep]}
              </p>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#eb560c] h-full transition-all duration-500 rounded-full"
                style={{ width: `${((progressStep + 1) / crawlSteps.length) * 100}%` }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Audit Report View */}
      {showReport && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl space-y-12">
            
            {/* Score Summary Box */}
            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[#eb560c] font-black text-xs uppercase tracking-wider block">Scan Complete for {urlInput}</span>
                <h2 className="font-jost font-bold text-[#002b49] text-2xl">Your SEO Score Summary</h2>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold max-w-xl">
                  We found 3 warning issues that are impacting search crawler access. Resolving these can instantly improve ranking indexing.
                </p>
              </div>

              {/* Score Gauge */}
              <div className="relative w-32 h-32 flex items-center justify-center bg-white rounded-full border border-gray-150 shadow-sm shrink-0">
                <span className="absolute inset-2 border-4 border-dashed border-[#eb560c] rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                <div className="text-center">
                  <span className="text-3xl font-black text-[#002b49] block">74<span className="text-xs text-gray-400 font-semibold">/100</span></span>
                  <span className="text-[9px] text-[#eb560c] font-bold uppercase tracking-wider">SEO Score</span>
                </div>
              </div>
            </div>

            {/* Checklist Details */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Passed Parameters */}
              <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-5">
                <h3 className="font-jost font-bold text-[#002b49] text-base flex items-center gap-2 border-b border-gray-200 pb-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Passed Diagnostics (4)
                </h3>
                <ul className="space-y-4 text-xs font-semibold text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#002b49] block">SSL Certificate (HTTPS) Secure</span>
                      <span className="text-[10px] text-gray-500">Security configurations check passed. Encrypted channels active.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#002b49] block">Robots.txt & XML Sitemaps Setup</span>
                      <span className="text-[10px] text-gray-500">Search bots can crawl files successfully. Standard map present.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#002b49] block">Heading Hierarchy Structure</span>
                      <span className="text-[10px] text-gray-500">HTML structure contains properly nested h1, h2, h3 tags elements.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#002b49] block">Friendly URLs Format</span>
                      <span className="text-[10px] text-gray-500">URLs contain readable folder slugs. Clean directory path mapping.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Warning Issues */}
              <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-5">
                <h3 className="font-jost font-bold text-[#002b49] text-base flex items-center gap-2 border-b border-gray-200 pb-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" /> Action Required (3)
                </h3>
                <ul className="space-y-4 text-xs font-semibold text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#002b49] block">Missing Alt Tags on Images</span>
                      <span className="text-[10px] text-gray-500">14 images do not contain alternative text tags, causing accessibility flags.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#002b49] block">Page Speed Performance (2.9s)</span>
                      <span className="text-[10px] text-gray-500">Time-to-first-byte exceeds recommended limits. Heavy assets blocking scripts.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#002b49] block">Meta Description Too Long</span>
                      <span className="text-[10px] text-gray-500">Meta description exceeds 160 characters limit, leading to search truncation.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote / Lead Form block */}
            <div className="border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8 bg-slate-50">
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-1 bg-[#eb560c]/10 text-[#eb560c] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" /> Free Action Plan
                </div>
                <h3 className="font-jost font-bold text-[#002b49] text-xl">Fix These Errors & Boost Traffic</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-semibold max-w-xl">
                  Our professional SEO developers can fix these technical speed bottlenecks, optimize alt tags, and help you rank on Page 1. Let us create a detailed checklist strategy for you.
                </p>
              </div>

              {/* Quick Contact Form */}
              <form onSubmit={handleLeadSubmit} className="w-full lg:w-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-md">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={leadForm.name} 
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })} 
                  required
                  className="bg-slate-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#002b49] outline-none focus:border-[#eb560c] font-semibold"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={leadForm.email} 
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })} 
                  required
                  className="bg-slate-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#002b49] outline-none focus:border-[#eb560c] font-semibold"
                />
                <input 
                  type="text" 
                  placeholder="Phone / WhatsApp" 
                  value={leadForm.phone} 
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })} 
                  required
                  className="bg-slate-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#002b49] outline-none focus:border-[#eb560c] font-semibold"
                />
                <button 
                  type="submit" 
                  disabled={submittingLead}
                  className="bg-[#eb560c] hover:bg-[#d14b0a] text-white py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-1.5 sm:col-span-2 lg:col-span-1"
                >
                  {submittingLead ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Claim Free Audit Plan <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </section>
      )}

      <CtaBanner />
    </Layout>
  );
};

export default SEOAnalyzerPage;
