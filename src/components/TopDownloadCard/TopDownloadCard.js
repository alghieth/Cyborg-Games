import './TopDownloadCard.css'
import { FaStar, FaDownload } from 'react-icons/fa'


function TopDownloadCard(props) {
  return (
    <>
    <div className='download-item'>
        <img className='download-item-img' src={props.image} alt='ll'/>
        <div className='download-item-content'>
            <div className='download-item-disc'>
                <h4 className='download-item-title'>{props.title}</h4>
                <p className='download-item-ctaegory'>{props.category}</p>
                <div className='download-item-spans'>
                <span style={{color: 'var(--color-icons)'}}><FaStar/></span> <span>{props.star}</span>
                <span style={{color: 'var(--color-primary)', marginLeft: '10px'}}><FaDownload/></span> <span>{props.download}</span>
                </div>
            </div>
            <span className='download-item-btn' style={{color: 'var(--color-primary)'}}><FaDownload/></span>
        </div>
    </div>
    </>
  )
}

export default TopDownloadCard