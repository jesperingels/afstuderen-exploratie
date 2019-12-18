import Navigation from '../Navigation/Navigation'
import Link from 'next/link';
import './Header.css'

const Header = () => (
    <header>
        <div className='Logo'>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
        <Navigation/>
    </header>
  );
  
  export default Header;