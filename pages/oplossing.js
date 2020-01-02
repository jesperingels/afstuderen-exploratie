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
            <h2>Remote Assist</h2>
            <div className='img-wrapper'>
                <img className="width-50pr" src="/img/remoteAssist.jpg"/>
            </div>
            <Link href="/">
                <a>Ga naar user-test</a>
            </Link>
        </section>

        <section className="content-section">
            <h2>Dynamics 365 Guides</h2>
            <div className='img-wrapper'>
                <img className="width-50pr" src="/img/Guides.jpg"/>
            </div>
            <Link href="/">
                <a>Ga naar user-test</a>
            </Link>
        </section>

        <section className="content-section">
            <h2>Presentatie</h2>
            <p>Om het project voor Perfetti Van Melle af te ronden heb ik een presentatie gegeven voor leden van het management van de fabriek en iedereen die erbij betrokken is geweest:</p>
            <ul>
                <li>Ko van Belois – CMO (Chief Manufacturing Officer) Perfetti Van Melle</li>
                <li>Michael Hereijgers – Manager Maintenance & Projects Perfetti Van Melle</li>
                <li>Marieke Simone – Manufacturing Director Benelux Perfetti Van Melle</li>
                <li>Tim Crucq – Manager Packaging Perfetti Van Melle</li>
                <li>Kees Vuyk Noorland – Technical Manager Perfetti Van Melle</li>
                <li>Johan Deijkers – Manager Industrial Automation Perfetti Van Melle</li>
                <li>Bram Beijer – Group Infrastructure & Cloud Architect IT Perfetti Van Melle</li>
                <li>Guus Huijbers – Shiftmanager Perfetti Van Melle</li>
                <li>Sjoerd van Oosten – Partner/Creative Director Handpicked Agencies</li>
                <li>Samet Yilmaz – Technical Director of Innovations Handpicked Agencies</li>
            </ul>
            <div className='img-wrapper'>
                <img className="width-100pr" src="/img/presentatiePVM.jpg"/>
            </div>
            <p>Iedereen was erg enthousiast over het project na de presentatie. Ik heb bewezen dat het direct ingezet kan worden in de fabriek en een overzicht met waar ze rekening kunnen houden.  
            Na de presentatie heb ik met de opdrachtgever (Ko van Belois) afgesproken om een live demo te gaan houden voor ‘the board of directors’ van Perfetti Van Melle.  </p>
        </section>
        <h3>Live Demo</h3>
        <p>Ko wilde het project pitchen bij ‘the board of directors’ van het bedrijf om zo te kijken of het project verder uitgerold kan worden binnen het bedrijf. Voor deze demo bevond Ko zich in Amsterdam bij een meeting en zou hij een videoverbinding starten via Microsoft Teams op zijn laptop naar de HoloLens in Breda. Ik stond gereed met de HoloLens bij een machine in de fabriek, hij gaf me enkele taken om de machine te besturen en voegde een document met uitleg in. Dit verliep allemaal heel soepel, achteraf vroeg ik hoe hij het vond gaan. Hij vond het een hele goede demo en heeft toestemming gekregen om het project uit te breiden naar Nigeria en Bangladesh!</p>

        <h2>Conclusie</h2> 
        <p>Dit project ben ik begonnen met een onderzoek naar de implementatie van een nieuwe technologie (Augmented Reality) binnen het multinational bedrijf Perfetti Van Melle. Dit was een grote uitdaging aangezien ik het project in m’n eentje uitvoerde. Wel heb ik veel ondersteuning en sturing gekregen van uit Perfetti Van Melle en Handpicked Labs. </p>    
        <p>Uiteindelijk is het resultaat dat ik aan Perfetti Van Melle heb bewezen wat er allemaal mogelijk is met de HoloLens en dat het ook daadwerkelijk bij hun op de werkvloer direct inzetbaar is. In het begin van dit project werd er nog weinig gebruik gemaakt van de HoloLens binnen het bedrijf en nu zelfs de directie van het bedrijf is overtuigd wordt het project verder uitgebreid over de fabrieken van Perfetti Van Melle wereldwijd. Ook lever ik documentatie op aan het bedrijf zodat ze nog steeds met de HoloLens overweg kunnen als ik weg ben.  </p>
        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;