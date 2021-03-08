import React from 'react';

class TableItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(event) {
        // console.log("click", event.target.value)
        this.props.onClick(event.target.value)
    }
    render() {
        return (
            <tr>
                <td> {this.props.item.title} </td>
                <td> {this.props.item.artist} </td>
                <td> {this.props.item.genre} </td>
                <td> {this.props.item.rating} </td>
                <td>
                    <button
                        className="delete-button"
                        value={this.props.item.id}
                        onClick={this.handleDelete}
                    >
                        delete
                </button>
                </td>
            </tr>
        )
    }
}
export default TableItem;
