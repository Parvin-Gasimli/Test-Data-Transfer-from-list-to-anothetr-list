import React, { Component } from "react";
import { ListGroup, ListGroupItem, ModalHeader } from "reactstrap";

class Categorylist extends Component {
  state = {
    categories: [
      {
        id: 1,
        Name: "Mercedes",
        Year: 2019,
        Muherrik: 5.5,
        Model: "s 500",
      },
      {
        id: 2,
        Name: "Mercedes",
        Year: 2020,
        Muherrik: 5.5,
        Model: "Ganelwagen",
      },
      {
        id: 3,
        Name: "Range-Rover",
        Year: 2019,
        Muherrik: 5.0,
        Model: "Wolg",
      },
      {
        id: 4,
        Name: "BMW",
        Year: 2019,
        Muherrik: 4.4,
        Model: "F10",
      },
    ]
  };


  render() {
    return (
      <div>
        <h3> {this.props.info} </h3>
        <ListGroup>
          {this.state.categories.map((category) => {
            return (
              <ListGroupItem
              onClick={()=>this/this.props.changeCategory(category)}
               key={category.id}>
                Name:{category.Name}
                Year:{category.Year}
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <h4> {this.props.CurrentCategory}</h4>
      </div>
    );
  }
}

export default Categorylist;
