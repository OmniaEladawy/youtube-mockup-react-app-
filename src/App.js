import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

class App extends React.Component {
  state = {list : [] , video: null};

  componentDidMount(){
    this.onSearchTerm("cars");
  }

  onSearchTerm = async (term) =>{
    const response = await youtube.get('/search',{
      params:{
        q: term
      }
    }
   )
   this.setState({
    list : response.data.items,
    video : response.data.items[0]
  })
  }

  onVideoSelect = (vid) =>{
    this.setState({video : vid});
  }

  render(){
    return (
      <div className='ui container'>
          <SearchBar searchTerm={this.onSearchTerm} />
          <div className='ui grid'>
            <div className='ui row'>
              <div className='ten wide column'>
                <VideoDetail video={this.state.video}/>
              </div>
              <div className='six wide column'>
                <VideoList onVideoSelect={this.onVideoSelect}  videoList={this.state.list} />
              </div>              
            </div>
          </div>
      </div>
    );
  } 
}

export default App;
