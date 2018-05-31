import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Headline.css';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showGT: false,
    };
  }

  toggleGT = () => {
    this.setState({ showGT: !this.state.showGT });
  }

  render() {
    const { headline } = this.props;
    const { showGT } = this.state;
    const displayGT = showGT ? 'hide' : 'show';
    return (
      <div className="headline-wrapper">
        <div>
          <h4>{headline.text_ua}</h4>
          {
            showGT ? (
              <p>
                Google said: <code>{headline.text_en_google}</code>
              </p>
            ) : null
          }
          <button
            name={`${displayGT}GT`}
            onClick={this.toggleGT}
          >{`Click to ${displayGT} translation`}
          </button>;
          <p>Y said: <code>{headline.text_en_user}</code></p>
          <br />
        </div>
      </div>
    );
  }
}

Headline.defaultProps = {
  headline: {
    text_ua: '',
    text_en_google: '',
    text_en_user: '',
  },
};

Headline.propTypes = {
  headline: PropTypes.shape({
    text_ua: PropTypes.string,
    text_en_google: PropTypes.string,
    text_en_user: PropTypes.string,
  }),
};


export default Headline;
