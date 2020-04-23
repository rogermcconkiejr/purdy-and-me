import React, { Component } from 'react'

class Rows extends Component {
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
            <div>
                <div>
                    <ul>
                    {this.props.items.map((item, index) => <li key = {index}>{item}<button onClick = {() => this.removeTodo(item)}>Remove</button></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Rows
