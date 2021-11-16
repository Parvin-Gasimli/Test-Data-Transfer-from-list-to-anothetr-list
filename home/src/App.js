import Categorylist from "./CategoryList";
import React, { Component } from "react";
import Navi from "./Navi";
import Productlist from "./ProductList";
import { Col, Container, Row } from "reactstrap";

class App extends Component {
  state = {
    CurrentCategory: "",
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var AddItem = newCart.find((c) => c.product.id === product.id);
    if (AddItem) {
      AddItem.quantity += 1;
    } else {
      newCart.push({ product: product, queantity: 1 });
    }

    this.setState({ cart: newCart });
  };
  changeCategory = (category) => {
    this.setState({ CurrentCategory: category.categoryName });
    // console.log(category)
    this.getProducts(category.id);
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3002/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((resonse) => resonse.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    let TitleProduct = { title: "Hi Product", any: "hello Pro" };
    let TitleCategory = "Hello Category";
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <Categorylist
                CurrentCategory={this.state.CurrentCategory}
                changeCategory={this.changeCategory}
                info={TitleCategory}
              />
            </Col>
            <Col xs="9">
              <Productlist
                products={this.state.products}
                CurrentCategory={this.state.CurrentCategory}
                changeCategory={this.changeCategory}
                info={TitleProduct}
                addToCart={this.addToCart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
