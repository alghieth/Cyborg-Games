import './ClipsCard.css';
import { FaEye } from "react-icons/fa";

function ClipsCard(props) {
  return (
    <>
    <div className='clip-item'>
      <img src={props.image} />
      <div className='clips-info'>
        <h5>{props.title}</h5>
         <div>
         <FaEye />
         <span>{props.viewrs}</span>
         </div>
      </div>
    </div>
    </>
  )
}

export default ClipsCard