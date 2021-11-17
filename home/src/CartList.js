import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Prdouct Name</th>
            <th>Unit Quantity</th>
            <th>Unit Price</th>
            <th>Units in Stocks</th>
        
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartitem) => (
            <tr key={cartitem.product.id}>
              <td>{cartitem.product.id}</td>
              <td>{cartitem.product.productName}</td>
              <td>{cartitem.product.quantityPerUnit}</td>
              <td>{cartitem.product.unitPrice}</td>
              <td>{cartitem.product.unitsInStock}</td>
         
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return (
      <div>
        {this.renderCart()}
      </div>
    );
  }
}
