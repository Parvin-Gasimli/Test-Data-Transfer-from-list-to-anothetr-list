import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Categorylist extends Component {
  state = {
    categories: []
  };

  componentDidMount(){
    this.getCategories();
  }
  getCategories=()=>{
    fetch("http://localhost:3002/categories")
    .then(resonse=>resonse.json())
    .then(data=>this.setState({categories:data}));
  }


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
                {category.categoryName}
            
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
