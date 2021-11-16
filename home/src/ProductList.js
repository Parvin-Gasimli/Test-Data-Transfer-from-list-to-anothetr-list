import React, { Component } from "react";
import { Table } from "reactstrap";

class Productlist extends Component {
  render() {
    return (
      <div>
        <h3>
          {" "}
          {this.props.info.title}- {this.props.CurrentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>Num</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitsInStock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row"> {product.id} </th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Productlist;
