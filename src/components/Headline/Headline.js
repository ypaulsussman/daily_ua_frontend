import React from 'react';
import PropTypes from 'prop-types';

import './Headline.css';

function Headline({ headline }) {
  return (
    <div className="headline-wrapper">
      <div>
        <h4>{headline.text_ua}</h4>
        <p>Google said: <code>{headline.text_en_google}</code></p>
        <p>Y said: <code>{headline.text_en_user}</code></p>
        <br />
      </div>
    </div>
  );
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
