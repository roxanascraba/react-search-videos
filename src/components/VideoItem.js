import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => { //deconstructing obj ES2015

    //used an arrow fct for onClick event for passing the video as argument to onVideoSelect cb
    return (
        <div className="videoItem item" onClick={()=>onVideoSelect(video)}> 
            <img 
                className="ui image" 
                alt={video.snippet.title}
                src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
};

export default VideoItem;
