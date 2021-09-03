import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({videos,onVideoClick, display}) => {
    const {title, thumbnails, channelTitle} = videos.snippet
    const displayType = display === 'list' ? styles.list : styles.grid
    return (
    <li className= {`${styles.container} ${displayType}`} onClick={()=>onVideoClick(videos)}>
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