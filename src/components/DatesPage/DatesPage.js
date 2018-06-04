import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DatesPage.css';

export default class DatesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
    };
  }

  componentDidMount() {
    this.getAllDates();
  }

  getAllDates = async () => {
    try {
      const response = await fetch('http://localhost:3001/');
      const dates = await response.json();
      this.setState({ dates });
    } catch (error) {
      console.log(`A problem with your fetch: ${ // eslint-disable-line no-console
        error.message}`);
    }
  }

  render() {
    return (
      <div className="headlines-wrapper">
        <div>
          {this.state.dates.map(date => (
            <button
              onClick={() => { this.props.updateHash('#headlines', date); }}
              key={date}
            >{date}
            </button>
          ))}

          <a href="#headlines">Go to HeadlinesPage</a>
        </div>
      </div>
    );
  }
}

DatesPage.propTypes = {
  updateHash: PropTypes.func.isRequired,
};
