import TimelineItem from '../TimelineItem/TimelineItem'

const Main = () => (
    <main>
      <TimelineItem
        itemTitle='Start bij Handpicked Labs'
        itemText='Mijn afstudeerproject ben ik begonnen bij Handpicked Labs, onderdeel van Handpicked Agencies in Breda. Voor dit project ben ik onderzoek gaan doen naar de Microsoft HoloLens als voorbereiding op het onderzoek wat ik zal doen in de fabriek bij Perfetti Van Melle. '
        linkHref='handpicked-labs'
        linkText='Bekijk meer'
        imgSrc='/img/HPBreda.jpg'
      />
      
      <TimelineItem
        itemTitle='Onderzoek HoloLens '
        itemText='Perfetti van Melle heeft zelf de HoloLens (1st gen) al in bezit, ik ben gaan onderzoeken wat deze bril kan. '
        linkHref='onderzoek-hololens'
        linkText='Bekijk meer'
        imgSrc='/img/2-hololens-slashdot.png'
      />

      <TimelineItem
        itemTitle='Onderzoek Augmented Reality brillen '
        itemText='De HoloLens is niet de enige Augmented Reality bril op de markt. Waarom is de HoloLens de beste keuze voor Perfetti Van Melle?'
        linkHref='ar-brillen'
        linkText='Bekijk meer'
        imgSrc='/img/ARBrillen.jpg'
      />

      <TimelineItem
        itemTitle='Start bij Perfetti Van Melle '
        itemText='Bij Perfetti Van Melle heb ik een werkplek aangeboden gekregen op het planbureau en kon ik aan de slag gaan met mijn onderzoek binnen het bedrijf naar de implementatie van de HoloLens. '
        linkHref='start-perfetti-van-melle'
        linkText='Bekijk meer'
        imgSrc='/img/pvm-logo.jpg'
      />

    </main>
  );
  
  export default Main;