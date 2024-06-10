import './Feature.css'
import { FeatureCard, SectionHeader, SectionWrapper } from '../../components'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import FeatureCardData from '../../assets/Data/FeatureCardData';



function Feature() {

  const options = {
    items: 3,
    loop: true,
    autoplay: true,
    autoplaytimeout: 4000,
    animateOut: 'slideOutUp',
    nav: false,
    dots: false,
    margin: 0,
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 2
      },
      500: {
        items: 1
      },
      330: {
        items: 1,
      }
    }
  }

  const cards = FeatureCardData.map(card => {
    return <FeatureCard key={card.id} image={card.image} title={card.title} download={card.download} star={card.star} downloaded={card.downloaded}/>
  })

  return (
    <div className='feature-container'>
    <SectionWrapper>
    <SectionHeader>
      <span>Featured</span> Games
    </SectionHeader>
    <OwlCarousel className='owl-theme' {...options}>
    {cards}
    </OwlCarousel>
    </SectionWrapper>
    </div>
  )
}

export default Feature

