import React, { Component } from 'react'
import Table from '../components/Table.js';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
               items : [],
               newItemName :'',
               count: 0
        }
    }

    addTodo = (e) => {
        e.preventDefault()
        if(this.state.newItemName === '') {
            return
        }
        const newCount = this.state.count + 1
        this.setState({ items: [...this.state.items, this.state.newItemName], newItemName: '', count: newCount});
    }
    removeTodo = (e) => {
        let i = e.key
        const newCount = this.state.count - 1
        this.setState({ items : this.state.items.filter((_, index) => i !== index), count: newCount})
    } 
    addInput = (e) =>{
        this.setState({ newItemName : e.target.value})
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='h1'>To Do List</h1>
                    <h5 className='counter'># of Items: { this.state.count }</h5>
                </div>
                <form className='form-inline justify-content-center' onSubmit = {this.addTodo}>
                    <div className='row'>
                    <div className='form-group mb-2'>
                        <input  value={this.state.newItemName} onChange = {this.addInput}></input>
                    </div>
                    <div className='form-group mx-sm-3 mb-2'>
                        <button className="btn btn-primary item-button" type='submit'>Add</button>
                    </div>
                    </div>
                </form>
                
                <Table removeTodo = {this.removeTodo} items = {this.state.items}>
                    {this.state.items.map((item, index) => <li className="list-group-item" key = {index}>
                        <p className="h3 float-left">{item}</p>
                        <span className='row float-right'>
                        <div className='ml-2 mr-2'>
                            <button className="btn btn-success item-button" onClick = {() => console.log("hello")}>Finish</button>
                        </div>
                        <div className='ml-2 mr-2'>
                            <button className="btn btn-danger item-button" onClick = {this.removeTodo}>Delete</button>
                        </div>
                    </span>
                    </li>)}
                </Table>
            </div>
        )
    }
}

export default Todo
