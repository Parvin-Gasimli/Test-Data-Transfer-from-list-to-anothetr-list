import React, { Component } from 'react';

class Productlist extends Component {
    render() {
        return (
            <div>
              <h3> {this.props.info.title}</h3>
              <h3> {this.props.info.any}</h3>
            </div>
        );
    }
}

export default Productlist;
