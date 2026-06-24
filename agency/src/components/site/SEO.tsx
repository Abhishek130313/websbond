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
  const defaultKeywords = "website developer Indore, website banwaye, website banwana hai, sasti website, digital agency Indore, best website designer Indore, business grow kaise kare, local SEO Indore, Google pe top kaise aaye, digital marketing Indore, website design India, cheap website India, business website Indore";

  return (
    <Helmet>
      <html lang="hi-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords} />
      <link rel="canonical" href={url} />

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

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="Websbond" />
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Indore, Madhya Pradesh" />
      <meta name="geo.position" content="22.7533;75.8937" />
      <meta name="ICBM" content="22.7533, 75.8937" />

      {/* Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};
