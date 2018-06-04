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
      // const response = await fetch('http://localhost:3001/');
      const response = await fetch('https://avid-equator-203600.appspot.com/');
      // replace above line after pushing server code to app engine
      const dates = await response.json();
      this.setState({ dates });
    } catch (error) {
      console.log(`A problem with your fetch: ${ // eslint-disable-line no-console
        error.message}`);
    }
  }

  render() {
    return (
      <div className="dates-wrapper">
        {this.state.dates.map(date => (
          <div className="date-wrapper">
            <button
              onClick={() => { this.props.updateHash('#headlines', date); }}
              key={date}
            >
              {date}
            </button>
            <br />
            <br />
          </div>
        ))}


      </div>
    );
  }
}

DatesPage.propTypes = {
  updateHash: PropTypes.func.isRequired,
};
