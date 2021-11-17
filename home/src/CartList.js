import React, { Component } from "react";
import { Button, Table } from "reactstrap";

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
            <th>Count</th>
          
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
                   <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.quantityPerUnit}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.count}</td>
              <td>
                <Button style={{color:'white',backgroundColor:'red'}} onClick={()=>window.confirm("Secdiyiniz Mehsulu sebetden silmek istediyinize emminsinizmi?") && this.props.RemoveFromCart(cartItem.product)} >
                  Remowe
                </Button>
              </td>
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
    )
  }
}
