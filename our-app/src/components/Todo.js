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
        if(this.state.newItemName == '') {
            return
        }
        
        this.setState({ items: [...this.state.items, this.state.newItemName], newItemName: '', count: this.state.count += 1});
    }
    removeTodo = (i) => {
        this.setState({ items : this.state.items.filter((_, index) => i !== index), count: this.state.count -= 1})
    } 
    addInput = (e) =>{
        this.setState({ newItemName : e.target.value})
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1>To Do List</h1>
                    <h5 className='counter'># of Items: { this.state.count }</h5>
                </div>
                <form className='form-inline justify-content-center' onSubmit = {this.addTodo}>
                    <div className='row'>
                    <div className='form-group mb-2'>
                        <input  value={this.state.newItemName} onChange = {(e) => this.addInput(e)}></input>
                    </div>
                    <div className='form-group mx-sm-3 mb-2'>
                        <button className="btn btn-primary item-button" type='submit'>Add</button>
                    </div>
                    </div>
                </form>
                
                <Table removeTodo = {this.removeTodo} items = {this.state.items}/>
            </div>
        )
    }
}

export default Todo
