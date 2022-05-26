import VideoItem from './VideoItem';

const VideoList = (props) => {
    const renderedVideos = props.videoList.map((video) =>{
        return <VideoItem videoSelected={props.onVideoSelect} video={video} key={video.id.videoId}/>
    })
    return <div className="ui relaxed divided list">{renderedVideos}</div>    
};

export default VideoList;