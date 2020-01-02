import Link from 'next/link';

const Navigation = (props) => (
    <nav className="navigation">
        {props.children}
        <Link href="/opdracht">
            <a>Opdracht</a>
        </Link>
        <Link href="/probleemstelling">
            <a>Probleemstelling</a>
        </Link>
        <Link href="/oplossing">
            <a>Oplossing</a>
        </Link>
    </nav>
  );
  
  export default Navigation;