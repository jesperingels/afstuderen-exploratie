import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import '../public/css/global.css'

const Opdracht = () => (
    <div>
      <Header/>
      <Content>
        <h1>Probleemstelling</h1>
        <p>Na onderzoek te hebben gedaan en een gesprek met de opdrachtgever: Ko van Belois – CMO (Chief Manufacturing Officer) bij Perfetti van Melle, blijkt dat hij een toekomstvisie heeft met de HoloLens binnen het bedrijf.  

De mensen die veel kennis hebben over de machines in de fabrieken van Perfetti Van Melle bevinden zich voor een groot deel in Nederland. In Nederland zijn de arbeidskosten erg hoog vergeleken met de rest van de wereld. Dus het liefst worden de arbeidsuren van de medewerkers in de fabriek in Nederland zo efficiënt mogelijk besteed dit is nu nog niet altijd het geval. De opdrachtgever vraagt of ik onderzoek kan doen naar de HoloLens om het volgende vraagstuk op te lossen:  </p>
        <div className='img-wrapper'>
          <img alt="flowchart uitleg" className='width-100pr' src='/img/probleemstelling.png' />
        </div>
        <p>Stel er is een storing met een machine in de fabriek van Perfetti Van Melle in China. Het eerste wat er gebeurt is dat ze daar lokaal het probleem gaan proberen op te lossen. Het kan gebeuren dat het een heel specifiek probleem is waar alleen een expert kennis van heeft. De experts van de machines van Perfetti Van Melle bevinden zich meestal in Nederland en dus bellen ze van China naar Nederland om hulp. Vaak komen ze dan tot de conclusie dat de expert van Nederland naar China moet worden overgevlogen om de machine te repareren. Dit alles brengt natuurlijk hoge kosten met zich mee, hoe kunnen deze kosten bespaard worden?  </p>
      </Content>
      <Footer/>
    </div> 
  );
  
  export default Opdracht;