import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import '../../public/css/global.css'

const Meelopen  = () => (
    <div>
      <Header/>
      <Content>
        <h1>Meelopen met operator</h1>
        <p>
            <strong>Donderdag 10 oktober</strong><br/>
            Vandaag loop ik mee met Peng-an, aan de inpaklijn die eigenlijk alleen maar produceert voor Japan. In Japan worden strenge kwaliteitseisen aan de mentos gesteld, hierdoor is het hard werken aan de machine en moet elk rolletje perfect zijn. Als de rol ook maar een paar millimeter verkeerd is gevouwen en er is een kans dat de foute rolletjes ook verderop in het inpak-proces aanwezig zijn, dan wordt de gehele batch geannuleerd en moet er steekproefsgewijs gekeken worden of alles bestempeld moet worden als afval. 
        </p>

        <p>De operator moet elke 10 minuten, 30 minuten en elk uur 3 verschillende controles uitvoeren. Dit terwijl de machine heel vaak stil ligt vanwege storingen, en ze dus de machine weer aan de praat moeten krijgen. </p>
        
        <p><strong>Inpak-proces</strong> 
        <br/>
        Het inpak-proces bestaat eigenlijk uit 4 delen en 3 machines. 
        In het eerste deel worden de mentos snoepjes in een rol gewikkelt van 14 snoepjes. Eerst wordt er een folie omheen gewikkelt waar alluminium in is verwerkt. Deze wordt op zeer hoge snelheden dichtgevouwen en dicht gesmolten. De rol wordt gelabeld door er een bepaalde code op te laserprinten. In de code staat de productiedatum, de productielocatie en tot wanneer hij houdbaar is. 
        </p>

        <p>Vervolgens worden de rolletjes in 2 lagen opgestapeld en in een doosje gevouwen van 12 rollen per doosje. Dit doosje noemen ze het showmodel doosje.
            <br/>
            De derde stap is om een doorzichtig plastic verpakking om het doosje te vouwen. 
        </p>
        <p>In de laatste stap worden de showmodel doosjes opgestapeld in een grote kartonnen doos en deze wordt vervolgens met een lift op een circuit gezet naar de palletiser afdeling. Hier worden de dozen door grote robot armen opgestapeld en ingepakt voor transport met de vrachtwagen. </p>
        <p>Gedurende de verschillende stappen van het inpak-proces wordt er d.m.v. sensoren gemeten waar de producten zich bevinden en zodra er ergens te veel of te weinig producten in de wachtrij staan wordt het gehele proces stilgelegd. </p>
        
        <p><strong>Taken van de operator</strong>
        <br/>
        Peng-an is een B-operator en mag wat meer werkzaamheden verrichten aan de machine dan andere operators. Het verschilt per operator of de managers het vertrouwen hebben om diegene bepaalde werkzaamheden te laten verrichten. Zo ging Peng-an een onderdeel van de machine schoonmaken. Normaal gesproken zou een operator zoals hij een C-operator of monteur moeten roepen om dit onderdeel los en vast te koppelen. Het schoonmaken zelf mag hij sowieso doen, want dat is verder niet heel moeilijk. 
        </p>
        <p><strong>Storing</strong>
        <br/>
        Terwijl ik meeliep met Peng-an was er een grote storing met de machine, omdat de mentos snoepjes allemaal een millimeter te dik waren. Als gevolg waren de rolletjes net iets te breed waardoor je net een millimeter wit gekleurd folie kon zien aan de zijkanten. Voor Japan moet elk rolletje en mentosje perfect zijn en dus moest het hele proces gestopt worden. Vervolgens gaan ze bij de palletiser afdeling steekproeven in de verpakte dozen mentos doen om te kijken of er fouten tussen zitten. Als ze teveel fouten tegenkomen moet alles geannuleerd worden. 
        </p>

        <p><strong>Data</strong>
        <br/>
        Op de computer verschijnt bij de operators een melding met de vraag waarom er een storing is geweest. De operators moeten deze invullen met de precieze reden waarom er een storing was. Dit wordt allemaal lokaal opgeslagen in een database, verder wordt er niks met deze data gedaan. Verder moeten de operators bij elke periodieke steekproef die ze uitvoeren aangeven hoeveel snoepjes er fout zijn en wat er fout aan is. Deze data wordt ook opgeslagen, maar wordt verder op het gebied van ICT niks mee gedaan. 
        </p>

      </Content>
      <Footer/>
    </div> 
  );
  
  export default Meelopen;