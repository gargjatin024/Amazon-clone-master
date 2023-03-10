import React, { useEffect } from "react";
import './App.css';

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import Payment from "./Payment";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
