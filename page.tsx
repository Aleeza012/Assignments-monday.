import Link from 'next/link';

export default function Home() {
  return (
    <div>
            <h1><b>Welcome to my 3rd Assignment</b></h1>
            <nav>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/footer">Footer</Link></li>
                </ul>
            </nav>
        </div>
  );
}
