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
    const {
      text_ua: textUA,
      text_en_google: textENGoogle,
      text_en_user: textENUser,
    } = this.props.headline;
    const { showGT } = this.state;
    const displayGT = showGT ? 'hide' : 'show';

    return (
      <div className="headline-wrapper">
        <div>
          <h4>{textUA}</h4>

          {showGT && (
            <p>
              Google said: <code>{textENGoogle}</code>
            </p>
          )}

          <button
            name={`${displayGT}-google-translation`}
            onClick={this.toggleGT}
          >{`Click to ${displayGT} translation`}
          </button>

          {textENUser && (
            <p>
              Y said: <code>{textENUser}</code>
            </p>
          )}
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
