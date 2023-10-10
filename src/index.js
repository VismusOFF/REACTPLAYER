import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SearchModule from './searchmodule';
import PlaylistApp from './playlistappmodule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <div>
  <SearchModule/>
  </div>
  <div>
    <PlaylistApp/>
  </div>
</React.StrictMode>
);