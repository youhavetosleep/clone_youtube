import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({videos}) => {

        return (
            <>
            <h1>{videos.snippet.title}</h1>
            </>
        )
    };

export default VideoDetail;