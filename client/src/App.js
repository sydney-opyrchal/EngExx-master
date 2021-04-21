import React from 'react';

import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Teams from "./views/Teams/Teams"
import TheCalendar from "./views/TheCalendar/TheCalendar"

import FitnessTips from "./views/FitnessTips/FitnessTips"
import HealthTips from "./views/HealthTips/HealthTips"
import CDC from "./views/CDC/CDC"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Login from "./views/Login/login"
import Workouts from "./views/Workouts/Workouts"


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
        <Route exact path="/Calendar" component={TheCalendar} /> 
        <Route exact path="/FitnessTips" component={FitnessTips} />
        <Route exact path="/HealthTips" component={HealthTips} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/CDCTips" component={CDC} />
        <Route exact path="/Workouts" component={Workouts} />
        
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;