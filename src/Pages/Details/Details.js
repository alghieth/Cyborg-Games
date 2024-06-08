import './Details.css';
import { FaPlay, FaStar, FaDownload, FaServer, FaGamepad   } from "react-icons/fa";
import imag_1 from '../../assets/images/feature-right.jpg';
import imag_2 from '../../assets/images/feature-left.jpg';
import imag_3 from '../../assets/images/details-01.jpg';
import imag_4 from '../../assets/images/details-02.jpg';
import imag_5 from '../../assets/images/details-03.jpg';
import { SectionWrapper } from '../../components';
import {SecondaryButton} from '../../components/Buttons/Buttons';
import {TopDownload} from '../../sectios/index'


function Details() {

  return (
    <>
    <div className='details-first-section'>
      <div>
      <img src={imag_1} alt='fortnight'/>
      <a href='https://www.youtube.com/watch?v=HQNmN4nGUZM&pp=ygUJZm9ydG5pZ2h0' target='_blank'><FaPlay/></a>
      </div>
      <img className='left-img' src={imag_2} alt='fortnight' />
    </div>
    <h1>FORTNITE DETAILS</h1>
    <SectionWrapper>
    <div className='details-disc'>
      <div className='info left'>
        <h4>
          Fortnight
          <span>Sandbox</span>
        </h4>
        <ul>
        <li><span style={{color: 'var(--color-icons)'}}><FaStar/></span> <span className='white'>4.8</span></li>
        <li><span style={{color: 'var(--color-primary)'}}><FaDownload/></span> <span className='white'>2.3</span></li>
        </ul>
      </div>
      <div className='info right'>
        <ul>
          <li><span style={{color: 'var(--color-icons)'}}><FaStar/></span><span className='white'>4.8</span></li>
          <li><span style={{color: 'var(--color-primary)'}}><FaDownload/></span><span className='white'>2.3M</span></li>
          <li><span style={{color: 'var(--color-primary)'}}><FaServer/></span><span className='white'>320GB</span></li>
          <li><span style={{color: 'var(--color-primary)'}}><FaGamepad/></span><span className='white'>Action</span></li>
        </ul>
      </div>
    </div>
    <div className='details-images'>
      <img src={imag_3} alt='fortnight'/>
      <img src={imag_4} alt='fortnight'/>
      <img src={imag_5} alt='fortnight'/>
    </div>
    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
    <SecondaryButton>
      Download Now!
    </SecondaryButton>
    </SectionWrapper>
    <TopDownload/>
    </>
  )
}

export default Details;