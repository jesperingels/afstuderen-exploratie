import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import '../public/css/global.css'

const HandpickedLabs = () => (
    <div>
      <Header/>
      <Content>
        <h1>Start bij Handpicked Labs</h1>
        <div className='img-wrapper'>
            <img className='width-50pr' src='/img/handpickedLabs.png' />
            <img className='width-50pr' src='/img/BoldlyLogo.png' />
        </div>
        <p>Handpicked Labs kun je zien als de R&D-afdeling voor alle labels binnen Handpicked Agencies. Dit project is in samenwerking met het label: Boldly-XR, dit label specialiseert zich in Virtual Reality (VR), Augmented Reality (AR) en alles wat daarbij komt kijken. Bij alle vragen die ik had omtrent AR kon ik daarvoor terecht bij Boldly-XR. </p>
        <h2>Unity Ontdekken</h2>
        <div className='img-wrapper'>
            <img className='width-50pr' src='/img/unity-logo.png' />
        </div>
        <p>In de eerste maand van mijn afstudeerproject heb ik bij Handpicked Labs op het kantoor gewerkt aan mijn project, omdat Perfetti Van Melle nog wat zaken moest regelen voordat ik een werkplek had op de fabriek. Tijdens deze periode bij Handpicked Labs had ik bedacht dat ik zelf een app wilde gaan bouwen voor Perfetti Van Melle. Unity is het programma om te ontwikkelen voor AR en VR, dus besloot ik om dit te gaan leren zodat ik zelf een app kon programmeren voor de HoloLens op het moment dat ik bij Perfetti Van Melle aan de slag zou gaan.  </p>
        <p>Gedurende deze weken heb ik veel geleerd over de technologie achter AR en ook hoe ik apps kan maken voor de HoloLens. Wel ben ik erachter gekomen dat het heel veel tijd zou gaan kosten om een bruikbare app te ontwikkelen voor Perfetti Van Melle. </p>
        <div className='img-wrapper'>
            <img className='width-50pr' src='/img/unity1.jpg' />
            <img className='width-50pr' src='/img/unity2.jpg' />
        </div>
        <p>Voordat ik in de fabriek aan de slag ging heb ik een gesprek gehad samen met Ko van Belois (CMO Perfetti Van Melle) Sjoerd van Oosten en Samet Yilmaz (begeleiders Handpicked Labs). Ik heb me op dit gesprek voorbereid door een vragenlijst op te stellen. Het was lastig om deze vragenlijst op te stellen, dus heb ik gebruik gemaakt van een van de ‘Codesignmethods’ van Kim van Veldhuijzen en Robin van Zessen. Om me voor te bereiden op dit gesprek waar ik veel informatie uit kon halen heb ik gebruik gemaakt van ‘Assumption Mapping’.  </p>
        <h3>Mijn online schetsboek / Brainstormen</h3>
        <iframe width="100%" height="400px" src="https://miro.com/app/embed/o9J_kwpB7Fg=/?" frameborder="0" scrolling="no" allowfullscreen></iframe>        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;