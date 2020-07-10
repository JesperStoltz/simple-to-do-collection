import React from 'react';
import ToDoListCard from "../ToDoListCard/ToDoListCard";
import './ToDoLists.css';

const ToDoLists = (props) => {

    const onClickRemoveList = (e) => {
        let allToDos = [...props.allToDos];
        const index = allToDos.map((todo) => { return todo._id }).indexOf(parseInt(e.target.id));
        allToDos.splice(index, 1);
        props.updateToDos(allToDos);
    }

    let allToDos = props.allToDos.map((todo) => {

        let completedAll = true;
        for (let item of todo.list) {
            if (item.completed === false) {
                completedAll = false;
                break;
            }
        }

        return (
            <ToDoListCard title={todo.title} toDoId={todo._id} key={todo._id} onclickhandle={onClickRemoveList} completedAll={completedAll} />
        )
    });

    return (
        <div id="ToDoLists">
            {allToDos}
        </div>
    );
}

export default ToDoLists;
