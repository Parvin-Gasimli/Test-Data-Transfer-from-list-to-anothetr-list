import React, { Component } from "react";

export default class FormDemo extends Component {
  state = { userName: "",city:'' };
  onChangehandler = (event) => {
    // this.setState({ userName: event.target.value });
    let name=event.target.name;
    let value=event.target.value;
    this.setState({[name]:value})
  };
  onsubmithandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmithandler}>
          <h2>User Name</h2>
          <input name="userName" onChange={this.onChangehandler} type="text" />
          <h2> Username Is {this.state.userName}</h2>
          <h2>City</h2>
          <input name="city" onChange={this.onChangehandler} type="text" />
          <h2> City Is {this.state.city}</h2>
          <input value="save" type="submit"></input>
        </form>
      </div>
    );
  }
}
