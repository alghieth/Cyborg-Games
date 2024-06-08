import { SectionWrapper, SectionHeader, GameCard, PrimaryButton } from '../../components'
import './YourGaming.css'
import YourGamedata from '../../assets/Data/YourGameData'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function YourGaming() {

    const Cards = YourGamedata.map(game => {
        return <GameCard key={game.id} image={game.image} title={game.title} category={game.category} date={game.date_added} hours_played={game.hours_played} downloaded={game.downloaded} />
    })

  return (
    <>
    <SectionWrapper>
        <SectionHeader>
            Your Gaming
        </SectionHeader>
        <div className='your-game-items' data-aos='fade-up'>
            {Cards}
        </div>
        <PrimaryButton>
            View Your Library
        </PrimaryButton>
    </SectionWrapper>
    </>
  )
}

export default YourGaming