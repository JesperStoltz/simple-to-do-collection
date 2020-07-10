import React, { useState, useEffect } from 'react';
import ListItem from "../ListItem/ListItem";
import './ToDoList.css';

const ToDoList = (props) => {
  const [selectedId, setSelectedId] = useState("");
  const [selectedList, setSelectedList] = useState([]);

  const onClickCompleteItem = (e) => {
    let indexOfItem = selectedList[0].list.map(item => { return item._id }).indexOf(parseInt(e.target.id));
    let indexOfTodo = props.allToDos.map(todo => { return todo._id }).indexOf(selectedId);
    let allToDos = [...props.allToDos];
    allToDos[indexOfTodo].list[indexOfItem].completed = !allToDos[indexOfTodo].list[indexOfItem].completed;
    props.updateToDos(allToDos);
  }

  let selectedToDo = selectedList.map((selectedToDo) => {

    let todos = selectedToDo.list.map((todo) => {
      return (
        <ListItem
          id={todo._id}
          completed={todo.completed}
          onclickhandle={onClickCompleteItem}
          content={todo.content}
        />
      )
    });

    return (
      <div key={selectedToDo._id}>
        <h2>{selectedToDo.title}</h2>
        <div id="ToDoList_todos">
          {todos}
        </div>
      </div>
    )
  });

  useEffect(() => {
    setSelectedId(parseInt(window.location.hash.substr(1)))
  }, []);

  useEffect(() => {
    const selected = props.allToDos.filter(todo => { return todo._id === parseInt(selectedId) });
    setSelectedList(selected)
  }, [selectedId, props.allToDos]);

  return (
    <div id="ToDoList">
      {selectedToDo}
    </div>
  );
}

export default ToDoList;
