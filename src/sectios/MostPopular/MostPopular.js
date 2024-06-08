import './MostPopular.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import MostPopularData from '../../assets/Data/MostPopularData';
import { Card,  SectionHeader, SectionWrapper, PrimaryButton } from '../../components/index';

AOS.init();

function Mostpopular() {

  const cards = MostPopularData.map(card => {
    return <Card key={card.id} image={card.image} title={card.title}   category={card.category}  rate={card.rate} download={card.download}/>
  })

  return (
    <>
    <SectionWrapper>
        <SectionHeader>
            <span>Most popular</span> Right Now
        </SectionHeader>
        <div className='most-popular-items' data-aos='fade-up'>
          {cards}
        </div>
       <PrimaryButton>
        Descover Popular
       </PrimaryButton>
    </SectionWrapper>
    </>
  )
}

export default Mostpopular;