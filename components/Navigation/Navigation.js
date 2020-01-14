import Link from 'next/link';
import Router from 'next/router'

const checkPlaceholders = () => {
    if(typeof window !== 'undefined') {
      const imgList = document.querySelectorAll('img');
  
      // For each image on the page
      for(let i = 0; i < imgList.length; i++) {
          function checkOnComplete() {
              console.log('images loaded')
              const placeholders = document.querySelectorAll('.img-placeholder');
              const imgWrappers = document.querySelectorAll('.img-wrapper');
              console.log(placeholders);
  
              if(placeholders[i]) {
                  placeholders.forEach(placeholder => { 
                      placeholder.style.display = 'none';
                      console.log('placeholder hidden!');
                  })
                  imgWrappers.forEach(wrapper => {
                      wrapper.style.minHeight= 'unset'
                  })
              }
          }
  
          if(imgList[i].complete) {
              checkOnComplete();
          } else {
              imgList[i].onload = checkOnComplete;
          }
  
      }
  }
  };

Router.events.on('routeChangeComplete', checkPlaceholders);


const Navigation = (props) => (
    <nav className="navigation">
        {props.children}
        <Link href="/opdracht">
            <a>Opdracht</a>
        </Link>
        <Link href="/probleemstelling">
            <a>Probleemstelling</a>
        </Link>
        <Link href="/oplossing">
            <a>Oplossing</a>
        </Link>
    </nav>
  );
  
checkPlaceholders();

export default Navigation;