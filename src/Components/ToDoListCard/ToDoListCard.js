import React from 'react';
import { Link } from "react-router-dom";
import './ToDoListCard.css';

const ToDoListCard = (props) => {

    return (
        <div className="toDoListCard-container">
            <div className="toDoListCard-remove" id={props.toDoId} onClick={props.onclickhandle}>X</div>
            <Link to={`/selectedtodo/#${props.toDoId}`}>
                <div className="toDoListCard">
                    {props.title}
                </div>
            </Link>
            {props.completedAll ? <div className="toDoListCard-completedAll">✔</div> : <></>}
        </div>
    );
}

export default ToDoListCard;
