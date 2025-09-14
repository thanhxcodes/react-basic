import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import Home from './Home';
import Nav from './Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
import React from "react";
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/users" exact>
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header >

        <ToastContainer />
      </div >
    </Router>
  );
}

export default App;
