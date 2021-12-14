import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./style.css"

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Add credits to your account"
        amount={3000}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn button text-light">Add Credit</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
