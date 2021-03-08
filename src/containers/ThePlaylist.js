import React from 'react';
import Playlist from './Components/Playlist/Playlist';

const ThePlaylist = (props) => {
    return (
        <div>
            <span> Song </span>
            <span> Artist </span>
            <span> Genre </span>
            <span> Rating </span>
            <Playlist items = {props.playlist} />
        </div>
    )
}
export default ThePlaylist;