import { Component } from 'react';
import PropTypes from 'prop-types';

export default class MiniRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: window.location.hash,
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.updateHash);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.updateHash);
  }

  updateHash = () => {
    this.setState({ hash: window.location.hash });
  }

  render() {
    if (this.props.mapping[this.state.hash]) { return this.props.mapping[this.state.hash]; }
    return this.props.mapping['*'];
  }
}

MiniRouter.defaultProps = {
  mapping: {},
};

MiniRouter.propTypes = {
  mapping: PropTypes.shape({
    '#dates': PropTypes.object,
    '#headlines': PropTypes.object,
    '*': PropTypes.object,
  }),
};
