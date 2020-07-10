import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    return (
        <div className="listItem" key={props.id}>
            <p  id={props.id}
                key={props.id}
                className={props.completed ? "toDoListItem completed" : "toDoListItem"}
                onClick={props.onclickhandle}>
                {props.content}
            </p>
            <hr />
        </div>
    );
}

export default ListItem;
