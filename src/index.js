import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB2S5pK20Hbo-Rj6Iy4fqmVGMRWSdngBHs';

const App = () => {
  return <div>
    <SearchBar />
  </div>
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
