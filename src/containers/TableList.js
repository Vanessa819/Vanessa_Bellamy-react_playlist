import React from 'react';
import Table from '../Components/Table/Table';
import InputSelect from '../Components/InputSelect';
import GenreData from '../Data/GenreData';
import RatingData from '../Data/RatingData';

const TableList = (props) => {
    return (
        <table>
            <thead>
                <tr className ="song-header">
                    <th className = "song-row_item">Song</th>
                    <th className = "song-row_item">Artist</th>
                    <th className = "song-row_item">Genre
                    <InputSelect
                            id = "filter-genre"
                            options = {GenreData}
                            onSelectChange = {props.onFilterGenre}
                        />
                    </th>
                    <th className = "song-row_item">Rating
                    <InputSelect
                            id = "filter-rating"
                            options = {RatingData}
                            onSelectChange = {props.onFilterRating}
                        />
                    </th>
                    <th></th>
                </tr>
            </thead>
            <Table
                items = {props.list}
                onDelete = {props.onSongDelete}
            />
        </table>
    )
}
export default TableList;