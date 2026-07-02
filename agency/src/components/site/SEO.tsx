import { Helmet } from "react-helmet-async";

const SITE_URL = "https://websbond.com";
const OG_IMAGE = "https://websbond.com/og-image.jpg";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  jsonLd?: object | object[];
  ogImage?: string;
}

export const SEO = ({ title, description, path, keywords, jsonLd, ogImage }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const img = ogImage || OG_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const defaultKeywords = "website developer Delhi NCR, website banwaye, website banwana hai, digital agency Haryana, best website designer Delhi, business grow kaise kare, local SEO Gurgaon, Google pe top kaise aaye, digital marketing Faridabad, website design India, custom React website, premium software agency, business website Delhi NCR";

  return (
    <Helmet>
      <html lang="hi-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords} />
      <link rel="canonical" href={url} />
      {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION && (
        <meta name="google-site-verification" content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Websbond" />
      <meta property="og:locale" content="hi_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:site" content="@websbond" />
      <meta name="twitter:creator" content="@websbond" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Websbond" />
      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Gurugram, Haryana" />
      <meta name="geo.position" content="28.4595;77.0266" />
      <meta name="ICBM" content="28.4595, 77.0266" />

      {/* Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};
