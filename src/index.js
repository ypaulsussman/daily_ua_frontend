import React from 'react';
import ReactDOM from 'react-dom';
import DatesPage from './components/DatesPage/DatesPage';
import HeadlinesPage from './components/HeadlinesPage/HeadlinesPage';
import MiniRouter from './components/MiniRouter/MiniRouter';

const miniRoutes = {
  '#dates': <DatesPage />,
  '#headlines': <HeadlinesPage />,
  '*': (
    <div>
      how did you get here...
      <br />
      <a href="#dates">DatesPage</a>
      <br />
      <a href="#headlines">HeadlinesPage</a>
    </div>
  ),
};

ReactDOM.render(<MiniRouter mapping={miniRoutes} />, document.getElementById('root'));
