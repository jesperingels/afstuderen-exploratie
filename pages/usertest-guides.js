import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Link from 'next/link';
import '../public/css/global.css'

const HandpickedLabs = () => (
    <div>
      <Header/>
      <Content>
        <h1>Gebruikerstest - Dynamics 365 Guides</h1>

        <div className='img-wrapper'>
            <img alt="vrouw gebruikt guides" className='width-80pr' src='/img/guides3.png' />
        </div>

        <h3>Wat is de Guides app? </h3>
        <p>Met deze app voor de HoloLens kunnen operators in de fabriek heel gemakkelijk en duidelijk instructies volgen voor bijvoorbeeld het sleutelen aan machines. Deze instructies worden in elkaar gezet door een expert van de machine. Elke stap wordt ondersteund door: tekst, foto’s, video, en hologrammen. De tekst, foto’s en video bevinden zich in het venster waar de operator doorheen kan bladeren. De hologrammen bevinden zich op de machine zelf.  </p>

        <h2>Hoe werkt de Guides app?</h2>
        <p>De app heeft twee kanten: Author en Operator. </p>

        <h3>Author</h3>
        <p>De Author is in dit geval de expert van de machine en zet dus van begin tot eind de ‘guide’ in elkaar. Dit begint op computer in de Guides desktopapplicatie. Hierin kun je alle stappen en taken aanmaken, foto’s en video’s invoegen. Deze stappen kunnen altijd nog worden aangepast en geüpdatet worden. Wanneer de Author klaar is met het instellen van de ‘guide’ wordt het automatisch opgeslagen en geüpload naar een database. </p>

        <div className='img-wrapper'>
            <img alt="flowchart" className='width-50pr' src='/img/author-database.jpg' />
        </div>
        <p>Als laatste stap moet de Author de hologrammen bij de machine plaatsen bij de juiste stap. Dit gehele proces wordt constant opgeslagen en geüpdatet naar de database. </p>
        <div className='img-wrapper'>
            <img alt="plaats hologram" className='width-80pr' src='/img/GuidesPlaceHologram.gif' />
        </div>

        <h3>Operator</h3>
        <p>Voor de operator is het een stuk makkelijker dan de Author. Je opent de juiste Guide en navigeert door de verschillende stappen door enkel naar de knop ‘next’ te kijken. Verder is het gewoon een kwestie van de instructies opvolgen met behulp van uitleg en de hologrammen op de machine.</p>
        <div className='img-wrapper'>
            <img alt="hover over knop" className='width-50pr' src='/img/Gaze.gif' />
            <img alt="selecteer operator" className='width-50pr' src='/img/SelectOperator.gif' />
        </div>

        <h3>Waarom de Guides app?</h3>
        <p>In de fabriek heb ik meegelopen bij de flowpack-machine deze machine wikkelt de doosjes Mentos in met een doorzichtige folie. Bij de verschillende bestellingen kan de hoogte van de doosjes verschillen en moet de machine anders worden ingesteld en onderdelen vervangen. De handelingen hiervoor zijn vaak hetzelfde maar de operators hebben niet genoeg kennis van de machine om dit zelf te kunnen doen en moet de ombouw dus door een monteur worden gedaan. Monteurs zijn schaars en hebben het vaak druk in de fabriek. Dus zou het geweldig zijn als elke operator met behulp van de HoloLens en de Guides app elke machine kan gaan ombouwen. Ook voor nieuwe operators is het een mooie tool om met machines te leren werken.</p>
        
        <h2>User-test</h2>
        <p>Voor de Usertest met de Guides app heb ik Wim gevraagd die naast me zat op het kantoor bij Perfetti Van Melle. Wim gaat over de arbeidsveiligheid binnen het bedrijf, hij is 66 jaar en had bij de test geen kennis van de flowpack-machine en ook niet van de HoloLens. Dit was een goed testpersoon omdat het idee van de Guides app is dat iedereen die de instructies volgt een machine kan ombouwen. </p>
        <p>Voordat de test was begonnen had ik er zelf weinig vertrouwen in, omdat het best even wennen is om een HoloLens te gebruiken. Ondanks mijn verwachtingen is de test erg goed verlopen! 
        De grootste rede waardoor Wim vrij soepel met de app en de bril kon omgaan is omdat er in de app geen gebruik gemaakt hoeft te worden van ‘air-tappen’.  Air-tappen is een ‘klik gebaar’ wat je kunt maken om hologrammen vast te pakken en om op knoppen te klikken. Bij de Guides app hoef je alleen maar naar een knop te kijken om naar de volgende stap te gaan. </p>
        
        <h3>Wat viel op?</h3>
        <p><i>Volgende stap: </i>Wim begreep soms niet wanneer hij nu naar de volgende stap moest gaan, dus het is belangrijk dat er bij het instellen van de guide duidelijk vermeld staat wanneer je naar een volgende stap kunt gaan.</p>
        <p><i>Instructies: </i>Een mooi voorbeeld van fouten waar je alleen achter komt door te usertesten is bij de afstelkop van de foliestang (zie foto hieronder). In de instructies staat dat de kop op stand 40 moet worden gezet, vervolgens zet Wim de kop op stand 40 maar dan met de achterkant van de kop op stand 40. Waardoor de voorkant van de kop dus op stand 36 staat. Les die ik hier uit leer is dat je superduidelijk moet zijn bij het schrijven van de instructies. </p>
        
        <div className='img-wrapper'>
            <img alt="machine onderdeel" className='width-80pr' src='/img/afstelkop.jpg' />
        </div>

        <h3>Uitleg Guides app - Author</h3>
        <iframe width="743" height="418" src="https://www.youtube.com/embed/DnAVDg1NZwY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <h3>Uitleg Guides app - Operator</h3>
        <iframe width="743" height="418" src="https://www.youtube.com/embed/gE7BjFdVocM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;