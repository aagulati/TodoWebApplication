import React, {Component} from 'react'
import axios from 'axios'

class AddTodo extends Component {

    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
     
    //axios.post('http://localhost:8000/TodoList/', {taskid:'5',taskname:'gotcha'})
    axios.post('http://localhost:8000/TodoList/', {taskid:Math.floor(Math.random() * 20), taskname:this.state.content})
         .then(res => {
        console.log(res);
        console.log(res.data);  
        })

    this.props.addTodo(this.state);
    this.setState ({
            content: ''
        })    
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
            )
    }
        
    
}

export default AddTodo