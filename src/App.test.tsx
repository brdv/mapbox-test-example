import React from 'react';

import ReactDOM from 'react-dom';

import App from 'App';

describe('App:', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');

    ReactDOM.render(<App />, container);

    ReactDOM.unmountComponentAtNode(container);
  });
});
