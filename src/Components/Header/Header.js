import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './Header.css';

const Header = (props) => {
  return (
    <header>
      <Link to="/" onClick={props.createPage ? () => { props.updateCreatePage(!props.createPage) } : null}>
        <h1>To-Do-List Collection</h1>
      </Link>
      <Link to={props.createPage ? "/" : "/createnewlist"} onClick={() => { props.updateCreatePage(!props.createPage) }}>
        <Button
          content={props.createPage ? "Back to Home" : "Create New To-Do-List"}
          textcolor="standard"
          maincolor="standard"
        >
        </Button>
      </Link>
    </header>
  );
}

export default Header;