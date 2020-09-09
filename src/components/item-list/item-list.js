import React, { Component } from "react";

import TankopediaService from "../../services/tankopedia-service";

import "./item-list.css";


export default class ItemList extends Component {
  tankopediaService = new TankopediaService();

  state = {
    howClass: 'light',
    items: []
  }

  componentDidMount() {
    switch(this.state.howClass){
      case 'medium':
        this.tankopediaService.getAllMedium().then(data => {
          this.setState({
            items: data
          })
          console.log(this.state);
        })
        break
      case 'light':
        this.tankopediaService.getAllLight().then(data => {
          this.setState({
            items: data
          })
          console.log(this.state);
        })
        break
        default:
      this.tankopediaService.getAllHeavy().then(data => {
        this.setState({
          items: data
        })
        console.log(this.state);
      })
      break

    }
  }

  render() {

    const { items } = this.state;

    return (
      <ul className="item-list list-group">
        {
          items.map(item => {
            return <li className="list-group-item" onClick={()=>this.props.onSelectedItem(item.id)} key={item.id}>{item.name}</li>
          })
        }
      </ul>
    );
  }
}
