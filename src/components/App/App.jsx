import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchData from '../../containers/SearchData/SearchData';
import ArtistData from '../../containers/ArtistData/ArtistData';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:search?" component={SearchData} />
        <Route exact path="/artist/:artistId/:pageNum" component={ArtistData} />
      </Switch>
    </Router>
  );
}
