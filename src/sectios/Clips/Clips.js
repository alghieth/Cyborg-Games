import './Clips.css';
import { ClipsCard, SectionHeader } from '../../components';
import ClipsData from '../../assets/Data/ClipsData';

function Clips() {

  let cards = ClipsData.map(card => {
    return <ClipsCard key={card.id} image={card.image} title={card.title} viewrs={card.viwers}/>
  })
  return (
    <>
    <SectionHeader>
        <span>Your Most Popular</span> Clips
    </SectionHeader>
    <div className='clips-items'>
      {cards}
    </div>
    </>
  )
}

export default Clips