import React from 'react';

import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Teams from "./views/Teams/Teams"
//import Calendar from "./views/Calendar/Calendar"
import FitnessTips from "./views/FitnessTips/FitnessTips"
//import HealthTips from "./views/HealthTips/HealthTips"
import NotFound from "./views/NotFound"
import CDC from "./views/CDC/CDC"
import Header from "./components/Header/Header"


const App = () => {
  return (
    <div style={{ display: "flex"}}>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Teams" component={Teams} />
        <Route exact path="/Calendr" component={Teams} />
        <Route exact path="/FitnessTips" component={FitnessTips} />
        <Route exact path="/HealthTips" component={FitnessTips} />
        <Route exact path="/CDCTips" component={CDC} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
