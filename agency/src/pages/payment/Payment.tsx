import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/CtaBanner";
import { CreditCard, Landmark, Check, Send, ShieldCheck, Loader2, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { getApiUrl } from "@/lib/api";

export const PaymentPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"bank" | "card" | "paypal">("bank");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", amount: "", currency: "INR", comments: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If user navigates directly to /paypal, set the tab automatically
    if (location.pathname === "/paypal") {
      setActiveTab("paypal");
      setFormData(prev => ({ ...prev, currency: "USD" }));
    } else {
      setActiveTab("bank");
      setFormData(prev => ({ ...prev, currency: "INR" }));
    }
  }, [location.pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ...(name === "currency" && value === "USD" ? { currency: "USD" } : {}),
      ...(name === "currency" && value === "INR" ? { currency: "INR" } : {})
    }));
  };

  const handlePaySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.amount) {
      toast({ title: "Fields Required", description: "Name, email, phone, and amount are required.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(getApiUrl("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Payment Notification (${formData.currency} ${formData.amount})`,
          message: `Method: ${activeTab.toUpperCase()}\nCurrency: ${formData.currency}\nAmount: ${formData.amount}\nComments: ${formData.comments || "No comments"}`
        })
      });
      
      if (!response.ok) throw new Error("API call failed");
      
      toast({ 
        title: "Payment Logged!", 
        description: "Your payment request is logged. Our billing team will verify it and send your invoice shortly." 
      });
      setFormData({ name: "", email: "", phone: "", amount: "", currency: "INR", comments: "" });
    } catch {
      toast({ 
        title: "Submission failed", 
        description: "Could not log payment. Please contact our support team directly.", 
        variant: "destructive" 
      });
    }
    setLoading(false);
  };

  return (
    <Layout>
      <SEO 
        title="Secure Online Payment | Websbond" 
        description="Make secure online payments to Websbond. We support ICICI Bank transfer, domestic cards, UPI, net banking, and PayPal for international clients."
        path="/payment"
        keywords="websbond payment, pay online websbond, icici bank transfer websbond, paypal websbond"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 text-white text-center" style={{ background: "linear-gradient(135deg, #004b75 0%, #0c203b 100%)" }}>
        <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              → SECURE CHECKOUT
            </div>
            <h1 className="font-jost font-black text-3xl md:text-5xl leading-tight">
              Secure Online Payment
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Complete your invoice payments safely using ICICI bank transfer, standard UPI methods, debit/credit cards, or secure PayPal channels.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Tabs and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            
            {/* Left: Tab selectors and detail blocks */}
            <div className="space-y-8">
              {/* Tab Selector */}
              <div className="flex border-b border-gray-200">
                <button 
                  onClick={() => { setActiveTab("bank"); setFormData(prev => ({ ...prev, currency: "INR" })); }}
                  className={`flex-1 pb-4 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                    activeTab === "bank" ? "border-[#eb560c] text-[#eb560c]" : "border-transparent text-gray-500 hover:text-[#002b49]"
                  }`}
                >
                  <Landmark className="w-4 h-4" />
                  Bank Transfer (ICICI)
                </button>
                <button 
                  onClick={() => { setActiveTab("paypal"); setFormData(prev => ({ ...prev, currency: "USD" })); }}
                  className={`flex-1 pb-4 text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                    activeTab === "paypal" ? "border-[#eb560c] text-[#eb560c]" : "border-transparent text-gray-500 hover:text-[#002b49]"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  PayPal (International)
                </button>
              </div>

              {/* Bank Details View */}
              {activeTab === "bank" && (
                <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-[#eb560c]/10 text-[#eb560c]">
                      <Landmark className="w-5 h-5" />
                    </span>
                    <h3 className="font-jost font-bold text-[#002b49] text-lg">ICICI Bank Account Details</h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 text-xs sm:text-sm border-t border-gray-200/60 pt-6">
                    <div>
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-[10px] block mb-1">Company Name</span>
                      <span className="font-bold text-[#002b49]">Websbond Technologies</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-[10px] block mb-1">Bank Name</span>
                      <span className="font-bold text-[#002b49]">ICICI Bank</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-[10px] block mb-1">Account Number</span>
                      <span className="font-bold text-[#002b49] tracking-wider text-base">629605500657</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-[10px] block mb-1">IFSC Code</span>
                      <span className="font-bold text-[#eb560c] tracking-wider text-base">ICIC0006296</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-[10px] block mb-1">Branch Address</span>
                      <span className="font-semibold text-gray-700">Vikas Puri, G Block Branch, New Delhi, Delhi, 110018</span>
                    </div>
                  </div>

                  <div className="bg-[#eb560c]/5 border border-[#eb560c]/10 rounded-2xl p-4 text-xs font-semibold text-gray-600 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-[#eb560c] shrink-0 mt-0.5" />
                    <p>
                      Please state your business name as the transaction reference. Once done, fill out the form on the right so we can verify the funds immediately.
                    </p>
                  </div>
                </div>
              )}

              {/* PayPal Details View */}
              {activeTab === "paypal" && (
                <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-xl bg-[#eb560c]/10 text-[#eb560c]">
                      <CreditCard className="w-5 h-5" />
                    </span>
                    <h3 className="font-jost font-bold text-[#002b49] text-lg">PayPal & Card Payments</h3>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm border-t border-gray-200/60 pt-6">
                    <p className="text-gray-600 leading-relaxed font-semibold">
                      For international clients outside India, we process secure payments in USD ($) via PayPal. You can use your credit card, debit card, or PayPal balance.
                    </p>
                    <div>
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-[10px] block mb-1">PayPal Billing Email</span>
                      <span className="font-bold text-[#002b49] text-base select-all">websbond@websbond.com</span>
                    </div>
                  </div>

                  <div className="bg-[#eb560c]/5 border border-[#eb560c]/10 rounded-2xl p-4 text-xs font-semibold text-gray-600 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#eb560c] shrink-0 mt-0.5" />
                    <p>
                      Payments are processed in real-time under standard SSL-encryption parameters. Fill the form to obtain your checkout billing link.
                    </p>
                  </div>
                </div>
              )}

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-[#002b49] text-xs font-bold bg-slate-50 border border-gray-200 rounded-3xl p-5 justify-center">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#eb560c]" /> SSL Encrypted Checkout
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#eb560c]" /> instant Invoicing
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#eb560c]" /> 24/7 Billing Support
                </div>
              </div>
            </div>

            {/* Right: Payment Logging Form */}
            <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 text-[#002b49] shadow-lg">
              <h3 className="font-jost font-bold text-lg border-b border-gray-200 pb-3 mb-5">Payment Details</h3>
              <form onSubmit={handlePaySubmit} className="space-y-4">
                <div className="grid grid-cols-[0.8fr_1.2fr] gap-2">
                  <select 
                    name="currency" 
                    value={formData.currency} 
                    onChange={handleInputChange}
                    className="bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-bold"
                  >
                    <option value="INR">INR (₹)</option>
                    <option value="USD">USD ($)</option>
                  </select>
                  <input 
                    type="number" 
                    name="amount" 
                    value={formData.amount} 
                    onChange={handleInputChange} 
                    placeholder="Amount *" 
                    required 
                    min="1"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] font-sans font-bold" 
                  />
                </div>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Your Full Name *" 
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
                <textarea 
                  name="comments" 
                  value={formData.comments} 
                  onChange={handleInputChange} 
                  placeholder="Invoice Number or Service Remarks" 
                  rows={3} 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#002b49] outline-none focus:border-[#eb560c] resize-none font-sans" 
                />
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-[#eb560c] hover:bg-[#d14b0a] text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Logging details...
                    </>
                  ) : (
                    "Proceed to Pay !"
                  )}
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

export default PaymentPage;
