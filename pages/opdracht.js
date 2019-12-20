import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import '../public/css/global.css'

const Opdracht = () => (
    <div>
      <Header/>
      <Content>
        <h1>Vraagstuk</h1>
        <p>De opdrachtgever wil weten of het mogelijk om ‘backoffice support’ te leveren in de fabrieken van Perfetti Van Melle wereldwijd. Met backoffice support wordt bedoeld dat er iemand aan de andere kant van de wereld geholpen moet kunnen worden met bijvoorbeeld het oplossen van storingen. De HoloLens was al in het bezit de snoepfabrikant, hier heb ik mijn onderzoek onder andere op gefocust. </p>
        <div className='img-wrapper'>
          <img className='width-30pr' src='/img/planet-earth.svg'/>
          <img className='width-30pr' src='/img/support.svg'/>
        </div>

        <h2>Aanleiding</h2>
        <p>Met de komst van de HoloLens 2 (de nieuwste augmented reality (AR) headset van Microsoft) richt Microsoft zich op de werknemers van verschillende sectoren zoals bijvoorbeeld: de zorg, fabrieken, bouwvakkers, architecten enz. Eigenlijk de beroepen waarbij je niet elke werkdag van 09:00 tot 17:00 achter een computer zit. Vanwege de aard van deze beroepen maken ze vaak nog weinig gebruik van een computer tijdens hun werk. Hier moet de HoloLens op inspelen door deze mensen de voordelen van een computer te bieden, zonder de nadelen waardoor zij tot nu toe weinig tot geen computer gebruikten tijdens hun werk. </p>
      </Content>
    </div> 
  );
  
  export default Opdracht;