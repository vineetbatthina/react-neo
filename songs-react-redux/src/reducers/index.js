import { combineReducers } from 'redux';

const songsReducer = () =>{

    return [
        { title : 'Levitating' , starring : 'Dua Lipa' },
        { title : 'High on Life' , starring : 'Martin Garrix' },
        { title: 'intentions' , starring : 'Justin Beiber' },
        { title: 'Perfect' , starring : 'Ed Sheeran' }
    ];
};

const selectedSongReducer = ( selectedSong = null , action ) =>{
    if(action.type==='SELECTED_SONG')
    {
        return action.payload;
    }

    return selectedSong; 
};


export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});