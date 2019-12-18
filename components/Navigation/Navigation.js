import Link from 'next/link';

const Navigation = () => (
    <nav>
        <Link href="/assignment">
            <a>Assignment</a>
        </Link>
        <Link href="/solution">
            <a>Solution</a>
        </Link>
    </nav>
  );
  
  export default Navigation;