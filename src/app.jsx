import React, { useState,useEffect }from 'react';
import SearchHeader from './compnents/search_header/search_header';
import styles from './app.module.css';
import VideoList from './compnents/video_list/video_list';
import VideoDetail from './compnents/video_detail/video_detail';

function App({youtube}) {
const [videos, setVideos] = useState([])
const [selected, setSelected] = useState(null)


const search = (query) => {
  setSelected(null)
  youtube
  .search(query)
  .then(items=> {
    setVideos(items)

  })

};

useEffect(()=> {
  youtube.mostPopular()
  .then(items=>setVideos(items))
}, [])

const onVideoClick = (video) => {
  setSelected(video)
}

  return (
    <div className= {styles.app}>
    <SearchHeader onSearch={search} onVideoClick= {onVideoClick}/>

    <section className={styles.content}>
    {selected &&  
    <div className = {styles.detail}>
    <VideoDetail videos={selected}/>
      </div>}
      <div className = {styles.list}>
        <VideoList videos = {videos}onVideoClick={onVideoClick} display ={selected ? 'list': 'gird'}/>
      </div>
    </section>
    
    </div>
  );
}

export default App;
 