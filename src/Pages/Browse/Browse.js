import {HowToStart, TopDownload, Feature, LiveStream} from '../../sectios/index'
import './Browse.css'



function Browse() {
  

  return (
    <>
    <div className='first-section'>
      <Feature/>
      <TopDownload/>
    </div>
    <HowToStart/>
    <LiveStream/>
    </>
  )
}

export default Browse