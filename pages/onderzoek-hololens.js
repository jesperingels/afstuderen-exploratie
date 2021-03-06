import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import '../public/css/global.css'

const OnderzoekHololens = () => (
    <div>
      <Header/>
      <Content>
        <h1>Onderzoek HoloLens</h1>
        <p>De Microsoft HoloLens is de AR-headset van Microsoft die in 2016 is uitgebracht. Wat kun je nu precies met zo’n bril? De bril projecteert hologrammen in het gezichtsveld van de gebruiker, er zit een krachtige computer in de bril die kan verbinden met internet en zo ook data kan versturen en ophalen.  
            <br/>
        <br/>

        In de eerste week dat ik de HoloLens van Perfetti Van Melle kreeg ben ik verschillende apps gaan testen om te onderzoeken wat de mogelijkheden kunnen zijn.  
        </p>

        <div className='img-wrapper'>
          <div className="img-placeholder width-80pr"></div>
          <img alt="HoloLens game" className='width-80pr' src='/img/ARGame.gif'/>
        </div>
        <p>        Dit is een soort platform spel waarbij de objecten in je omgeving de platformen zijn. Wat hier interessant aan is, is dat je dus de omgeving van de gebruiker kunt gebruiken om de app in te renderen. Op deze manier is het spel elke keer anders. </p>
        
        <div className='img-wrapper'>
          <div className="img-placeholder width-80pr"></div>
          <img alt="HoloLens rotatie test" className='width-80pr' src='/img/ScaleRotateOrb.gif'/>
        </div>
        <p>In Unity heb ik verschillende test apps geopend van Microsoft om te kijken wat er mogelijk is. In deze video kun je zien dat je objecten eigenlijk kunt vastpakken en tegelijkertijd kunt roteren, vergroten, en verplaatsen. </p>
        
        <div className='img-wrapper'>
        <iframe width="743" height="418" src="https://www.youtube.com/embed/ZFZTMbU7vY8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <p>De bril ziet de wereld door middel van de ‘spatial mesh’, dit is een soort net wat de HoloLens over de wereld heen legt.  </p>

        <h2>Microsoft Dynamics 365</h2>
        <p>Microsoft heeft een omgeving (Dynamics 365) waarin meerdere apps van Microsoft zich bevinden. De verschillende apps van Microsoft kunnen met elkaar communiceren, dit is erg handig omdat Perfetti Van Melle ook gebruik maakt van de Microsoft services. De verschillende apps in Microsoft Dynamics 365: </p>
        <h3>Remote Assist</h3>
        <iframe width="743" height="418" src="https://www.youtube.com/embed/J-C6GE2gFYw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>De naam zegt het eigenlijk al ‘hulp op afstand’. Met deze software kan bijvoorbeeld de operator van een machine met een deskundige video bellen wanneer er een storing is met de machine. Met de Remote-assist app kan de deskundige van over de hele wereld in real-time aanwijzingen geven. De operator ziet deze aanwijzingen als hologrammen boven de machine zweven. Door holografische pijltjes, animaties en door met de deskundige live te praten is het voor de operator een stuk gemakkelijker om een probleem op te lossen.  </p>
        <p>Bij <a target='blank' href='https://www.youtube.com/watch?v=rbL8H2lyC8Q'>Chevron</a> is de software al in gebruik.</p>

        <h3>Microsoft Layout</h3>
        <iframe width="743" height="418" src="https://www.youtube.com/embed/9viR6U-D2Co" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>Wordt gebruikt om 3D modellen in een lege ruimte te plaatsen om ze te kijken waar ze het best geplaatst kunnen worden. Vergelijkbaar met de <a target='blank' href='https://www.youtube.com/watch?v=vDNzTasuYEw'>AR app</a> van Ikea waarbij je meubels e.d. in je woonkamer kunt zien staan door gebruik te maken van augmented reality. </p>

        <h3>Dynamics 365 Guides</h3>
        <iframe width="743" height="418" src="https://www.youtube.com/embed/V8c3pDKdHEc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>Met deze HoloLens app kunnen gebruikers in augmented reality instructies volgen om bijvoorbeeld te leren hoe een machine zou werken. Met de software kunnen de leraren/deskundigen gemakkelijk instructies in 3D maken om vervolgens in AR gebruikt te kunnen worden. </p>

        <h3>Product Visualize</h3>
        <iframe width="743" height="418" src="https://www.youtube.com/embed/lk2HzxZfkW4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>Toont een product als 3D hologram in een ruimte. De functie van de app is om klanten een idee te geven van de grote van een product en hoe het er uit gaat zien.  </p>


      </Content>
      <Footer/>
    </div> 
  );
  
  export default OnderzoekHololens;