import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//componets
import { Top } from "./pages/Top";
// import { getMedia } from "./apis/api";

const App = () => {
  return(
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path='/'>
            <Top />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
