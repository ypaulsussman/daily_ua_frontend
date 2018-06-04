import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './HeadlinesPage.css';

export default class HeadlinesPage extends Component {
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
        </div>
      </div>
    );
  }
}

// Headline.defaultProps = {
//   headline: {
//     text_ua: '',
//     text_en_google: '',
//     text_en_user: '',
//   },
// };

// Headline.propTypes = {
//   headline: PropTypes.shape({
//     text_ua: PropTypes.string,
//     text_en_google: PropTypes.string,
//     text_en_user: PropTypes.string,
//   }),
// };
