import Link from "next/link";
export function Header() {
  return <header className="site-header">
    <Link href="/" className="brand"><span>PH</span><strong>Pangasinan Heritage</strong></Link>
    <nav aria-label="Main navigation">
      <Link href="#heritage">Heritage</Link><Link href="#about">About</Link><Link href="#visit">Plan a Visit</Link>
    </nav>
  </header>;
}
