import React from 'react';
import MyEnhancedForm from "./components/Form/Form";
import './styles/styles.scss';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Who paid 99¢?</h1>
      <p>An exclusive club reserved only for people who paid 99¢</p>
      <p>Aren't you curious? Please don't tell.</p>
    </header>

    <MyEnhancedForm />

    <footer>
      <p>Your name will be public. Obviously. That's the point. Just use a fake one if you want.</p>
      <p>Your receipt will be emailed to you.</p>
      <cite>All sales are final. Please don't sue us. No copyright intended.</cite>
    </footer>
  </div>
);

export default App;
