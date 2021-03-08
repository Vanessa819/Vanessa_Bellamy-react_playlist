import React from 'react';
import InputField from '../Components/InputField';
import InputSelect from '../Components/InputSelect';
import GenreData from '../Data/GenreData';
import RatingData from '../Data/RatingData';

class PlaylistInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            artist: '',
            genre: '',
            rating: 0
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleArtistChange = this.handleArtistChange.bind(this)
        this.handleGenreChange = this.handleGenreChange.bind(this)
        this.handleRatingChange = this.handleRatingChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
handleTitleChange(title) {
        // console.log('title:', title)
        this.setState(() => {
            return {
                title: title
            }
        })
    }
handleArtistChange(artist) {
        // console.log('artist:', artist)
        this.setState(() => {
            return {
                artist: artist
            }
        })
    }
handleGenreChange(name) {
        // console.log('genre:', name)
        this.setState(() => {
            return {
                genre: name
            }
        })
    }
handleRatingChange(value) {
        // console.log('rating:', value)
        this.setState(() => {
            return {
                rating: value
            }
        })
    }
handleSubmit() {
        // console.log(this.state)
    if (this.state.title !== null &&
        this.state.title !== undefined &&
        this.state.title.length > 0 &&
        this.state.artist !== null &&
        this.state.artist !== undefined &&
        this.state.artist.length > 0 &&
        this.state.genre !== null &&
        this.state.genre !== undefined &&
        this.state.genre.length > 0 &&
        this.state.rating !== null &&
        this.state.rating !== undefined &&
        this.state.rating !== 0
        )
         {
            this.props.onSubmit({
                title: this.state.title,
                artist: this.state.artist,
                genre: this.state.genre,
                rating: this.state.rating
            })
            this.setState(() => {
                return {
                    title: '',
                    artist: '',
                }
            })
        }
 }
render() {
        return (
            <div className = "PlaylistInput">
                <form>
                    <InputField
                        id = "input-title"
                        value = {this.state.title}
                        placeholder = "songtitel"
                        onChange = {this.handleTitleChange}
                    />
                    <InputField
                        id = "input-artist"
                        value = {this.state.artist}
                        placeholder = "artiest "
                        onChange = {this.handleArtistChange}
                    />
                    <InputSelect
                        id = "input-genre"
                        options = {GenreData}
                        onSelectChange = {this.handleGenreChange}
                    />
                    <InputSelect
                        id = "input-rating"
                        options = {RatingData}
                        onSelectChange = {this.handleRatingChange}
                    />
                </form>
                <button
                    className = "submit-button"
                    type = "submit" onClick = {this.handleSubmit}
                >
                    Voeg toe
                </button>
            </div>
        )
    }
}
export default PlaylistInput