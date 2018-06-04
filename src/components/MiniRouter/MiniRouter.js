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

  updateHash = (hash, date) => {
    this.setState({
      hash,
      dateToShow: date,
    });
  }

  render() {
    const miniRoutes = {
      '#dates': <DatesPage updateHash={this.updateHash} />,
      '#headlines': (
        <HeadlinesPage
          dateToShow={this.state.dateToShow}
          updateHash={this.updateHash}
        />
      ),
    };

    if (miniRoutes[this.state.hash]) return miniRoutes[this.state.hash];
    return miniRoutes['#dates'];
  }
}
