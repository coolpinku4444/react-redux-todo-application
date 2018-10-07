import React, { Component } from 'react';
import  TodoList from './components/todolist';
import TodoForm from './components/todoform';
import {HWrapper} from './components/styledComponents/styledComponents'

class App extends Component {
  render() {
    return (
      <div>
        <HWrapper>Add Task</HWrapper>
        <TodoForm />
        <HWrapper>List Of Task</HWrapper>
        <TodoList />
      </div>
    );
  }
}

export default App;
