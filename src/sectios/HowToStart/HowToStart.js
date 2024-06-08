import './HowToStart.css'

import { PrimaryButton, SectionWrapperNoBg, SectionHeader, LiveStreamCard } from '../../components'
import LiveStreamData from '../../assets/Data/LiveStreamData'

function HowToStart() {
    const LiveCard = LiveStreamData.map(card => {
        return <LiveStreamCard key={card.id} image={card.image} title={card.title} paragraph={card.paragraph}/>
      })
  return (
    <>
    <SectionWrapperNoBg>
    <SectionHeader>
      <span>How To Start Your</span> Live Stream
    </SectionHeader>
    <div className='live-stream-items'>
      {LiveCard}
    </div>
    <PrimaryButton>
      Go To Profile
    </PrimaryButton>
    </SectionWrapperNoBg>
    </>
  )
}

export default HowToStart