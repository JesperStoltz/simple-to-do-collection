import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import CreateToDoList from "./Components/CreateToDoList/CreateToDoList";
import ToDoList from "./Components/ToDoList/ToDoList";
import { todos$ } from "./Storage/Store/Store";
import { updateToDos } from "./Storage/Store/Store";
import ToDoListsData from "./Storage/Data/ToDoListsData";
import './App.css';


const App = () => {
  const [allToDos, setAllToDos] = useState([]);
  const [createPage, setCreatePage] = useState(false);

  const updateCreatePage = (boolean) => {
    setCreatePage(boolean)
  }

  useEffect(() => { //Just to set up some mock data on first load
    if (allToDos.length > 4) {
      updateToDos(ToDoListsData);
      console.log(allToDos.length)
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    todos$.subscribe((allToDos) => {
      setAllToDos(allToDos);
    })
  }, [allToDos]);

  return (
    <div id="App">
      <Router>
        <Header createPage={createPage} updateCreatePage={updateCreatePage} />
        <main>
          <Switch>
            <Route path="/createnewlist">
              <CreateToDoList allToDos={allToDos} updateToDos={updateToDos} updateCreatePage={updateCreatePage} />
            </Route>
            <Route path="/selectedtodo">
              <ToDoList allToDos={allToDos} updateToDos={updateToDos} />
            </Route>
            <Route path="/">
              <Home allToDos={allToDos} updateToDos={updateToDos} />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
