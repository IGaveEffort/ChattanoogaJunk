import './globals.css';
import { siteConfig } from '../lib/data';

const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = saved || (systemDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export const metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: 'Fast junk removal, bulky item pickup, and cleanouts in Chattanooga and nearby areas.',
  icons: {
    icon: [
      { url: '/logos/favicon-light.png', media: '(prefers-color-scheme: light)', type: 'image/png' },
      { url: '/logos/favicon-dark.png', media: '(prefers-color-scheme: dark)', type: 'image/png' },
    ],
    shortcut: [
      { url: '/logos/favicon-light.png', media: '(prefers-color-scheme: light)', type: 'image/png' },
      { url: '/logos/favicon-dark.png', media: '(prefers-color-scheme: dark)', type: 'image/png' },
    ],
    apple: [
      { url: '/logos/favicon-light.png', media: '(prefers-color-scheme: light)', type: 'image/png' },
      { url: '/logos/favicon-dark.png', media: '(prefers-color-scheme: dark)', type: 'image/png' },
    ],
  },
  openGraph: {
    title: siteConfig.siteName,
    description: 'Fast junk removal, bulky item pickup, and cleanouts in Chattanooga and nearby areas.',
    url: siteConfig.domain,
    siteName: siteConfig.siteName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteName,
    description: 'Fast junk removal, bulky item pickup, and cleanouts in Chattanooga and nearby areas.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
