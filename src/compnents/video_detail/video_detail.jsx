import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({videos}) => {
    const {title, channelTitle, description} = videos.snippet
    console.log(videos)
        return (
            <section className={styles.detail}>
                <iframe 
                className={styles.video}
                type="text/html" 
                width="100%" 
                height="400px"
                src={`http://www.youtube.com/embed/${videos.id}`}
                frameBorder="0"
                allowFullScreen
                >
                </iframe>
                <h2>{title}</h2>
                <h3>{channelTitle}</h3>
                <pre className={styles.description}>
                    {description}</pre>
            </section>
        )
    };

export default VideoDetail;