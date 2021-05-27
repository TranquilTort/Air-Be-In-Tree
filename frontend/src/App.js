// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home'
import TreeHouseForm from './components/TreeHouseForm'
import TreeHouseReview from './components/TreeHouseReview'
import About from './components/About'
import Splash from './components/Splash'
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <About />
      <Splash />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/new/treehouse'>
            <TreeHouseForm />
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/treehouse/:id'>
            <TreeHouseReview />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
