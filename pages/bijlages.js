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
        <div className="bijlage-wrapper">
          <Link href="/bijlagen/meelopen-operator">
              <a>Verslag: Meelopen met operator</a>
          </Link>
          <Link href="/bijlagen/teamoverleg-hololens">
              <a>Verslag: Teamoverleg HoloLens</a>
          </Link>
          <Link href="/bijlagen/remote-assist-usertest">
              <a>Video: Remote assist usertest</a>
          </Link>

          <a href="https://1drv.ms/v/s!AhqyORz698OHgt0z7iTz039aYQ8BIw">Video: Presentatie bij Perfetti Van Melle</a>
          <a href="https://1drv.ms/v/s!AhqyORz698OHgt9ZkHWwH51GY6aEKA">Video: Proof of Concept</a>

          <Link href="/bijlagen/aantekeningen-begeleiding">
              <a>Aantekeningen: Begeleiding</a>
          </Link>

          <Link href="/bijlagen/deelvraag-iteraties">
              <a>Iteratie slagen deelvraag</a>
          </Link>

          <Link href="/bijlagen/interview-kovanbelois">
              <a>Interview: opdrachtgever: Ko van Belois</a>
          </Link>

          <a href="https://docs.google.com/document/d/1ouipwMRTl4mdCz5cqv7szhENWir8486ncfmZCW63hpU/edit?usp=sharing">Eerste test Remote Assist bij Handpicked Labs</a>

          <a href="https://1drv.ms/p/s!AhqyORz698OHgt16-fM52w9xWPKgBA">Powerpoint Groenlicht presentatie</a>
          <a href="https://1drv.ms/p/s!AhqyORz698OHgt0veLr5_2vuGIvxJQ">Powerpoint Perfetti Van Melle presentatie</a>

        </div>

      </Content>
      <Footer/>
    </div> 
  );
  
  export default Bijlage;