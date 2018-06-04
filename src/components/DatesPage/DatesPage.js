import React, { Component } from 'react';

import './DatesPage.css';

export default class DatesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testing: 'yes we\'re testing',
    };
  }

  render() {
    return (
      <div className="headlines-wrapper">
        <div>
          <h4>{this.state.testing}</h4>
          <a href="#headlines">HeadlinesPage</a>
        </div>
      </div>
    );
  }
}
