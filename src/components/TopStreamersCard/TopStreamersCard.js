import './TopStreamersCard.css';
import { SecondaryButton } from '../Buttons/Buttons';
import { FaAngleRight } from "react-icons/fa6";

function TopStreamersCard(props) {
  return (
    <>
    <div className='streamers-item'>
        <div className='streamers-info'>
        <span>{props.id}</span>
        <img src={props.image} alt='sds' />
        <FaAngleRight />
        <p>{props.name}</p>
        </div>
        <SecondaryButton>Follow</SecondaryButton>
    </div>
    </>
  )
}

export default TopStreamersCard