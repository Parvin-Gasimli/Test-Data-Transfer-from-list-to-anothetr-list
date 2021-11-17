import Categorylist from "./CategoryList";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Navi from "./Navi";
import Productlist from "./ProductList";
import { Col, Container, Row } from "reactstrap";
import alertify from "alertifyjs";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo from "./FormDemo";

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
      AddItem.count += 1;
    } else {
      newCart.push({ product: product, count: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(
      `${product.productName} adli Mehsul Sebete Elave edildi!!!`,
      1
    );
  };
  RemoveFromCart = (product) => {
    let newCart = this.state.cart;
    let deletedItem = newCart.find((e) => e.product.id === product.id);
    if (deletedItem.count > 1) {
      deletedItem.count -= 1;
    } else {
      newCart.pop(deletedItem);
    }
    this.setState({ cart: newCart });
    alertify.error(`${product.productName} Adli Mehsulu Sebetinizden silindi`);
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
          <Navi RemoveFromCart={this.RemoveFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <Categorylist
                CurrentCategory={this.state.CurrentCategory}
                changeCategory={this.changeCategory}
                info={TitleCategory}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Productlist
                      {...props}
                      products={this.state.products}
                      CurrentCategory={this.state.CurrentCategory}
                      changeCategory={this.changeCategory}
                      info={TitleProduct}
                      addToCart={this.addToCart}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={(props) => (
                    <CartList
                      {...props}
                      cart={this.state.cart}
                      RemoveFromCart={this.RemoveFromCart}
                    />
                  )}
                />
                <Route path="/form1" component={FormDemo}
                
                />
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
