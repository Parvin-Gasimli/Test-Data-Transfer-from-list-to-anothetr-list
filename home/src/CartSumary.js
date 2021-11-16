import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class CartSumary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Your Cart-{this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Badge color="danger" onClick={()=>this.props.RemoveFromCart(cartItem.product)}>Sil </Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.count}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  RenderEmptyCart(){
     return(
        <NavItem>
        <NavLink>
            Empty Cart...
        </NavLink>
    </NavItem>
     )
  }


  render() {
    return <div>
        {this.props.cart.length>0?this.renderSummary():this.RenderEmptyCart()}
    </div>;
  }
}
