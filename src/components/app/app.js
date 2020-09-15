import React, { Component } from "react";

import Header from "../header";
import RandomTanks from "../random-tanks";
import TankopediaService from "../../services/tankopedia-service";
import { TankopediaServiceProvider } from "../../context";
import TestService from "../../services/test-services";
import ErrorBoundry from "../error-boundry";
import HeavyPage from "../pages/heavy-page";
// import HeavyTanks from "../pages/heavy-tanks";
import MediumPage from "../pages/medium-page";
import MediumTanks from "../pages/medium-tanks";
import LightPage from "../pages/light-page";
import LightTanks from "../pages/light-tanks";
import PtSauPage from "../pages/ptsau-page";
import PtSauTanks from "../pages/ptsau-tanks";
import SauPage from "../pages/sau-page";
import SauTanks from "../pages/sau-tanks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";

const Record = ({ itemsInfo, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemsInfo[field]}</span>
    </li>
  );
};

export { Record };

export default class App extends Component {
  tankopediaService = new TankopediaService();
  testService = new TestService();
  state = {
    showRandomTanks: true,
    selectedItem: null,
    selectedMedium: null
  };

  onSelectedItem = (id) => {
    this.setState(() => {
      return {
        selectedItem: id,
      };
    });
  };

  onSelectedMedium = (id) => {
    this.setState(() => {
      return {
        selectedMedium: id,
      };
    });
  };

  onSelectedLight = (id) => {
    this.setState(() => {
      return {
        selectedLight: id,
      };
    });
  };

  onSelectedPtSau = (id) => {
    this.setState(() => {
      return {
        selectedPtSau: id,
      };
    });
  };

  onSelectedSau = (id) => {
    this.setState(() => {
      return {
        selectedSau: id,
      };
    });
  };

  render() {
    const tanks = this.state.showRandomTanks ? <RandomTanks /> : null;
    return (
      <ErrorBoundry>
        <Router>
          < TankopediaServiceProvider value={this.tankopediaService}>
            <Header />
            <div className="tanksdb-app">
              {tanks}
              <Switch>
                <Route path="/" render={() => <h1>Welcome Tankopedia!!!</h1>} exact />
                <Route path="/heavy/:id?" component={HeavyPage} />
                <Route path="/medium" component={MediumPage} exact />
                <Route path="/medium/:id" component={MediumTanks} />
                <Route path="/light" component={LightPage} exact />
                <Route path="/light/:id" component={LightTanks} />
                <Route path="/ptsau" component={PtSauPage} exact />
                <Route path="/ptsau/:id" component={PtSauTanks} />
                <Route path="/sau" component={SauPage} exact />
                <Route path="/sau/:id" component={SauTanks} />
                <Route render={() => <h1>Page not found!</h1>} />
              </Switch>
            </div>
          </TankopediaServiceProvider>
        </Router>
      </ErrorBoundry>
    );
  }
}