import React from "react";
import "./../styles/FormSignUp.css"

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
      <div className="Form-add">
        <button className="btn" type="button" onClick={this.toggleForm}> Add More ingredients</button>
        {this.state.isDisplayed && (
          <div>
            <ul>
              <li>
              <label>Quantity</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="quantity"
                />
                <span>Enter the quantity here</span>
              </li>
              <li>
              <label>Unit</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="unit"
                />
                <span>Enter the unit here</span>
              </li>
              <li>
              <label>Value</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="value"
                />
                <span>Enter the value here</span>
              </li>
              <li>
                <button className="btn" type="button" onClick={() =>
                this.props.handleClick({
                  quantity: this.state.quantity,
                  unit: this.state.unit,
                  value: this.state.value
                })
                }>Submit</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default FormInsertNewIngredient;