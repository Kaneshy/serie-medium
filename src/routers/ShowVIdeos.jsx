import React, { useContext } from 'react'
import { videoContext } from '../context/videoContext'
import './styles/Home.css'


export const ShowVideos = () => {

    const {showVideo } = useContext(videoContext)

    return (
        <>
            <section id='labelA' >
                {showVideo.map(x => (
                        <div key={x.id}>
                            <div className="Video-show">
                                <iframe frameborder="0" type="text/html" src={x.video} className='video-v' allowFullScreen title="Dailymotion Video Player" allow="autoplay"> </iframe>
                            </div>
                            <div className="text">
                                <h2>{x.name} {x.id}</h2>
                            </div>
                        </div>
                ))}
            </section>
        </>
    )
}