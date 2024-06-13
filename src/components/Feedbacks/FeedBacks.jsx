import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import './styles.css'

const FeedBacks = () => {
    return (
        <div id="feedbacks" className="video-container background">
            <h1>DEPOIMENTO DE ALGUNS DE NOSSOS CLIENTES !</h1>
            <div className='video-wrapper'>
                <div className="video">
                    <video controls={true} src={video1}></video>
                </div>
                <div className="video">
                    <video controls={true} src={video2}></video>
                </div>
                <div className="video">
                    <video controls={true} src={video3}></video>
                </div>

            </div>

        </div>
    )
}

export default FeedBacks