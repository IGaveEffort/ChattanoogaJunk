import Link from 'next/link';

export default function BrandLogo({ footer = false }) {
  const lightSrc = footer ? '/logos/footer-light.png' : '/logos/header-light.png';
  const darkSrc = footer ? '/logos/footer-dark.png' : '/logos/header-dark.png';

  return (
    <Link href="/" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Chattanooga Junk Removal">
      <span className="logo-wrap logo-full" aria-hidden="true">
        <img src={lightSrc} alt="" className="logo logo-light" />
        <img src={darkSrc} alt="" className="logo logo-dark" />
      </span>
      <span className="logo-wrap logo-icon-only" aria-hidden="true">
        <img src={lightSrc} alt="" className="logo logo-light" />
        <img src={darkSrc} alt="" className="logo logo-dark" />
      </span>
    </Link>
  );
}
