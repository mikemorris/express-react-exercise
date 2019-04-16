import React, { Component, Fragment } from 'react';

class Members extends Component {
  state = {
    payments: [],
  }

  async componentWillMount() {
    this.setState({
      payments: await this.getPayments(),
    });
  }

  getPayments = async () => {
    try {
      const res = await fetch("http://localhost:3001/payments");
      return await res.json();
    } catch(err) {
      console.error(err);
      return [];
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Members</h2>
        <ul>
          {this.state.payments.map(payment => (
            <li>
              <span className="member">{payment.first_name} {payment.last_name}</span>
              {payment.email === this.props.email && (<span className="you">That's you!</span>)}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Members;
