import axios from 'axios';

const KEY = 'AIzaSyDAsKn81xI5AxXmYXWrvf8-vGLhzEIx11M';

export default axios.create(
    {
        baseURL : 'https://www.googleapis.com/youtube/v3',
        params:{
            part: 'snippet',
            maxResults: 5,
            key : KEY,
            
        }
    }
);