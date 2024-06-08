import './LiveStream.css'
import { SectionHeader, SectionWrapper, LiveStreamBrowsCard, PrimaryButton } from '../../components'
import LiveStreamBrowsData from '../../assets/Data/LiveStreamBrowsData'

function LiveStream() {
    const cards = LiveStreamBrowsData.map(card => {
        return <LiveStreamBrowsCard key={card.id} image={card.image} avatar={card.avatar} name={card.name} title={card.title} watch={card.watch} game={card.game}/>
    })

  return (
    <>
    <SectionWrapper>
        <SectionHeader>
            <span>Most Popular</span> Live Stream
        </SectionHeader>
        <div className='live-stream-items'>
        {cards}
        </div>
        <PrimaryButton>
            Descover All Streams
        </PrimaryButton>
    </SectionWrapper>
    </>
  )
}

export default LiveStream