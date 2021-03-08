import React from 'react';
import PlaylistInput from './containers/PlaylistInput';
import PlaylistData from './Data/PlaylistData';
import TableList from './containers/TableList';

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            thePlayList: PlaylistData
        }
        this.handlePlaylistInput = this.handlePlaylistInput.bind(this)
        this.handleSongDelete = this.handleSongDelete.bind(this)
        this.handleFilterGenre = this.handleFilterGenre.bind(this)
        this.handleFilterRating = this.handleFilterRating.bind(this)
    }
handlePlaylistInput(song) {
        console.log(song)
        this.setState(state => {
            const thePlayList = [...state.thePlayList]
            thePlayList.push({
                id: thePlayList.length + 1,
                title: song.title,
                artist: song.artist,
                genre: song.genre,
                rating: song.rating
            })
            return {
                thePlayList: thePlayList
            }
         })
     }
handleSongDelete(id) {
        console.log(id)
        this.setState(state => {
            const songId = parseInt(id)
            const theplaylist = state.thePlayList.filter(item => {
                return item.id !== songId
            })
            return {
                thePlayList: theplaylist
            }
        })
    }
 handleFilterGenre(genre) {
        console.log(`handleFilterGenre(): genre=${genre}`)
this.setState(state => {
            const theplaylist = state.thePlayList.filter(item => {
                return item.genre === genre
            })
            return {
                thePlayList:  theplaylist
            }
        })
    }
handleFilterRating(rating) {
        console.log(`handleFilterRating(): rating=${rating}`)
this.setState(state => {
            const songRating = parseInt(rating)
            const theplaylist = state.thePlayList.filter(item => {
                return item.rating === songRating
            })
            return {
                thePlayList: theplaylist
            }
        })
    }
render() {
        return (
            <div>
                <PlaylistInput onSubmit={this.handlePlaylistInput} />
                {/* <ThePlaylist list={this.state.thePlayList} /> */}
                <TableList
                    list={this.state.thePlayList}
                    onSongDelete={this.handleSongDelete}
                    onFilterGenre={this.handleFilterGenre}
                    onFilterRating={this.handleFilterRating}
                />
            </div>
        )
    }
}
export default Container;