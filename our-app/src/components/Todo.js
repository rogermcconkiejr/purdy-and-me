import React, { Component } from 'react'
import Rows from '../components/Rows.js';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.removeTodo = this.removeTodo.bind(this)
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
        this.setState({items : newItems, newItemName : ''})
    }
    removeTodo = (todoToGo) => {
        console.log(this.state.items)
        console.log(todoToGo)
        let updatedList = this.state.items.filter(name => name !== todoToGo)
        // let updatedList = this.state.items.slice()
        // updatedList.splice(i, 1)
        this.setState({ items : updatedList})
        console.log(this.state.items)
    } 
    addInput = (e) =>{
        this.setState({ newItemName : e.target.value})
    }

    render() {
        return (
            <div>
                <input onChange = {this.addInput}></input>
                <button onClick = {this.addTodo}>Add Todo</button>
                <Rows removeTodo = {this.removeTodo} items = {this.state.items}/>
            </div>
        )
    }
}

export default Todo

