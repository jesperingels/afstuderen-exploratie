import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
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
     
        
        </Content>
    </div> 
  );
  
  export default HandpickedLabs;