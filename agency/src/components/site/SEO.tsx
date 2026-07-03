import { Helmet } from "react-helmet-async";

const SITE_URL = "https://websbond.com";
const OG_IMAGE = "https://websbond.com/og-image.jpg";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
  ogImage?: string;
  /** Set "en" for English pages, "hi" for Hindi-heavy pages. Defaults to "en". */
  lang?: "en" | "hi";
  /** Optional breadcrumb items for BreadcrumbList schema — auto-generated if provided */
  breadcrumbs?: { name: string; path: string }[];
  /** Set for blog articles — adds article-specific meta */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
}

export const SEO = ({ title, description, path, jsonLd, ogImage, lang = "en", breadcrumbs, article }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const img = ogImage || OG_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // Auto-generate BreadcrumbList if breadcrumbs provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    const itemListElement = breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    }));
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    });
  }

  return (
    <Helmet>
      <html lang={lang === "hi" ? "hi" : "en"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Hreflang for bilingual content */}
      <link rel="alternate" href={url} hrefLang={lang === "hi" ? "hi" : "en"} />
      <link rel="alternate" href={url} hrefLang="x-default" />

      {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION && (
        <meta name="google-site-verification" content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Websbond" />
      <meta property="og:locale" content={lang === "hi" ? "hi_IN" : "en_IN"} />

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

      {/* Article-specific meta */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.tags?.map((tag, i) => (
            <meta key={i} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Geo tags */}
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
