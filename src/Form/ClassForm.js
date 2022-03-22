import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        {
          personName: "Abu Bakar",
          age: 25,
        },
        {
          personName: "Agartha",
          age: 65,
        },
        {
          personName: "E levi",
          age: 2,
        },
      ],

      userName: "",
      userAge: 0,
    };
  }

  //event handler for input feild
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(this.state.userName);
    console.log(this.state.userAge);
  };


  //event handler to add to array

  handleSubmit=(e)=>{
      e.preventDefault();

      let person={
          personName: this.state.userName,
          age: this.state.userAge
      }

      this.setState({
          persons:[...this.state.persons,person]
      })

      console.log(this.state.persons)
      console.log(person)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            placeholder="name"
            value={this.state.userName}
            onChange={this.handleChange}
            name="userName"
          />
          <br />
          <label>Age</label>
          <br />
          <input
            placeholder="age"
            value={this.state.userAge}
            type={"number"}
            onChange={this.handleChange}
            name="userAge"
          />
          <br />
          <button>Submit</button>
        </form>
        <br />
        <>
          {this.state.persons.map((item, index) => {
            return (
              <div key={index}>
                <h2>Name: {item.personName}</h2>
                <h2>age: {item.age}</h2>
                <hr />
              </div>
            );
          })}
        </>
      </div>
    );
  }
}

export default ClassForm;
