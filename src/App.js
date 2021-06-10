import React from "react";
import StartPage from "./Components/StartPage";
import Icons from "./Components/Icons";
import Head from "./Components/Head";
import OverBody from "./Components/OverBody";
import Arms from "./Components/Arms";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Icons
          headLink="/head"
          overbodyLink="/overBody"
          armLink="/arms"
          headDisplay="none"
          overbodyDisplay="none"
          armsDisplay="none"
        />
        <Switch>
          <Route exact path="/">
            <StartPage />
          </Route>
          <Route path="/head">
            <Head />
          </Route>
          <Route path="/arms">
            <Arms />
          </Route>
          <Route path="/overBody">
            <OverBody />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
