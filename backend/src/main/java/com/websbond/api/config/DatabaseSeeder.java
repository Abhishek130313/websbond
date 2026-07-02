package com.websbond.api.config;

import com.websbond.api.model.BlogPost;
import com.websbond.api.repository.BlogPostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@Profile("dev")
public class DatabaseSeeder implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(DatabaseSeeder.class);
    private final BlogPostRepository blogRepository;

    @Autowired
    public DatabaseSeeder(BlogPostRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (blogRepository.count() == 0) {
            logger.info("Initializing database seeder... Database is empty. Seeding default blog posts.");

            BlogPost post1 = new BlogPost(
                "website-banwane-ka-sahi-tarika",
                "Website Banwane Ka Sahi Tarika — Jisse Business Sach Me Grow Kare",
                "Agar aap apne business ke liye ek professional website banwana chahte hain to yeh guide aapke liye hai. Jaanein kaise ek fast, SEO-friendly website aapke customers ko double kar sakti hai.",
                """
                <h2>Website Kyu Zaroori Hai Aapke Business Ke Liye?</h2>
                <p>Aaj ke digital zamane mein, agar aapka business online nahi hai, toh samjho aap ek bade market se bahar hain. 97% customers apna decision online research karne ke baad karte hain — aur agar aapki website nahi hai ya slow hai, toh wo customer seedha competitor ke paas jaata hai.</p>
                
                <h2>Sasti vs Premium Website — Fark Kya Hota Hai?</h2>
                <p>Bahut log sochte hain ki ₹2,000 mein bani WordPress website kafi hai. Lekin yeh websites slow hoti hain, hack hone ka risk hota hai, aur Google inhe rank nahi karta. Ek proper custom React website:</p>
                <ul>
                  <li><strong>100/100 Google PageSpeed score</strong> deti hai</li>
                  <li>Mobile pe bilkul perfect dikhti hai</li>
                  <li>Google Search mein top par aane ki zyada probability hoti hai</li>
                  <li>Customers ka trust badhati hai</li>
                </ul>
          
                <h2>Website Banwane Ka Process — Step by Step</h2>
                <ol>
                  <li><strong>Requirement Discussion:</strong> Pehle hum samjhte hain ki aapka business kya hai, target customer kaun hai, aur website se kya chahiye.</li>
                  <li><strong>Design Mockup:</strong> Aapko ek design preview milti hai — approve karo, tab build karte hain.</li>
                  <li><strong>Development:</strong> Pure handcrafted React code — koi template nahi, koi shortcuts nahi.</li>
                  <li><strong>SEO Setup:</strong> Google Business Profile sync, schema markup, speed optimization.</li>
                  <li><strong>Launch:</strong> Domain, hosting, SSL — sab kuch set karke aapko handover.</li>
                </ol>
          
                <h2>Kitne Mein Banti Hai Website?</h2>
                <p>Websbond mein prices transparent hain:</p>
                <ul>
                  <li><strong>Starter (5 Pages):</strong> ₹7,999 — Local business profiles, portfolios</li>
                  <li><strong>Growth (Unlimited Pages):</strong> ₹14,999 — Corporate sites, blogs, lead gen</li>
                  <li><strong>Premium (E-Commerce):</strong> ₹29,999 — Full store with payment gateway</li>
                </ul>
          
                <h2>Abhi Shuru Karein</h2>
                <p>WhatsApp karein <strong>+91 9306623619</strong> par ya contact form fill karein. Pehli consultation bilkul free hai.</p>
                """,
                "Web Development",
                "June 20, 2024",
                "2024-06-20",
                "Websbond Team",
                "Web Development Experts",
                "6 min read",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
                "website banwaye, website development, business website, website Indore",
                true
            );

            BlogPost post2 = new BlogPost(
                "local-seo-indore-google-top",
                "Local SEO: Indore Mein Apne Business Ko Google #1 Par Kaise Laayein",
                "Google pe 'website developer Indore' ya 'best restaurant Indore' likhne pe aapka business top pe kyun nahi aata? Yeh guide local SEO ke secrets batata hai jo competitors nahi jaante.",
                """
                <h2>Local SEO Kya Hota Hai?</h2>
                <p>Local SEO matlab hai aapke business ko Google Search mein tab dikhana jab koi nearby customer search kare. Jaise "best digital agency Indore" ya "website banwaye Bhopal" — in searches mein top pe aana hi local SEO ka goal hai.</p>
          
                <h2>Google Business Profile — Sabse Pehla Kadam</h2>
                <p>Agar aapne abhi tak Google Business Profile (pehle Google My Business) setup nahi kiya, toh aaj hi karein. Yeh bilkul free hai aur iske bina local ranking possible nahi.</p>
                <ul>
                  <li>Sahi category choose karein</li>
                  <li>Photos upload karein (10+ photos = better ranking)</li>
                  <li>Business hours sahi set karein</li>
                  <li>Customers se reviews maangein (5-star reviews = #1 rank)</li>
                </ul>
          
                <h2>Website Ka SEO — Technical Side</h2>
                <p>Google rankings ke liye website ka technical SEO bahut zaroori hai:</p>
                <ol>
                  <li><strong>Page Speed:</strong> Website 2 seconds mein load honi chahiye. Slow website = low ranking.</li>
                  <li><strong>Mobile Friendly:</strong> 70% searches mobile se aate hain. Mobile pe perfect hona zaroori hai.</li>
                  <li><strong>Schema Markup:</strong> Google ko batao ki aap kya karte ho — LocalBusiness schema add karo.</li>
                  <li><strong>Local Keywords:</strong> "website developer Indore", "digital agency Indore", "SEO company Indore" — in keywords ko natural tarike se content mein use karo.</li>
                </ol>
          
                <h2>Content Strategy</h2>
                <p>Blog likhna Google ranking ke liye sabse effective tarika hai. Har baar jab aap ek useful article likhte ho, Google ke paas ek aur reason hota hai aapki site ko rank karne ka.</p>
          
                <h2>Websbond Kaise Help Karta Hai?</h2>
                <p>Hum sirf website nahi banate — hum Google ke liye optimize karte hain. Har website ke saath:</p>
                <ul>
                  <li>Technical SEO audit</li>
                  <li>Google Business Profile setup</li>
                  <li>Schema markup implementation</li>
                  <li>Speed optimization (100/100 PageSpeed target)</li>
                  <li>Monthly keyword ranking report</li>
                </ul>
                """,
                "SEO",
                "June 15, 2024",
                "2024-06-15",
                "Websbond Team",
                "SEO Specialists",
                "7 min read",
                "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&auto=format&fit=crop&q=80",
                "local SEO, Google top, SEO Indore, business visibility",
                true
            );

            BlogPost post3 = new BlogPost(
                "digital-marketing-business-grow",
                "Digital Marketing Se Business Kaise Grow Karein — 2024 Complete Guide",
                "Facebook Ads, Google Ads, Instagram — in sab mein paisa invest karne se pehle yeh zaroori guide padho. Jaano kaun sa platform aapke business ke liye best hai aur ROI kaise measure karein.",
                """
                <h2>Digital Marketing Kyu Zaroori Hai?</h2>
                <p>Traditional marketing (pamphlets, newspaper ads) mein aap sab logo ko target karte ho. Digital marketing mein sirf unhe target karo jo aapka product/service kharidna chahte hain. Result? Zyada sales, kam kharcha.</p>
          
                <h2>Google Ads vs Facebook Ads — Kya Choose Karein?</h2>
                <p>Dono platforms ke alag use cases hain:</p>
                <ul>
                  <li><strong>Google Ads:</strong> Jab customer already search kar raha hai ("best CA Indore", "laptop repair near me") — Google Ads perfect hai. High intent = high conversion.</li>
                  <li><strong>Facebook/Instagram Ads:</strong> Jab aap awareness create karna chahte ho ya ek new product launch karein. Impulse buying ke liye best.</li>
                </ul>
          
                <h2>Kitna Budget Chahiye?</h2>
                <p>Minimum ₹5,000/month se shuru kar sakte hain. Lekin proper results ke liye ₹15,000-30,000/month invest karo. Remember — yeh kharcha nahi, investment hai. ₹15k ads mein invest karo, ₹50k+ ki sales aao.</p>
          
                <h2>ROI Kaise Measure Karein?</h2>
                <ol>
                  <li>Google Analytics setup karein (free)</li>
                  <li>Conversion tracking lagao (form fills, calls, purchases)</li>
                  <li>Monthly report review karo — kaun sa ad best perform kar raha hai</li>
                  <li>Underperforming ads band karo, top performers scale karo</li>
                </ol>
          
                <h2>Common Mistakes Jo Paisa Barbaad Karte Hain</h2>
                <ul>
                  <li>Broad audience target karna (city ke bajay specific area target karo)</li>
                  <li>Landing page slow hona (ad click karo, page 10 second mein load ho — 80% bounce)</li>
                  <li>A/B testing na karna</li>
                  <li>Conversion tracking ke bina paisa lagana</li>
                </ul>
                """,
                "Digital Marketing",
                "June 10, 2024",
                "2024-06-10",
                "Websbond Team",
                "Digital Marketing Experts",
                "8 min read",
                "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&auto=format&fit=crop&q=80",
                "digital marketing, Google Ads, Facebook Ads, business grow",
                true
            );

            BlogPost post4 = new BlogPost(
                "react-website-vs-wordpress",
                "Custom React Website vs WordPress — Aapke Business Ke Liye Kya Sahi Hai?",
                "WordPress sasta lagta hai lekin long-term mein expensive aur risky hai. Jaano kyun ek custom React website aapke business ke liye better investment hai.",
                """
                <h2>WordPress Ki Problems</h2>
                <p>WordPress duniya ki sabse popular CMS hai — lekin popular = best nahi hota. WordPress websites ki main problems:</p>
                <ul>
                  <li><strong>Slow:</strong> Average WordPress site ka PageSpeed score 40-60/100 hota hai. Google slow sites rank nahi karta.</li>
                  <li><strong>Security Risk:</strong> Har mahine WordPress sites hack hoti hain (plugins ke vulnerabilities ki wajah se).</li>
                  <li><strong>Expensive Plugins:</strong> Har feature ke liye ek plugin chahiye — aur sab paid. Annual renewal fees accumulate hoti hain.</li>
                  <li><strong>Generic Look:</strong> Same templates, same design — aap competitor se alag nahi dikhte.</li>
                </ul>
          
                <h2>React Website Ke Fayde</h2>
                <ul>
                  <li><strong>100/100 PageSpeed:</strong> Handcrafted code = zero bloat = lightning fast.</li>
                  <li><strong>Completely Custom:</strong> Aapka brand, aapka design — koi template nahi.</li>
                  <li><strong>Secure:</strong> No CMS, no plugins = drastically reduced attack surface.</li>
                  <li><strong>Scalable:</strong> Shuru mein 5 pages, baad mein 500 — same codebase, no issues.</li>
                  <li><strong>You Own The Code:</strong> Websbond full source code handover karta hai.</li>
                </ul>
          
                <h2>Cost Comparison (3 Year)</h2>
                <p>WordPress: Domain (₹1k) + Hosting (₹3k/year) + Premium Theme (₹5k) + Plugins (₹8k/year) + Developer fees = ₹40,000+</p>
                <p>Custom React (Websbond): One-time ₹14,999 + cheap hosting = ₹20,000 total. Better, cheaper, yours.</p>
                """,
                "Web Development",
                "June 05, 2024",
                "2024-06-05",
                "Websbond Team",
                "Senior React Developer",
                "5 min read",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
                "React, WordPress, website development, performance",
                false
            );

            BlogPost post5 = new BlogPost(
                "whatsapp-business-marketing",
                "WhatsApp Business Marketing — Free Mein Customers Tak Kaise Pahunchen",
                "WhatsApp Business free hai aur India mein sabse effective marketing channel. Jaano kaise WhatsApp se orders, inquiries, aur customer retention badha sakte ho.",
                """
                <h2>WhatsApp Business Kyu Use Karein?</h2>
                <p>India mein 500 million+ WhatsApp users hain. Email open rate 20% hoti hai — WhatsApp message open rate 98% hai. Yahi fark hai.</p>
          
                <h2>WhatsApp Business Setup</h2>
                <ol>
                  <li>WhatsApp Business app download karein (free)</li>
                  <li>Business profile complete karein — website, address, hours</li>
                  <li>Catalog setup karein — products/services list</li>
                  <li>Quick Replies setup karein common questions ke liye</li>
                  <li>Labels lagao — New Customer, Pending, Closed</li>
                </ol>
          
                <h2>WhatsApp Marketing Strategies</h2>
                <ul>
                  <li><strong>Broadcast Lists:</strong> Ek message 256 customers ko ek saath bhejo</li>
                  <li><strong>Status Updates:</strong> Daily offers/updates post karo — customers jo aapka number save kiye hain unhe dikhega</li>
                  <li><strong>Click-to-Chat Links:</strong> Website pe WhatsApp button lagao — customer directly chat kare</li>
                  <li><strong>Automated Greeting:</strong> Naya message aaye to auto-reply set karo</li>
                </ul>
          
                <h2>Websbond Ki Services Mein WhatsApp Integration</h2>
                <p>Hum har website mein WhatsApp chat button integrate karte hain. Ek click mein customer seedha aapke WhatsApp pe pahuche.</p>
                """,
                "Digital Marketing",
                "May 28, 2024",
                "2024-05-28",
                "Websbond Team",
                "Marketing Strategist",
                "4 min read",
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
                "WhatsApp, marketing, business, customer engagement",
                false
            );

            BlogPost post6 = new BlogPost(
                "google-pagespeed-website-ranking",
                "Google PageSpeed 100/100 — Kyun Zaroori Hai Aur Kaise Achieve Karein",
                "Google slow websites ko rank nahi konto. Jaano PageSpeed score kya hota hai, iska business pe kya impact hai, aur kaise Websbond aapki website ko lightning-fast banata hai.",
                """
                <h2>PageSpeed Score Kya Hota Hai?</h2>
                <p>Google Lighthouse ek tool hai jo website ki loading speed, performance, aur user experience measure karta hai — 0 to 100 scale pe. 90+ = Green (Good), 50-89 = Orange (Needs Work), 0-49 = Red (Poor).</p>
          
                <h2>Speed Ka Business Pe Impact</h2>
                <ul>
                  <li>1 second delay = 7% conversion drop</li>
                  <li>3 second load time = 53% mobile users leave</li>
                  <li>Slow websites = lower Google ranking</li>
                  <li>Fast websites = more trust, more sales</li>
                </ul>
          
                <h2>Common Speed Problems</h2>
                <ol>
                  <li><strong>Large Images:</strong> 2MB image download = slow page. Solution: WebP format + lazy loading</li>
                  <li><strong>Unused JavaScript:</strong> WordPress plugins add unnecessary JS. Solution: Custom code only</li>
                  <li><strong>No Caching:</strong> Har baar page load pe server se data fetch. Solution: CDN + proper caching</li>
                  <li><strong>Render-blocking Resources:</strong> CSS/JS jo page show hone se pehle load ho. Solution: Code splitting</li>
                </ol>
          
                <h2>Websbond Ka Approach</h2>
                <p>Hum React + Vite build system use karte hain jo automatically:</p>
                <ul>
                  <li>Code split karta hai — sirf jo chahiye wahi load hota hai</li>
                  <li>Images automatically optimize karta hai</li>
                  <li>CSS purge karta hai — sirf used styles</li>
                  <li>Gzip/Brotli compression enable karta hai</li>
                </ul>
                <p>Result: Har Websbond website ka PageSpeed score <strong>95-100/100</strong> hota hai.</p>
                """,
                "SEO",
                "May 20, 2024",
                "2024-05-20",
                "Websbond Team",
                "Performance Engineer",
                "5 min read",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
                "PageSpeed, performance, Core Web Vitals, Google ranking",
                false
            );

            blogRepository.saveAll(Arrays.asList(post1, post2, post3, post4, post5, post6));
            logger.info("Successfully seeded 6 default blog posts.");
        } else {
            logger.info("Database already contains blog posts. Skipping seeder.");
        }
    }
}
