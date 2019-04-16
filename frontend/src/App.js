import React, { Component } from 'react';
import Members from "./components/Members";
import MyForm from "./components/Form/Form";
import './styles/styles.scss';

class App extends Component {
  state = {
    submitted: false,
  }

  onSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await fetch("http://localhost:3001/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const json = await res.json();

      this.setState({
        submitted: true,
        email: json.email,
      });
    } catch(err) {
      // TODO: Handle error
    }

    setSubmitting(false);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Who paid 99¢?</h1>
          <p>An exclusive club reserved only for people who paid 99¢</p>
          <p>Aren't you curious? Please don't tell.</p>
        </header>

        { this.state.submitted ? (
            <Members
              email={this.state.email}
            />
          ) : (
            <MyForm 
              onSubmit={this.onSubmit}
            />
          )
        }

        <footer>
          <p>Your name will be public. Obviously. That's the point. Just use a fake one if you want.</p>
          <p>Your receipt will be emailed to you.</p>
          <cite>All sales are final. Please don't sue us. No copyright intended.</cite>
        </footer>
      </div>
    );
  }
}

export default App;
