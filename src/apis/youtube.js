import axios from 'axios';
const KEY = 'AIzaSyBbCe7lucRabAVeuzLpTTR6aJIdOGCU2fk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});