import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => {
    const {title, thumbnails, channelTitle} = props.video.snippet
    return (
    <li className= {styles.container}>
        <div className={styles.video}>
            <img className= {styles.thumbnails} src={thumbnails.medium.url} alt='video thumbnails' />
            <div className={styles.metadata}>
                <p className= {styles.title} >{title}</p>
                <p className= {styles.channel}>{channelTitle}</p>
            </div>
        </div>
    </li>
)};

export default VideoItem; 