import Link from 'next/link';
import './styles/globals.css';

export const metadata = {
  title: 'Moja aplikacja',
  description: 'Strona stworzona w Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <header>
          <nav className="nav">
            <Link href="/lab7" className="nav-link">Lab 7</Link>
            <Link href="/lab8" className="nav-link">Lab 8</Link>
            <Link href="/lab9" className="nav-link">Lab 9</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; Lab9. Posim Andrzej 20475.</p>
        </footer>
      </body>
    </html>
  );
}
