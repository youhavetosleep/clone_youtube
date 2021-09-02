import React, { useState,useEffect }from 'react';
import SearchHeader from './compnents/search_header/search_header';
import styles from './app.module.css';
import VideoList from './compnents/video_list/video_list';

function App() {
const [videos, setVideos] = useState([])

const onSearch = (query) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyCjHZiXEFdLYgcuGBE5Dcs0XO3yKV-oNAA`, requestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item => item))
    .then(items => setVideos(items))
    .catch(error => console.log('error', error));
}


useEffect(()=> {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCjHZiXEFdLYgcuGBE5Dcs0XO3yKV-oNAA", requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error));
  
  
}, [])

  return (
    <div className= {styles.app}>
    <SearchHeader 
    onSearch={onSearch}
    />
    
    <VideoList 
    videos = {videos}
    />
   
    
    </div>
  );
}

export default App;
 