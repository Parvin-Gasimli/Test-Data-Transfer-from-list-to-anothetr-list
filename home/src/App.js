import Categorylist from "./CategoryList";
import React, { Component } from "react";
import Navi from "./Navi";
import Productlist from "./ProductList";
import { Col, Container, Row } from "reactstrap";


class App extends Component {
  state={
    CurrentCategory:"asb"
  }
  changeCategory=(category)=>{
    this.setState({CurrentCategory:category.Name})

  } 
  render(){
    let TitleProduct={title:"Hi Product",any:"hello Pro"};
    let TitleCategory="Hello Category";
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3"> 
             <Categorylist CurrentCategory={this.state.CurrentCategory} changeCategory={this.changeCategory} info={TitleCategory} />
            </Col>
            <Col xs="9">
            <Productlist  info={TitleProduct} />
            </Col>
           
      
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;
