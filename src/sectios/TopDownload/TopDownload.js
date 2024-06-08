import './TopDownload.css'
import { SectionHeader, SectionWrapper, TopDownloadCard } from '../../components'
import TopDownloadData from '../../assets/Data/TopDownloadData'

function TopDownload() {
  const cards = TopDownloadData.map(card => {
    return <TopDownloadCard key={card.id} image={card.image} title={card.title} category={card.category} star={card.star} download={card.download}/>
  })
  return (
    <div className='top-download-container'>
    <SectionWrapper>
    <SectionHeader>
      <span>Top</span> Downloaded
    </SectionHeader>
      {cards}
    <a className='download-link'>View All Games</a>
    </SectionWrapper>
    </div>
  )
}

export default TopDownload