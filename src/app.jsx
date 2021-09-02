import React, { useState,useEffect }from 'react';
import './app.css';
import Search from './compnents/search'
import VideoList from './compnents/video_list/video_list'

function App() {
const [videos, setVideos] = useState([])



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
    <>
    <h1>hello</h1>
    <Search />
    <VideoList 
    videos = {videos}
    />
   
    
    </>
  );
}

export default App;
 