import './Stream.css';
import { Feature, TopStreamers, LiveStream } from '../../sectios';

function Stream() {
  return (
    <>
    <div className='first-section-streamer'>
      <Feature/>
      <TopStreamers/>
    </div>
    <LiveStream/>
    </>
  )
}

export default Stream;