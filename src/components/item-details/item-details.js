import React, { Component } from "react";

import TankopediaService from "../../services/tankopedia-service";
import "./item-details.css";


export default class TanksDetails extends Component {
  tankopediaService = new TankopediaService();
  state = {
    tanksInfo: {},
    howClass: 'light'
  }
  componentDidUpdate(prevProps){
    if(prevProps.selectedItem !== this.props.selectedItem){
      switch(this.state.howClass){
        case 'medium':
          this.tankopediaService.getMedium(this.props.selectedItem).then(data=>{
            this.setState({tanksInfo : data})
          })
        break
        case 'light':
          this.tankopediaService.getLight(this.props.selectedItem).then(data=>{
            this.setState({tanksInfo : data})
          })
        break
        default:
          this.tankopediaService.getHeavy(this.props.selectedItem).then(data=>{
            this.setState({tanksInfo : data})
          })
        break

      }
    }
  }
  render() {
    const {id,name,damage,breakingThrough,weight,strength,bodyArmor,towerArmor}=this.state.tanksInfo
    return (
      <div className="tanks-details card">
        <img
          className="tanks-image col-md-6"
          src={`https://raw.githubusercontent.com/JSDenis/gallery-tanks/master/heavy_tanks/${id}.jpg`}
          alt="character"
        />
        <div className="card-body col-md-6">
    <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Damage</span>
              <span>{damage}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Breaking Through</span>
              <span>{breakingThrough}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Weight</span>
              <span>{weight}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Strength</span>
              <span>{strength}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Body Armor</span>
              <span>{bodyArmor}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Tower Armor</span>
              <span>{towerArmor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
