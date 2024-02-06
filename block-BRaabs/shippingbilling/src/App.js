import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      billing: {
        address: "",
        zip: "",
        city: "",
        country: "",
      },
      isSame: false,
      errors: {
        address: "",
      },
    };
  }
  validateAddress = (address) => address.length >= 8;
  handleChange = ({ target }) => {
    const { name, value } = target;
    const { errors } = this.state;
    let error = "";
    switch (name) {
      case "address":
        error = this.validateAddress(value)
          ? ""
          : "Address must be at least 8 characters";
        break;

      default:
        break;
    }
    this.setState({
      shipping: { ...this.state.shipping, errors, [name]: value },
      errors: {
        ...this.state.errors,
        [name]: error,
      },
    });
  };
  handleCheckbox = () => {
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };
  render() {
    var { isSame, shipping, billing } = this.state;
    var billinData = isSame ? shipping : billing;
    var { errors } = this.state;
    return (
      <>
        <div className="container">
          <h1>Controlled Component</h1>
          <div className="form-container">
            <div className="fields">
              <form>
                <h2>Shipping Address</h2>
                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  onChange={this.handleChange}
                  type="text"
                  value={this.state.shipping.address}
                  placeholder="e.g New Delhi Vasnat Vihar"
                  id="input"
                  className={errors ? "error" : ""}
                />

                <span>{errors.address}</span>
                <br></br>
                <label htmlFor="zip">ZIP/Postal Code</label>
                <input
                  name="zip"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  value={this.state.shipping.zip}
                  placeholder="e.g. 176057"
                />
                <label htmlFor="city">City</label>
                <input
                  name="city"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  value={this.state.shipping.city}
                  placeholder="e.g. New Delhi"
                />
                <label htmlFor="country">Country</label>
                <input
                  className="input"
                  name="country"
                  onChange={this.handleChange}
                  type="text"
                  value={this.state.shipping.country}
                  placeholder="e.g India"
                />
              </form>
            </div>
            <div className="fields">
              <form>
                <h2>Billing Address</h2>

                <label htmlFor="checkbox">
                  <input onChange={this.handleCheckbox} type="checkbox" />
                  Same as the Shipping Address?
                </label>

                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  value={billinData.address}
                  placeholder="e.g New Delhi Vasnat Vihar"
                />
                <label htmlFor="zip">ZIP/Postal Code</label>
                <input
                  name="zip"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  value={billinData.zip}
                  placeholder="e.g. 176057"
                />
                <label htmlFor="city">City</label>
                <input
                  name="city"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  value={billinData.city}
                  placeholder="e.g. New Delhi"
                />
                <label htmlFor="country">Country</label>
                <input
                  className="input"
                  name="country"
                  onChange={this.handleChange}
                  type="text"
                  value={billinData.country}
                  placeholder="e.g India"
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
