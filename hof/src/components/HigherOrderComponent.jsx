import { Component } from "react";
import React from 'react';

class HigherOrderFunctions extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  renderingItems = () => {
    const data = this.state.userData;
    return data.map((eachItem) => (
      <React.Fragment key={eachItem.id}>
        <li className="list-elements">
          <span>Id: {eachItem.id} </span>&nbsp;&nbsp;
          <span>Name : {eachItem.name}</span>&nbsp;&nbsp;
          <span>User Type: {eachItem.user_type}</span>
        </li>
      </React.Fragment>
    ));
  }

  filteringItems = (filterCondition) => {
    const items = this.state.userData;
    return items
      .filter(filterCondition)
      .map((Item) => (
        <li key={Item.id} className="list-elements">
          <span>Id: {Item.id}</span>&nbsp;&nbsp;
          <span>Name : {Item.name}</span>&nbsp;&nbsp;
          <span>User Type: {Item.user_type}</span>
        </li>
      ));
  }

  totalYears = () => {
    return this.state.userData
      .filter((each) => each.user_type.toLowerCase() === "designer")
      .reduce((acc, designer) => acc + designer.years, 0);

  }


  render() {
    return (
      <React.Fragment>
        <h2>Display all items</h2>
        <div>
          <ul className="list">
            {this.renderingItems()}
          </ul>
        </div>
        <h2>Display based on user type</h2>
        <div>
          <ul className="list">
            {this.filteringItems((each) => each.user_type.toLowerCase().includes("designer"))}
          </ul>
        </div>
        <h2>Filter all data starting with J</h2>
        <div>
          <ul className="list">
            {this.filteringItems((each) => each.name.toLowerCase().includes("j"))}
          </ul>
        </div>
        <h2>Filter all data based on age greater than 28 and age less than or equal to 50</h2>
        <div>
          <ul className="list">
            {this.filteringItems((each) => each.age>28 && each.age<=50)}
          </ul>
        </div>
        <h2>Find the total years of the designers</h2>
        <div>
            <ul className="list"><li>{this.totalYears()}</li></ul>
        </div>
        
      </React.Fragment>
    );
  }
}

export default HigherOrderFunctions;
