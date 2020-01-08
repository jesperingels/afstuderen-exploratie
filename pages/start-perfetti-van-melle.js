import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Link from 'next/link';
import '../public/css/global.css'

const HandpickedLabs = () => (
    <div>
      <Header/>
      <Content>
        <h1>Start bij Perfetti Van Melle</h1>
        <div className='img-wrapper'>
            <img className='width-100pr' src='/img/start-pvm.jpg' />
        </div>
        <p>Op het planbureau liep ik dan rond in de lucht te tikken, dit vonden de medewerkers bij Perfetti Van Melle maar een raar gezicht en dat lieten ze ook merken. Als ik eenmaal met enthousiasme begin uit te leggen wat de bril doet en wat het bedrijf eraan zou kunnen hebben beginnen ze er meer begrip voor te hebben.  </p>
        <p>Binnen het bedrijf was mijn contactpersoon en begeleider: Tim Crucq. Hij heeft me veel geholpen tijdens mijn onderzoek, om te achterhalen waar de kansen liggen en waar de HoloLens echt het verschil kan maken. In het begin heb ik meerdere keren het ochtendoverleg bijgewoond. </p>
        
        <div className='img-wrapper'>
            <img className='width-33pr' src='/img/oc1.jpg' />
            <img className='width-33pr' src='/img/oc2.jpg' />
            <img className='width-33pr' src='/img/oc3.jpg' />
        </div>

        <p>Tijdens dit overleg heb ik de mensen kunnen uitleggen wat de HoloLens is en wat ik precies op de werkvloer ga doen. Binnen het bedrijf is het erg handig om veel mensen te kennen, zeker met het onderzoek wat ik deed moest ik veel regelen om de testen door te laten gaan.  

 

In mijn eerste week heb ik een rondleiding door de fabriek gekregen. Het is heel bijzonder hoe alles geautomatiseerd wordt in het productieproces.  </p>

<p>Om het onderzoek te kunnen uitvoeren binnen een fabriek moesten er wat afspraken gemaakt worden met de verschillende afdelingen binnen het bedrijf. Zo heb ik mezelf voorbereid op dit teamoverleg, zodat ik wist waar ik het over had en iedereen in het verhaal kon meenemen. De volgende mensen waren hierbij aanwezig: </p>
<Link href="/bijlagen/teamoverleg-hololens">
            <a>Teamoverleg HoloLens</a>
        </Link>
<ul>
    <li>Johan Deijkers - Manager industrial automation</li>
    <li>Frank Vinju - Shift manager + Techniek</li>
    <li>Kees Vuyk Noorland - Technical Manager</li>
    <li>Bram Beijer - Group infrastructure and Cloud Architect IT</li>
    <li>Tim Crucq - Manager Packaging Manufacturing</li>
    <li>Peng-An - Operator</li>
</ul>
        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;