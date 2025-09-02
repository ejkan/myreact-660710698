import React from 'react';
import './App.css';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import TodoList from './components/TodoList';
import UserCard from './components/UserCard';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
        <Welcome/>
        <Clock/>
        <UserCard/>
        <Greeting/>
        <TodoList/>
    </div>
  );
}

export default App;
