import { useEffect } from "react";

export const ThirdPartyScripts = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (window.hasOwnProperty("__analytics_initialized")) return;
      (window as any).__analytics_initialized = true;

      // 1. Google Tag Manager
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NDZX3JNT');`;
      document.head.appendChild(gtmScript);

      // 2. GA4 script tag
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-L509P2NKDE";
      document.head.appendChild(gaScript);

      // 3. GA4 initialization config
      const gaConfigScript = document.createElement("script");
      gaConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L509P2NKDE');
      `;
      document.head.appendChild(gaConfigScript);
    };

    // Load after 3 seconds, or on first user interaction (scroll, click, touch, mousemove)
    const timer = setTimeout(initAnalytics, 3000);

    const triggerEvents = ["scroll", "click", "touchstart", "mousemove"];
    const handleInteraction = () => {
      initAnalytics();
      clearTimeout(timer);
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };

    triggerEvents.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    return () => {
      clearTimeout(timer);
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return null;
};
