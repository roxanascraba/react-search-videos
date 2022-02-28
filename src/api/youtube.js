import axios from "axios";

const KEY = "AIzaSyBGhKKGhmfgZggORam2FfvFPzr-lNmmeIw";

// Youtube documentation 
// https://developers.google.com/youtube/v3/docs/search/list

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});