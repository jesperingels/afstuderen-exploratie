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

      <TimelineItem
        itemTitle='Usertest - Remote Assist '
        itemText='Uit mijn onderzoek is gebleken dat de applicatie ‘Remote Assist’ wellicht een goede oplossing kan zijn voor de vraagstelling. Om hier achter te komen heb ik een gebruikerstest gedaan in de fabriek'
        linkHref='usertest-remote-assist'
        linkText='Bekijk meer'
        imgSrc='/img/ra-test1.jpg'
      />

      <TimelineItem
        itemTitle='Usertest - Dynamics 365 Guides '
        itemText='Gedurende mijn tijd in de fabriek ben ik erachter gekomen dat er een behoefte was voor nog een andere app in de fabriek ‘Dynamics 365 Guides’. '
        linkHref='usertest-guides'
        linkText='Bekijk meer'
        imgSrc='/img/guides-picture.png'
      />

      <TimelineItem
        itemTitle='Presentatie - Perfetti Van Melle'
        itemText='Om het project voor Perfetti Van Melle af te ronden heb ik een presentatie gegeven en ook gepitcht hoe ik denk dat de HoloLens een rol kan spelen binnen de organisatie.'
        linkHref='presentatie-pvm'
        linkText='Bekijk meer'
        imgSrc='/img/presentatiePVM.jpg'
      />

    </main>
  );
  
  export default Main;