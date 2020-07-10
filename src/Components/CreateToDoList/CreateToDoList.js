import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import ListItem from "../ListItem/ListItem";
import Button from "../Button/Button";
import './CreateToDoList.css';

const CreateToDoList = (props) => {
    const [title, setTitle] = useState("");
    const [todo, setToDo] = useState("");
    const [todos, setToDos] = useState([]);
    const [added, setAdded] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const onChangeToDo = (e) => {
        setToDo(e.target.value);
    };

    const updateToDos = (e) => {
        e.preventDefault();
        if (todo) {
            let newToDos = todos;
            let contentObject = {
                _id: Math.round(Math.random() * Math.floor(100)), //Easy id-solution, wouldn't normally use it.
                content: todo,
                completed: false
            };
            newToDos.push(contentObject);
            setToDos([...newToDos]);
            setToDo("");
            document.querySelector("#todo_input").focus();
            return;
        }
        else {
            return;
        }
    };

    const onClickSaveToDo = (e) => {
        e.preventDefault();
        if (!title || todos.length === 0) {
            setErrorMessage("A To-Do-List needs both a title and something to do.")
        }
        else {
            let newToDos = props.allToDos;
            newToDos.push({
                _id: Math.round(Math.random() * Math.floor(100)), //Easy id-solution, wouldn't normally use it.
                title: title,
                list: todos,
            });
            props.updateToDos([...newToDos]);
            setAdded(true);
        }
    };

    if (added) {
        props.updateCreatePage(false)
        return <Redirect to='/' />
    };

    let renderToDos = todos.map((todo) => {
        return (
            <ListItem id={todo._id} completed={todo.completed} content={todo.content} />
        )
    });

    return (
        <div id="CreateToDoList">
            <h2>Create a new To-Do-List!</h2>
            <p>{errorMessage}</p>
            <form>
                <label htmlFor="title_input">Title</label>
                <input id="title_input" type="text" min={1} value={title} onChange={onChangeTitle} autoFocus={true} />
                <label htmlFor="todo_input">Todo</label>
                <input id="todo_input" type="text" min={1} value={todo} onChange={onChangeToDo} />
                <Button textcolor="standard" maincolor="standard" content="Add To Do" onclickhandle={updateToDos} />
                <br />
                {renderToDos}
                <br />
                <Button textcolor="standard" maincolor="standard" content="Save To-Do-List" onclickhandle={onClickSaveToDo} />
            </form>
        </div>
    );
}

export default CreateToDoList;
