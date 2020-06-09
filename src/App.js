import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import TodosList from './components/todo-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';


class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <h2>MERN-TODO-App</h2>
          <Route path="/" exact component={TodosList} /> 
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>

        
      </Router>
    );
  }
  
}

export default App;
