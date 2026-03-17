import { absoluteUrl } from '../lib/helpers';
import { siteConfig } from '../lib/data';

export function LocalBusinessJsonLd({ page }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: siteConfig.siteName,
    url: absoluteUrl(page?.slug || '/'),
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chattanooga',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    description: page?.metaDescription || 'Fast junk removal and cleanouts in Chattanooga and nearby areas.',
    serviceType: 'Junk Removal',
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQJsonLd({ items = [] }) {
  if (!items.length) return null;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
