import React, { Component } from "react";

import Header from "../header";
import RandomTanks from "../random-tanks";
import ItemList from "../item-list/item-list";
import TanksDetails from "../item-details/item-details";

import "./app.css";

export default class App extends Component {
  state = {
    showRandomTanks: true,
    selectedItem: null,
  };

  onSelectedItem = (id) => {
    this.setState(() => {
      return {
        selectedItem: id,
      };
    });
    console.log(this.state);
  };

  render() {
    const tanks = this.state.showRandomTanks ? <RandomTanks /> : null;

    return (
      <div className="tanksdb-app">
        <Header />
        {tanks}
        <div className="row mb2">
          <div className="col-md-12">
            <TanksDetails selectedItem={this.state.selectedItem} />
          </div>
          <div className="col-md-12">
            <ItemList onSelectedItem={this.onSelectedItem} />
          </div>
        </div>
      </div>
    );
  }
}
