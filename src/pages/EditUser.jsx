import axios from "axios";
import React from "react";

class FormEditUser extends React.Component {
  state = {
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    avatar: "",
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:3000/api/user/edit/${id}`)
      .then((response) => {
        const data = response.data;

        this.setState({
            firstName: data.name,
            LastName: data.image,
            email: data.price,
            password: data.brand,
            avatar: data.avatar,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .patch(`http://localhost:3000/api/user/edit/${id}`, {
        firstName: this.state.name,
        LastName: this.state.image,
        email: this.state.price,
        password: this.state.brand,
        avatar: this.state.avatar,
      })
      .then((response) => {
        this.props.history.push("/user/list");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
//
  render() {
    return (
      <div>
        <h1>Hello Editing form !</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Image</label>
            <input
              onChange={this.handleChange}
              value={this.state.image}
              name="image"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">brand</label>
            <input
              onChange={this.handleChange}
              value={this.state.brand}
              name="brand"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">price</label>
            <input
              onChange={this.handleChange}
              name="price"
              type="number"
              value={this.state.price}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormEditUser;
