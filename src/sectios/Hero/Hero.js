import './Hero.css'
import { PrimaryButton } from '../../components'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function Hero() {
  return (
    <div className='hero-main' data-aos='fade-up'>
      <div className='hero-text'>
        <h6 className='hero-subtitle'>Welcome To Cybrog</h6>
        <h4 className='hero-title'><em>BROWSE</em> OUR POPULAR GAMES HERE</h4>
        <PrimaryButton>
        Browse Now
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Hero