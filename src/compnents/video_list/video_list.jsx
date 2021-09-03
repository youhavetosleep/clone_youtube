import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videos, onVideoClick, display}) => (
        <ul className = {styles.videos}>
            {videos.map(videos=> (
            <VideoItem 
            onVideoClick={onVideoClick} 
            key={videos.id} 
            videos= {videos}
            display={display}
            />
            ))}
        </ul>
    );

export default VideoList;