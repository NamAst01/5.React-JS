import { Component } from "react";
import CustomInput from "../custominput/Custominput";

import "./sidebar.css";

class Sidebar extends Component {
  // constructor() {
  //     //console.log('Contructor sidebar component...')
  // }
  render() {
    return (
      <div className="sidebar">
        <h1>Sidebar component</h1>
        <form>
        <CustomInput type="password" placeholder="password" />
        <CustomInput type="password" placeholder="password" />
        </form>
      </div>
    );
  }
}
// function slidebar(){

// }

export default Sidebar;
