import React, { Component } from 'react'
import Row from './Row'

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    removeTodo = (i) => {
        this.props.removeTodo(i)
    }
    render() {
        return (
                <div className='container'>
                    <ul className="list-group">
                        {this.props.items.map((item, index) => <Row handleClick={this.removeTodo} name={item} index={index}/>)}
                    </ul>
                </div>
        )
    }
}

export default Table
