import React, { Component } from 'react';
import Headline from '../Headline/Headline';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
    };
  }
  componentDidMount() {
    this.getAllHeadlines();
  }

  getAllHeadlines = async () => {
    try {
      const response = await fetch('https://avid-equator-203600.appspot.com/headlines');
      const headlines = await response.json();
      this.setState({ headlines });
    } catch (error) {
      console.log(`A problem with your fetch: ${ // eslint-disable-line no-console
        error.message}`);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.headlines.map(headline => (
          <Headline headline={headline} />
        ))}
      </div>
    );
  }
}

export default App;
