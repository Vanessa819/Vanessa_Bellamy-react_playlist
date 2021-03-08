import React from 'react';
import PlaylistItem from './PlaylistItem';

class Playlist extends React.Component {
    render() {
        const items = this.props.items
        const playlistItems = items.map(item => (
            <PlaylistItem
                key = {item.id}
                item = {item}
            />
        )
     )
    return (
            <div>
                <ul>
                    {playlistItems}
                </ul>
            </div>
        )
    }
}
export default Playlist;