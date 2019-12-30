import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Link from 'next/link';
import '../public/css/global.css'

const Bijlage = () => (
    <div>
      <Header/>
      <Content>
        <h1>Bijlage</h1>
        <Link href="/bijlagen/meelopen-operator">
            <a>Meelopen met operator</a>
        </Link>

      </Content>
      <Footer/>
    </div> 
  );
  
  export default Bijlage;