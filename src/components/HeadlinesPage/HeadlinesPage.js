import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Headline from '../Headline/Headline';

import './HeadlinesPage.css';

export default class HeadlinesPage extends Component {
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
      const response = await fetch(`https://avid-equator-203600.appspot.com/headlines?date_to_show=${this.props.dateToShow}`);
      const headlines = await response.json();
      this.setState({ headlines });
    } catch (error) {
      console.log(`A problem with your fetch: ${ // eslint-disable-line no-console
        error.message}`);
    }
  }

  render() {
    return (
      <div className="headlines-wrapper">
        <button
          onClick={() => { this.props.updateHash('#date'); }}
        >
          Go to Dates Page
        </button>

        <h1>{this.props.dateToShow}</h1>

        {this.state.headlines.map(headline => (
          <Headline headline={headline} key={headline.id} />
        ))}
      </div>
    );
  }
}

HeadlinesPage.defaultProps = {
  dateToShow: '',
};

HeadlinesPage.propTypes = {
  dateToShow: PropTypes.string,
  updateHash: PropTypes.func.isRequired,
};
