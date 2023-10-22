import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css";
import App from './App';
import SearchModule from './searchmodule';
import PlaylistApp from './playlistappmodule';
import TrackInPlaylist from './trackinplaylist';
import StrokaCnizy from './stroka';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <div className='container'>
    <div>
      <SearchModule/>

      <PlaylistApp/>
    </div>

    <div>
      <TrackInPlaylist/>
    </div>

  </div>

  <div>
    <StrokaCnizy/>
  </div>
</React.StrictMode>
);