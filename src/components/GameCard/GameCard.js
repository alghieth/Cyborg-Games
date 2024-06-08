import {SecondaryButton} from '../Buttons/Buttons';
import './GameCard.css'

function GameCard(props) {
  return (
    <div className='your-game-item'>
      <ul>
        <li><img src={props.image} alt=''/></li>
        <li>
            <h4>{props.title}</h4>
            <span>{props.category}</span>
          </li>
        <li>
             <h4>Data Added</h4>
             <span>{props.date}</span>
        </li>
        <li>
            <h4>Hours Played</h4>
            <span>{props.hours_played}</span>
        </li>
        <li>
            <h4>Currently</h4>
            <span>{props.downloaded}</span>
        </li>
        <SecondaryButton>
          downloaded
        </SecondaryButton>
      </ul>
    </div>
  )
}

export default GameCard;
