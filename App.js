import React, { Component } from 'react';
import './App.css';
import Shop from "./components/Shop";

class App extends Component {
  
  render() {
    const items = [
      {
        heading :"Cap - $5",
        name :"Cap",
        price:5
      },
      {
        heading :"Hand Bag - $30",
        name :"HandBag",
        price:30
      },
      {
        heading :"Shirt - $35",
        name :"Shirt",
        price:35
      },
      {
        heading :"Shoes - $50",
        name :"Shoe",
        price:50
      },
      {
        heading :"Pant - $35",
        name :"Pant",
        price:35
      },
      {
        heading :"Slipper - $25",
        name :"Slipper",
        price:25
      },
    ]

    return (
      <div className="App">
        <div style={{paddingTop:"5px"}}>
         <img style={{float:'left'}} alt="Your Cart" width="75"  height="75" src="/HackerRank_logo.png" className="d-inline-block align-top" />
         <h1 style={{ paddingRight: "1163px" , width:'264px'}} >
          Hacker Shop
        </h1>
        </div>
        <Shop items={items}/>
      </div>
    );
  }
}

export default App;
