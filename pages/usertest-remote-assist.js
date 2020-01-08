import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Link from 'next/link';
import '../public/css/global.css'

const HandpickedLabs = () => (
    <div>
      <Header/>
      <Content>
        <h1>Gebruikerstest - Remote Assist</h1>

        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/test-opzet.jpg' />
        </div>

        <h2>Wat is Remote Assist?</h2>
        <p>Remote Assist is een applicatie die binnen de Microsoft omgeving ‘Dynamics 365’ hangt. Met deze app voor de HoloLens kun je een videoverbinding starten met iemand die zich achter een computer/laptop of smartphone bevindt en met iemand die de HoloLens draagt. Remote Assist werkt samen met ‘Microsoft Teams’, dit programma wordt vooral gebruikt voor interne communicatie: vergaderingen, chatten, bestanden delen, video-bellen etc. In de fabriek bij Perfetti Van Melle kan een monteur in Nederland ‘Microsoft Teams’ gebruiken en een videoverbinding te starten met een operator die in China de HoloLens op heeft.  </p>
        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/ra-example.jpg' />
        </div>
        <h3>Hoe werkt het?</h3>
        <p>De expert ziet op zijn laptop de live beelden vanuit de camera van de Hololens. en de Operator met de Hololens ziet de expert in een venster boven de machine zweven. De operator legt uit wat er mis is met de machine en laat zien waar in de machine het fout gaat door er met de Hololens naar te kijken. De expert kan op verschillende manieren gaan uitleggen wat de operator moet doen om de machine te repareren. Allereerst kan de expert natuurlijk met de operator praten, waarmee je al een heel eind bent. De expert kan ook pijlen neerzetten op de machine om aan te wijzen waar de operator een actie moet ondernemen. Ook is er een verbinding met Microsoft Onedrive, zodat de expert bestanden naar de operator kan sturen die bepaalde zaken kunnen uitleggen en verduidelijken. De operator kan de bestanden zelf ergens vastzetten in de ruimte om hem heen door de vensters vast te pakken en te verslepen. </p>

        <h2>Test uitvoering</h2>
        <h3>Doelstelling</h3>
        <ul>
            <li>Testen van de kwaliteit van de Remote Assist applicatie voor de Hololens in samenwerking met de PC applicatie Microsoft Teams. </li>
            <li>Kan een monteur duidelijk informatie overbrengen via de applicatie?</li>
        </ul>

        <h3>Opstelling</h3>
        <p><strong>Operator:</strong><br/>
            - Hololens<br/>
            - Koptelefoon met microfoon<br/>
            - Haarnetje<br/>
            - Eigen veiligheidsbril op sterkte<br/>
        </p>

        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/operator-test1.jpg' />
        </div>

        <p><strong>Monteur</strong><br/>
            - HP laptop<br/>
            - Applicatie Microsoft Teams<br/>
            - OBS-studio (voor schermopname)<br/>
            - Koptelefoon met Microfoon<br/>
            - Computermuis<br/>
            - Internetkabel
        </p>

        <div className='img-wrapper'>
            <img className='width-80pr' src='/img/monteur-test2.jpg' />
        </div>

        <h3>Opmerkingen</h3>
        <ul>
            <li>Wifi kwaliteit was niet overal in de fabriek even goed </li>
            <li>Het lukte Gaby (Operator) niet altijd even goed om het videoscherm vast te zetten en/of te verslepen. </li>
            <li>De app op de Hololens werd onverwachts afgesloten zonder dat de Operator hier opdracht voor gaf. </li>
            <li>Monteur moet begrijpen dat de pijlen zo goed mogelijk op een duidelijk oppervlakte geplaatst moeten worden. Zodat de pijlen voor de operator ook in 3D daadwerkelijk naar de juiste positie wijzen. </li>
            <li>Als een operator de vaktermen van de monteur niet kent kan de monteur een uitleg van de begrippen invoegen met ‘OneDrive’. </li>
        </ul>

        <h3>Voordelen</h3>
        <ul>
            <li>Ook bij een zeer slechte internet verbinding is het nog mogelijk om een videoverbinding te behouden. Wel ten koste van de videokwaliteit. </li>
            <li>Met behulp van een koptelefoon + microfoon voor zowel de operator als de monteur kunnen beide partijen elkaar goed verstaan. Zelfs luide machinegeluiden. </li>
            <li>Het is wel gelukt om duidelijk te maken welke boutjes en schroefjes er los gedraaid moesten worden.</li>
        </ul>

        <h3>Nadelen</h3>
        <ul>
            <li>De Operator wordt gestuurd in de ruimte door te zeggen kijk links, kijk rechts.</li>
            <li>Het videobeeld/hologram zit vaak in de weg op de plek waar de monteur een pijl wilt tekenen. </li>
            <li>Er waren geen onderdelen bij de test aanwezig waardoor de ombouw niet juist en compleet kon worden uitgevoerd. </li>
        </ul>

        <h3>Verbeteringen</h3>
        <ol>
            <li>Genummerde pijlen, zou helpen met het communiceren waar de Operator moet werken.</li>
            <li>Een Real-time spiegeling van de computermuis in het beeld van de operator. Want het werken met de pijlen door eerst het scherm te bevriezen werkt moeizaam. De Monteur moet de moet het scherm zien te bevriezen op het juiste moment om de pijl op de juiste plek te plaatsen. </li>
            <li>Gaby geeft aan dat ze het fijn zou vinden om zelf ook pijlen weg te kunnen halen. Persoonlijk denk ik dat het goed is dat die ene niet de pijlen van de ander kan weghalen, om verwarring te voorkomen. </li>
        </ol>

        <iframe width="743" height="418" src="https://www.youtube.com/embed/y3hod6Z-Cfc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        <Link href="/bijlagen/remote-assist-usertest">
            <a>Volledige usertest</a>
        </Link>

        <h2>Conclusie</h2>
        <p><strong style={{color: 'green'}}>Goed</strong><br/>
        <i>Geluid:</i> Het geluid was eerst een probleem, omdat er veel lawaai van machines op de werkvloer was. De operator en monteur konden elkaar niet verstaan en de operator kon niks horen uit de standaard luidsprekers die op de HoloLens zitten.  

        De test hierop heb ik een game-headset van thuis meegenomen, de headset is wel een beetje groot en onhandig maar de monteur en operator konden elkaar heel goed verstaan. In het vervolg kan de ICT-afdeling van Perfetti Van Melle een headset regelen die wat meer lichtgewicht is zodat het voor de operator wat comfortabeler is.  
        </p>

        <p><i>Internet:</i> De internetverbinding is niet overal in de fabriek aanwezig, hiervoor moest er een extra router worden opgehangen bij de machine waar ik mijn tests uitvoerde. De Remote Assist applicatie past automatisch de kwaliteit van de video en audio aan naar een lagere kwaliteit als het internet verslechterd hierdoor blijft de verbinding zelf wel stabiel.  </p>

        <p><i>Communicatie:</i> De communicatie verliep in het begin wat stroef maar nadat de operator en monteur de manier van communiceren gewend waren verliep het vrij soepel.  

        </p>

        <p><strong style={{color: 'orange'}}>Kan beter</strong><br/>
        <i>Pijlen:</i> Het plaatsen van de hologram pijlen in de wereld van de HoloLens lukt niet altijd. Dit komt door de technologische capaciteiten en limieten van de HoloLens. De HoloLens ziet de wereld door een soort net over objecten heen te leggen dit net heet: ‘Spatial Mesh’. Hieronder een video die het wat beter uitlegt. 
        </p>

        <iframe width="743" height="418" src="https://www.youtube.com/embed/ZFZTMbU7vY8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        <p><strong style={{color: 'red'}}>Slecht</strong><br/>
        <i>Comfort:</i> Het comfort van de HoloLens is erg slecht, nadat de operator de bril een uur lang ophad gaf hij aan dat het pijn begon te doen en moesten we even stoppen. Dit slechte comfort komt onder andere omdat het frame van de bril van metaal is gemaakt en de batterij en alle rekenkracht voor in de bril zit. In de HoloLens 2 die ondertussen ook is uitgebracht hebben ze aanpassingen gemaakt om het comfort te verbeteren. De HoloLens 2 is gemaakt van ‘Carbon Fiber’ en de batterij bevindt zich achter op het hoofd zodat het gewicht beter verdeeld is.  
        </p>
        <p><i>Camera snelheid:</i> Onbewust bewegen mensen veel met hun hoofd als ze ergens mee bezig zijn, zoals een reparatie van een machine. Wanneer je de HoloLens op je hoofd hebt en er probeert iemand mee te kijken is dit niet zo handig. Bij het testen gaf de monteur die mee kijken op zijn laptop dus aan dat hij er bijna misselijk van werd, omdat het beeld zoveel en zo snel beweegt. Dit is snel verholpen als de operator zich hier bewust van is en dus langzaam met de bril beweegt.  </p>
        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;