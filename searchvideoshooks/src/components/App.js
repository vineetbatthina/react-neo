import React , { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () =>
{
    const [ videos , setVideos] = useState([]);
    const [ selectedVideos , setSelectedVideos] = useState(null);

    const onTermSubmit = async (term) =>
    {
        const response = await youtube.get('/search',
        {
            params:{
                q: term
            }
        });

        this.setState({videos : response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    const onVideoSelect = (video) =>
    {
        this.setState({selectedVideo : video});
    };

    useEffect(() =>{
        onTermSubmit('avengers');
    },[]);

    return (
        <div className="ui container" style={{paddingTop:10}}>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default App;