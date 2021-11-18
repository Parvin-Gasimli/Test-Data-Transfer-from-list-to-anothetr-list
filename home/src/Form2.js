import React, { Component } from "react";
import alertify from "alertifyjs";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";

export default class Form2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };
  handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(`${this.state.email} add to db!`);
    alertify.success(`${this.state.password} add to db!`);
    alertify.success(`${this.state.city} add to db!`);
    alertify.success(`${this.state.description} add to db!`);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email"> Email Adress </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter the Email"
              onChange={this.handleChange}
            >
              {" "}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="email"> Password </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter the password"
              onChange={this.handleChange}
            >
              {" "}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description </Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter the description"
              onChange={this.handleChange}
            >
              {" "}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label style={{width:'100%'}} for="city">
              <Input
                type="select"
                name="city"
                id="city"
                onChange={this.handleChange}
              >
                <option>Naxcivan</option>
                <option>Baku</option>
                <option>Sumqayit</option>
                <option>Lenkeran</option>
                <option>Agdas</option>
                <option>Fizuli</option>
                <option>Qubadli</option>
                <option>Zengilan</option>
                <option>Cebrayil</option>
              </Input>
            </Label>
          </FormGroup>
          <Button type="submit" onSubmit={this.handleSubmit}>
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
