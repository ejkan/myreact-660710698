import React from 'react';
import './App.css';
import Clock from './components/Clock';
import ComponentExamples from './components/ComponentExamples';
import Greeting from './components/Greeting';
import TodoList from './components/TodoList';
import UserCard from './components/UserCard';
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
        <Welcome/>
        <Greeting/>
        <UserCard/>
        <Clock/>
        <TodoList/>
    </div>
  );
}

export default App;
