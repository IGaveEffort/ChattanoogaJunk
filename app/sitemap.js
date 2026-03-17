import { pages } from '../lib/data';
import { absoluteUrl } from '../lib/helpers';

export default function sitemap() {
  return pages.map((page) => ({
    url: absoluteUrl(page.slug),
    changeFrequency: 'weekly',
    priority: page.slug === '/' ? 1 : 0.8,
  }));
}
