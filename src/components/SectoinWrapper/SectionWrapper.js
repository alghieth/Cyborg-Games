import './SectionWrapper.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

function SectionWrapper(props) {
  return (
    <div className='section-wrapper' data-aos='fade-up'>
        {props.children}
    </div>
  )
}
function SectionWrapperNoBg(props) {
  return (
    <div className='section-wrapper-no-bg' data-aos='fade-up'>
        {props.children}
    </div>
  )
}

export default SectionWrapper
export {SectionWrapperNoBg};