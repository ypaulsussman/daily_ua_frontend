import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
    };
  }
  componentDidMount() {
    fetch('https://avid-equator-203600.appspot.com/headlines')
      .then(response => response.json())
      .then(headlines => this.setState({ headlines }))
      .catch((error) => {
        console.log(`A problem with your fetch operation: ${ // eslint-disable-line no-console
          error.message}`);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.headlines.map(headline => (
          <div>
            <h4>{headline.text_ua}</h4>
            <p>Google said: <code>{headline.text_en_google}</code></p>
            <p>Y said: <code>{headline.text_en_user}</code></p>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
