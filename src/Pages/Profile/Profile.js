import './Profile.css'
import prof_img from '../../assets/images/profile.jpg'
import { PrimaryButton, SecondaryButton, SectionWrapper } from '../../components'
import { Clips, YourGaming } from '../../sectios'

function Profile() {
  return (
    <>
    <SectionWrapper>
      <div className='personal-info'>
        <img src={prof_img} alt='profile pic'/>
        <div className='status-name'>
          <div>
            <span>Offline</span>
            <h3>AlGhieth Melhem</h3>
            <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
            <SecondaryButton>
              Start Live Stream
            </SecondaryButton>
          </div>
          <ul>
            <li>
              <p>games Downloads</p>
              <span>3</span>
            </li>
            <li>
              <p>Friends Online</p>
              <span>18</span>
            </li>
            <li>
              <p>Live Streams</p>
              <span>None</span>
            </li>
            <li>
              <p>Clips</p>
              <span>35</span>
            </li>
          </ul>
        </div>
      </div>
    <Clips/>
    <PrimaryButton>
      Load More Clips
    </PrimaryButton>
    </SectionWrapper>
    <YourGaming/>
    </>

  )
}

export default Profile