import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Link from 'next/link';
import '../public/css/global.css'

const HandpickedLabs = () => (
    <div>
      <Header/>
      <Content>
        <h1>Oplossing</h1>
        <p>Gedurende dit project ben ik voor een groot deel werkzaam geweest in de fabriek van Perfetti Van Melle in Breda. Tijdens mijn tijd daar ben ik veel te weten gekomen over de manier van werken in de fabriek en met name die van de doelgroep: de operators.</p>
        <Link href="/bijlagen/meelopen-operator">
            <a>Meelopen met operator</a>
        </Link>
        <p>Ik heb gebruikers testen gedaan met de HoloLens app ‘Remote Assist’ en ‘Dynamics 365 Guides’. Beide apps hebben plus- en minpunten, maar toch kunnen ze nu al heel veel meerwaarde bieden voor Perfeti Van Melle.  </p>
        
        <section className="content-section">
            <h3>Remote Assist</h3>
            <div className='img-wrapper'>
                <img className="width-50pr" src="/img/remoteAssist.jpg"/>
            </div>
            <Link href="/">
                <a>Ga naar user-test</a>
            </Link>
        </section>

        <section className="content-section">
            <h3>Dynamics 365 Guides</h3>
            <div className='img-wrapper'>
                <img className="width-50pr" src="/img/Guides.jpg"/>
            </div>
            <Link href="/">
                <a>Ga naar user-test</a>
            </Link>
        </section>

        <section className="content-section">
            <h3>Presentatie</h3>
            <p>Om het project voor Perfetti Van Melle af te ronden heb ik een presentatie gegeven voor leden van het management van de fabriek en iedereen die erbij betrokken is geweest:</p>
            <ul>
                <li>Ko van Belois – CMO (Chief Manufacturing Officer) Perfetti Van Melle</li>
                <li>Michael Hereijgers – Manager Maintenance & Projects Perfetti Van Melle</li>
                <li></li>
                <li></li>
                <li></li>

            </ul>
        </section>

     
    
        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;