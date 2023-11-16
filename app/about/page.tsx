import Link from 'next/link';

function AboutPage() {
  return (
    <div>
      {/* Header with Navigation Links */}
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
Home              </Link>
            </li>
            <li>
              <Link href="/about">
About              </Link>
            </li>
            <li>
              <Link href="/blog">
Blog              </Link>
            </li>
            <li>
              <Link href="/contact">
Contact              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <h1>Welcome to My Next.js Website - About Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla turpis ut risus venenatis, at bibendum libero finibus.
          Nullam eu erat nec mi gravida pharetra.
        </p>
      </main>
    </div>
  );
}

export default AboutPage;
