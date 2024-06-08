import './TopStreamers.css';
import { SectionWrapper, TopStreamersCard, SectionHeader } from '../../components';
import TopStreamersData from '../../assets/Data/TopStreamersData';


function TopStreamers() {

  let cards = TopStreamersData.map(card => {
    return <TopStreamersCard key={card.id} id={card.id} name={card.name} image={card.image}/>
  })

  return (
    <>
    <div className='streamers-div'>
    <SectionWrapper>
        <SectionHeader>
          <span>Top</span> Streamers
        </SectionHeader>
        {cards}
    </SectionWrapper>
    </div>
    </>
  )
}

export default TopStreamers