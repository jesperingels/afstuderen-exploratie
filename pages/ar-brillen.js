import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import '../public/css/global.css'

const HandpickedLabs = () => (
    <div>
      <Header/>
      <Content>
        <h1>Onderzoek Augmented Reality brillen</h1>

        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/ARBrillen.jpg' />
        </div>

        <h2>Wat is Augmented Reality?</h2>
        <h3>Virtual Reality</h3>
        <p>Om dat goed te kunnen uitleggen is het handig om eerst te begrijpen wat Virtual Reality (VR) eigenlijk precies inhoudt.  

        Bij VR heb je een speciale VR-bril op je hoofd, in deze bril zit vaak een Lcd-scherm met een hoge resolutie. Deze bril bevat een gyroscoop zodat de bewegingen die je maakt met de bril worden vertaald naar de virtuele wereld, hierdoor krijg je het gevoel dat je je echt in de virtuele wereld bevindt.  </p>

        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/VRMedic.gif' />
        </div>

        <h3>Augmented Reality</h3>
        <p>AR (Augmented Reality) bevindt zich eigenlijk tussen de echte wereld en de virtuele wereld. Augmented betekent letterlijk: toegevoegd aan, dus Augmented Reality staat voor toegevoegde Realiteit. Deze toegevoegde Realiteit kun je op meerdere manieren waarnemen, de meeste mensen kennen het van populaire apps op hun telefoon zoals Pokémon Go. De meeste telefoons tegenwoordig hebben de mogelijkheid om AR-objecten te renderen. Dit is leuk als je een keer een spelletje wilt spelen op je telefoon maar in het geval van Perfetti Van Melle is het erg onhandig wanneer je een machine aan het repareren bent en je moet met 1 hand nog een telefoon vasthouden. De immersie van AR via een telefoon is veel lager ten opzichte van de HoloLens.  </p>
        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/ARgif.gif' />
        </div>

        <h2>Verschillende AR-brillen</h2>
        <p>Er is veel concurrentie in de AR en VR-wereld en Microsoft is dan ook niet de enige die een AR-bril heeft gemaakt.  
        Welke verschillende AR-brillen zijn er op dit moment op de markt? (Oktober 2019) 
        Er zijn eigenlijk twee categorieën waarin de brillen geplaatst kunnen worden. De meeste brillen zijn eigenlijk een soort HUD (Heads Up Display). Voorbeelden hiervan zijn: </p>
        
        <h3>Everysight – Raptor</h3>
        <p>Deze bril vormt eigenlijk een HUD voor wielrenners. Ze kunnen live data opslaan en ontvangen via het internet. Deze bril bevat geen krachtige computer en projecteert dus geen echte hologrammen.  </p>
        <div className='img-wrapper'>
            <img className='width-50pr' src='/img/raptor1.jpg' />
            <img className='width-50pr' src='/img/raptor2.jpg' />
        </div>

        <h3>Google glass</h3>
        <p>De google glass is een bril met een klein extra schermpje in je ooghoek waar je naar kunt kijken als je wat extra informatie wilt. De bril is lichtgewicht en dus geschikt om langer te dragen.  </p>
        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/googleGlass.jpg' />
        </div>

        <h3>Meta 2</h3>
        <p>Deze bril is potentieel beter dan de HoloLens, dit komt dan vooral omdat de Meta 2 een groot FOV (field of view) heeft. Bij de HoloLens zie je de Hologrammen alleen direct voor je en niet in je ooghoeken. Bij de Meta 2 zie je ze wel in je ooghoeken maar om zo’n groot FOV te kunnen renderen moet je de bril aan een krachtige computer koppelen met een goede grafische kaart. </p>
        <div className='img-wrapper'>
            <img className='width-33pr' src='/img/meta2.jpg' />
            <img className='width-33pr' src='/img/meta2.1.jpg' />
        </div>

        <h3>ThirdEye Gen-x1/2 </h3>
        <p>Deze bril valt ook in de categorie van de HoloLens, alleen is deze bril veel minder krachtig met een lagere resolutie en een kleiner FOV. Terwijl de HoloLens al een vrij klein FOV heeft.  </p>
        <div className='img-wrapper'>
            <img className='width-33pr' src='/img/thirdeye1.jpg' />
            <img className='width-33pr' src='/img/thirdeye2.jpg' />
        </div>

        <h3>HoloLens</h3>
        <p>De HoloLens heeft een krachtige computer in de bril gebouwd, heeft een kleinere FOV dan de Meta 2. Het grote voordeel van de HoloLens ten opzichte van de Meta 2 is dat de HoloLens niet aangesloten hoeft te worden aan een computer. Perfetti Van Melle maakt in het gehele bedrijf gebruik van de services van Microsoft zoals: Microsoft Teams, Outlook, OneDrive, SharePoint etc. Apps voor de HoloLens communiceren heel makkelijk met de andere apps van Microsoft, zo kun je bijvoorbeeld bestanden delen uit OneDrive en communiceren via Teams. Het feit dat de hardware van de HoloLens de beste in de markt is en het feit dat de bril samenhangt in de services van Microsoft zorgt ervoor dat de HoloLens de beste keuze is voor Perfetti Van Melle.  </p>
        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/HoloLens.png' />
        </div>

        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;