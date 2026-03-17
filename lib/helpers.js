import { pages, siteConfig } from '@/lib/data';

export function getPageBySlug(slug) {
  const normalized = slug === '/' ? '/' : `/${slug.replace(/^\/+|\/+$/g, '')}/`;
  return pages.find((page) => page.slug === normalized) || null;
}

export function getPageFromParams(params) {
  const path = params?.slug?.length ? `/${params.slug.join('/')}/` : '/';
  return getPageBySlug(path);
}

export function absoluteUrl(path = '/') {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return `${siteConfig.domain}${clean}`;
}

export function mainNav() {
  return [
    { href: '/', label: 'Home' },
    { href: '/about/', label: 'About' },
    { href: '/pricing/', label: 'Pricing' },
    { href: '/service-areas/', label: 'Service Areas' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/business-contact/', label: 'Business' },
    { href: '/contact/', label: 'Contact' },
  ];
}

export function servicePages() {
  return pages.filter((page) => page.type === 'service');
}

export function locationPages() {
  return pages.filter((page) => page.type === 'location');
}
