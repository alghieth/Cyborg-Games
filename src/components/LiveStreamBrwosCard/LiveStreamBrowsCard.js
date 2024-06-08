import './LiveStreamBrowsCard.css'
import { FaCheck,FaEye,FaGamepad } from "react-icons/fa";

function LiveStreamBrowsCard(props) {
  return (
    <>
    <div className='live-stream-card'>
        <div className='live-stream-card-image'>
            <img src={props.image} alt=''/>
            <div className='hover-content'>
                <h3>Live</h3>
                <div className='icon'>
                    <div>
                        <FaEye /><span>{props.watch}</span>
                    </div>
                    <div>
                        <FaGamepad /><span>{props.game}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='live-stream-card-disc'>
            <img src={props.avatar} alt=''/>
            <span>
                <span style={{display: 'flex'}}><FaCheck/><h4>{props.name}</h4></span>
                <h3>{props.title}</h3>
            </span>
        </div>
    </div>
    </>
  )
}

export default LiveStreamBrowsCard
