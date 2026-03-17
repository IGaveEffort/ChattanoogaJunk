import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { HomePage } from '../components/PageSections';
import { LocalBusinessJsonLd, FAQJsonLd } from '../components/JsonLd';
import { getPageBySlug } from '../lib/helpers';

export default function Home() {
  const page = getPageBySlug('/');

  return (
    <div className="site-shell">
      <LocalBusinessJsonLd page={page} />
      <FAQJsonLd items={page.faq || []} />
      <SiteHeader />
      <main className="container">
        <HomePage page={page} />
      </main>
      <SiteFooter />
    </div>
  );
}
