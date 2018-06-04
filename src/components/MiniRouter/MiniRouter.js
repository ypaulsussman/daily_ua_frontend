import React, { Component } from 'react';
import DatesPage from '../DatesPage/DatesPage';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';

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
    this.setState({
      hash: window.location.hash,
      dateToShow: 'foo to tha bar',
    });
  }

  render() {
    const miniRoutes = {
      '#dates': <DatesPage />,
      '#headlines': <HeadlinesPage dateToShow={this.state.dateToShow} />,
    };

    if (miniRoutes[this.state.hash]) return miniRoutes[this.state.hash];
    return miniRoutes['#dates'];
  }
}
