const VideoDetail = (props) => {
    
    if(props.video != null){
        const videoSrc=`https://www.youtube.com/embed/${props.video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} title={props.video.snippet.title}/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{props.video.snippet.title}</h4>
                    <p>{props.video.snippet.description}</p>
                </div>
            </div> 
        )
    }else{
        return "no videos found" 
    }
       
};

export default VideoDetail;