import React, { Component } from 'react'
import Row from './Row'

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    
    render() {
        return (
            <div className='container'>
                <ul className="list-group">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}


export default Table
