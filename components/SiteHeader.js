'use client';

import Link from 'next/link';
import { useState } from 'react';
import { mainNav } from '../lib/helpers';
import { siteConfig } from '../lib/data';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = mainNav();

  return (
    <header className="site-header site-header-compact">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <BrandLogo />

            <nav className="nav" aria-label="Primary">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </nav>
          </div>

          <div className="header-actions">
            <ThemeToggle />
            <a className="btn btn-secondary" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            <Link className="btn btn-primary" href="/contact/">Get Quote</Link>
            <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? '×' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-nav">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
