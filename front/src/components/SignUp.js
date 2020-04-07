import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    };

    // this.updateEmailField = this.updateEmailField.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  // updateEmailField(event) {
  //   this.setState({ value: event.target.value });
  // }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form>
          <input type="email" name="email" onChange={this.updateField} />
          <input type="text" name="password" onChange={this.updateField} />
          <input type="text" name="firstname" onChange={this.updateField} />
          <input type="text" name="lastname" onChange={this.updateField} />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default SignUp;
