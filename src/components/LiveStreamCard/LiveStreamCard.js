import './LiveStreamCard.css'

function LiveStreamCard(props) {
  return (
    <>
    <div className='live-stream-item'>
        <img src={props.image} alt='dd'/>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
    </div>
    </>
  )
}

export default LiveStreamCard