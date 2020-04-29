import React, { Component } from 'react'

class Row extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleClick = () => {
        this.props.handleClick(this.props.index)
    }
    render() {
        return (
                            <li className="list-group-item" key = {this.props.index}>
                            <p className="h5 float-left">{this.props.name}</p>
                            <span className='row float-right'>
                                <div className='ml-2 mr-2'>
                                <button className="btn btn-success item-button" onClick = {() => console.log("hello")}>Finish</button>
                                </div>
                                <div className='ml-2 mr-2'>
                                <button className="btn btn-danger item-button" onClick = {this.handleClick}>Delete</button>
                                </div>
                            </span>
                            </li>
        )
    }
}

export default Row