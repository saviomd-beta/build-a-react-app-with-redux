import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Redux</h1>
        </header>
        <div className="Todo-App">
          <TodoForm
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.changeCurrent}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
