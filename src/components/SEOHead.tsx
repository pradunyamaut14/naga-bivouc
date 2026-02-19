import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: string;
  jsonLd?: object;
}

const SITE_URL = "https://naga-bivouc.lovable.app";
const DEFAULT_OG_IMAGE = "https://naga-bivouc.lovable.app/favicon.png";

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalPath = "/",
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  jsonLd,
}: SEOHeadProps) => {
  const fullTitle = title.includes("Naga Bivouac") ? title : `${title} | Naga Bivouac`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Naga Bivouac" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content="IN-NL" />
      <meta name="geo.placename" content="Kohima, Nagaland" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;

// Reusable JSON-LD for the business
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Naga Bivouac",
  description:
    "Local travel and tour company in Nagaland offering curated tours, trekking, cultural experiences, butterfly watching, and adventure packages across Northeast India.",
  url: "https://naga-bivouc.lovable.app",
  telephone: "+918575185649",
  email: "nagabivouac@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Doviepie Inn, Khonoma",
    addressLocality: "Kohima",
    addressRegion: "Nagaland",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.6539,
    longitude: 94.0267,
  },
  areaServed: [
    "Nagaland",
    "Assam",
    "Meghalaya",
    "Arunachal Pradesh",
    "Manipur",
    "Mizoram",
    "Sikkim",
    "Tripura",
    "Northeast India",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
  sameAs: [
    "https://www.instagram.com/nagabivouac",
  ],
};
