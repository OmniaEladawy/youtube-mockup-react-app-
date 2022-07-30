import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

const App = () => {
  const [list,setList] = useState([]);
  const [video,setVideo] = useState(null);

  useEffect(()=>{
    onSearchTerm("web development")
  },[])

  const onSearchTerm = async (term) =>{
    const response = await youtube.get('/search',{
      params:{
        q: term
      }
    }
   )
   setList(response.data.items);

   setVideo(response.data.items[0])
  }

  const onVideoSelect = (vid) =>{
    setVideo(vid);
  }

  return (
    <div className='ui container'>
        <SearchBar searchTerm={onSearchTerm} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column'>
              <VideoDetail video={video}/>
            </div>
            <div className='six wide column'>
              <VideoList onVideoSelect={onVideoSelect}  videoList={list} />
            </div>              
          </div>
        </div>
    </div>
  );
}



  


export default App;
