import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import '../public/css/global.css'

const HandpickedLabs = () => (
    <div>
      <Header/>
      <Content>
        <h1>Start bij Perfetti Van Melle</h1>
        <div className='img-wrapper'>
            <img className='width-100pr' src='/img/start-pvm.jpg' />
            
        </div>
        
        </Content>
        <Footer/>
    </div> 
  );
  
  export default HandpickedLabs;