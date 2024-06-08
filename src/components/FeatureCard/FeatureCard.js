import './FeatureCard.css'
import { FaDownload, FaStar } from 'react-icons/fa';


function FeatureCard(props) {
  return (
    <>
    <div className='item'>
        <div className='item-image'>
        <img src={props.image} alt='as'/>
        <div className='hover-effect'>
          <h6>2.4k Streaming</h6>
        </div>
        </div>
        <div className='item-content'>
        <span className='item-span'>
            <h4>{props.title}</h4>
            <p>{props.download} Downloads</p>
        </span>
        <span className='item-icons'>
            <span style={{color: 'var(--color-icons)'}}><FaStar/><span style={{marginLeft: '5px', color: '#fff', fontSize: '14px'}}>{props.star}</span></span>
            <span style={{color: 'var(--color-primary)'}}><FaDownload/><span style={{marginLeft: '5px', color: '#fff', fontSize: '14px'}}>{props.downloaded}</span></span>
        </span>
        </div>
    </div>
    </>
  )
}

export default FeatureCard