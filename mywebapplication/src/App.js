import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'
import axios from 'axios';

class App extends Component {
  state = {
    todos: [
      {id:1, content: "test 11"},
      {id:2, content: "test 21"}
    ]
  }

  // Delete todos is not currently synced with backend
  deleteTodo = (id) => {
    console.log(id);
    
    axios.delete(`http://localhost:8000/TodoList/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState ({
      todos: todos
    })
      
  }

  
  async componentDidMount() {
  try {

    // Approach 1-> using await fetch
    //const res = await fetch('http://localhost:8000/TodoList/'); // fetching the data from api, before the page loaded
    //const todos = await res.json();
    //this.setState({
    //  todos
    //});

    //Approach 2-> using axios 
    axios.get(`http://localhost:8000/TodoList/`)
      .then(res => {
        const todos = res.data;
        this.setState({ todos });
        
      })
      
      
  } catch (e) {
    console.log(e);
  }
}

addTodo = (todo) => {
  console.log(todo);
  todo.id = Math.random();
  console.log(todo.id);
  let todos= [...this.state.todos, todo];
  this.setState ({
    todos
  });
}



  render () {
  return (
    <div className="App">
      <h1 className="centre blue-text">
        Todo List 
      </h1>
   
      {this.state.todos.map(item => (
          
          <div className="todos collection" key={item.taskid}>
            <div>{item.taskname}
            </div>
          </div>
      ))}
      
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo} /> 
    </div>
         
    
    
  );
  }
}

export default App;
