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
        <Link href="/bijlagen/teamoverleg-hololens">
            <a>Teamoverleg HoloLens</a>
        </Link>
        <Link href="/bijlagen/remote-assist-usertest">
            <a>Remote assist usertest video</a>
        </Link>
        <a href="https://1drv.ms/v/s!AhqyORz698OHgt0z7iTz039aYQ8BIw">Presentatie video bij Perfetti Van Melle</a>

      </Content>
      <Footer/>
    </div> 
  );
  
  export default Bijlage;