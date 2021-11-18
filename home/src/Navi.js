import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  
  NavbarText

} from "reactstrap";
import CartSumary from "./CartSumary";

class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                <Link style={{textDecoration:'none' ,color:'black' ,fontSize:'14px' ,fontWeight:'bold'}} to="form1">Go to Form</Link>
                </NavLink>
                <NavLink>
                <Link style={{textDecoration:'none' ,color:'black' ,fontSize:'14px' ,fontWeight:'bold'}} to="form2">Go to Form2</Link>
                </NavLink>
                <NavLink>
                <Link style={{textDecoration:'none' ,color:'black' ,fontSize:'14px' ,fontWeight:'bold'}} to="/">Go to Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
              
              </NavItem>
              <CartSumary
              RemoveFromCart={this.props.RemoveFromCart}

               cart={this.props.cart}/>
          
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;
