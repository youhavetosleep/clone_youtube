import React, { useState,useEffect }from 'react';
import SearchHeader from './compnents/search_header/search_header';
import styles from './app.module.css';
import VideoList from './compnents/video_list/video_list';

function App({youtube}) {
const [videos, setVideos] = useState([])

const search = (query) => {
  youtube
  .search(query)
  .then(items=>setVideos(items))

};


useEffect(()=> {
  youtube.mostPopular()
  .then(items=>setVideos(items))
}, [])

  return (
    <div className= {styles.app}>
    <SearchHeader 
    
    onSearch={search}
    />
    
    <VideoList 
    videos = {videos}
    />
   
    
    </div>
  );
}

export default App;
 