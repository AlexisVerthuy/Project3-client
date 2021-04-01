import React from "react";
import "./../styles/global.css";

class FormInsertNewIngredient extends React.Component {
  state = {
    quantity: 0,
    unit: '',
    value: '',
    isDisplayed: false,
  };

  toggleForm = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ 
      [name]: value,
     });
  };


  render() {
    return (
      <div>
        <button type="button" onClick={this.toggleForm}> Add More ingredients</button>
        {this.state.isDisplayed && (
          <div>
            <p>Quantity</p>
            <input
              onChange={this.handleChange}
              type="number"
              name="quantity"
            />
            <p>Unit</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="unit"
            />
            <p>Value</p>
            <input
              onChange={this.handleChange}
              type="text"
              name="value"
            />
            <button type="button" onClick={() =>
              this.props.handleClick({
                quantity: this.state.quantity,
                unit: this.state.unit,
                value: this.state.value
              })
              }>Submit</button>
          </div>
        )}
      </div>
    );
  }
}

export default FormInsertNewIngredient;