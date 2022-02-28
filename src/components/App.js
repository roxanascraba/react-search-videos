import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends Component {
    state = {  
        videos: [],
        selectedVideo: null
    } 

    //Solve the issue of showing Loading when the user if entering in the app
    //Show the entire view after searching for 'buildings' term
    componentDidMount() { 
        this.onTermSubmit('buildings');
    }

    // as in Youtube documentation 
    // https://developers.google.com/youtube/v3/docs/search/list

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        //console.log("From the App : ",video);
        this.setState({selectedVideo : video});
    }

    render() { 
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videos={this.state.videos} 
                                onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;