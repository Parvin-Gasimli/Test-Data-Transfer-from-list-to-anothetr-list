import React, { Component } from "react";
import { Table,Button } from "reactstrap";

class Productlist extends Component {
    addToCart=(product)=>{
        alert(`${product.productName} Adli mehsul Sebete eklendi`)
    }
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
              <th>quantity Per Unit</th>
              <th>units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row"> {product.id} </th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td> <Button onClick={()=>this.props.addToCart(product)} style={{width:'121px'}} color="info">Add To Cart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Productlist;
