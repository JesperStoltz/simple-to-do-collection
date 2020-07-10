import React from 'react';
import ToDoLists from "../TodoLists/ToDoLists";
import './Home.css';

const Home = (props) => {
  return (
    <div id="Home">
      <p>Your To-Do-Lists:</p>
      <ToDoLists allToDos={props.allToDos} updateToDos={props.updateToDos} />
    </div>
  );
}

export default Home;
