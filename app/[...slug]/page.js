import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { StandardPage } from '../../components/PageSections';
import { LocalBusinessJsonLd, FAQJsonLd } from '../../components/JsonLd';
import { getPageFromParams, absoluteUrl } from '../../lib/helpers';
import { pages } from '../../lib/data';

export async function generateStaticParams() {
  return pages
    .filter((page) => page.slug !== '/')
    .map((page) => ({ slug: page.slug.replace(/^\//, '').replace(/\/$/, '').split('/') }));
}

export async function generateMetadata({ params }) {
  const page = getPageFromParams(params);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: { canonical: absoluteUrl(page.slug) },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: absoluteUrl(page.slug),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.seoTitle,
      description: page.metaDescription,
    },
  };
}

export default function DynamicPage({ params }) {
  const page = getPageFromParams(params);
  if (!page || page.slug === '/') notFound();

  return (
    <div className="site-shell">
      <LocalBusinessJsonLd page={page} />
      <FAQJsonLd items={page.faq || []} />
      <SiteHeader />
      <main className="container">
        <StandardPage page={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
