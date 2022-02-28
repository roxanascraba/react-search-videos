import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => { //destructuring obj ES2015
    const renderedList = videos.map((video) => {
        return (
            <VideoItem 
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect} 
            />
        );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
};
// const VideoList = (props) => {
//     //console.log("Props:",props);
//     return (
//         <div>{props.videos.length} videos</div>
//     )
// };

export default VideoList;
