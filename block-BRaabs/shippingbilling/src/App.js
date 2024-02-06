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
    };
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      shipping: { ...this.state.shipping, [name]: value },
    });
  };
  handleCheckbox = () => {
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };
  render() {
    var { isSame, shipping, billing } = this.state;
    var billinData = isSame ? shipping : billing;
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
                  className="input"
                  type="text"
                  value={this.state.shipping.address}
                  placeholder="e.g New Delhi Vasnat Vihar"
                />
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
                <label html="checkbox">
                  <input onChange={this.handleCheckbox} type="checkbox" /> Same
                  as the Shipping Address?
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
