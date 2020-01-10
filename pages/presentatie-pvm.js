import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Link from 'next/link';
import '../public/css/global.css'

const HandpickedLabs = () => (
    <div>
      <Header/>
      <Content>
        <h1>Project presentatie @Perfetti Van Melle</h1>

        <div className='img-wrapper'>
            <img alt="presentatie bij perfetti van melle" className='width-80pr' src='/img/presentatiePVM.jpeg' />
        </div>
        <a href="https://1drv.ms/v/s!AhqyORz698OHgt0z7iTz039aYQ8BIw">Presentatie video bij Perfetti Van Melle</a>
        <a href="https://1drv.ms/u/s!AhqyORz698OHgt0x3pG-Ppxy_FRxPg?e=bfBtBK">Powerpoint presentatie link</a>

        <p>Na mijn onderzoek bij Perfetti van Melle heb ik mijn bevindingen gepresenteerd voor het management en alle betrokkenen in de fabriek. Na de presentatie was iedereen erg enthousiast en willen ze in de fabriek graag aan de slag met de HoloLens. </p>

        
        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;