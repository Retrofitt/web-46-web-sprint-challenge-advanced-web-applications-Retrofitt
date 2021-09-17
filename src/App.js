import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";
import axiosWithAuth from "./helpers/axiosWithAuth";

function App() {

  const logout = (evt) =>{
    axiosWithAuth()
      .post('/logout')
      .then(res=>{
        localStorage.removeItem('token')
        window.location.href='http://localhost:3000/login'
      })
      .catch(err=>{
        console.error(err)
      }) 
  }
  
  

  console.log(localStorage)
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href={"Logout"} onClick={logout}>logout</a>
        </header>
        <PrivateRoute exact path='/BubblePage' component={BubblePage}/>
        <Route path='/Login'/>
        <Route path='/' component={Login}/>
        
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
