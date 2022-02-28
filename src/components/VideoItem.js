import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => { //deconstructing obj ES2015

    //use an arrow fct for onClick event for passing the video as argument to onVideoSelect cb
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
// const VideoItem = (props) => {
//     //console.log(props.video.snippet.title);
//     return (
//         <div>{props.video.snippet.title}</div>
//     )
// };
export default VideoItem;
