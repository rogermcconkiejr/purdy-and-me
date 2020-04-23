import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
               items : [],
               newItemName :''
        }
    }

    addTodo = () => {
        let newItems = this.state.items
        if (this.state.newItemName == '') {
            return
        }
        newItems.push(this.state.newItemName)
        console.log(this.state.items)
        this.setState({items : newItems})
        console.log(this.state.items)
    }
    addInput = (e) =>{
        console.log('e', e.target.value)
        this.setState({ newItemName : e.target.value})
    }

    render() {
        return (
            <div>
                <input onChange = {this.addInput}></input>
                <button onClick = {this.addTodo}>Add Todo</button>
                <div>
                    <ul>
                    {this.state.items.map((item, index) => <li key = {index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo

