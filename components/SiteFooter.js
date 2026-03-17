import Link from 'next/link';
import { mainNav, servicePages, locationPages } from '../lib/helpers';
import { siteConfig } from '../lib/data';
import BrandLogo from './BrandLogo';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <BrandLogo footer />
          <p style={{marginTop: 16}}>
            Full-service junk removal for furniture, appliances, cleanouts, yard debris, and bulky items in Chattanooga and nearby areas.
          </p>
        </div>

        <div>
          <h4>Main Pages</h4>
          <ul>
            {mainNav().map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Popular Pages</h4>
          <ul>
            {servicePages().slice(0, 4).map((item) => (
              <li key={item.slug}><Link href={item.slug}>{item.title}</Link></li>
            ))}
            {locationPages().slice(0, 2).map((item) => (
              <li key={item.slug}><Link href={item.slug}>{item.title}</Link></li>
            ))}
          </ul>
          <p style={{marginTop: 14}}><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></p>
          <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        </div>
      </div>
    </footer>
  );
}
