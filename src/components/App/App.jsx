import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchData from '../../containers/SearchData/SearchData';
import ArtistData from '../../containers/ArtistData/ArtistData';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/:search?/:pageNum?" component={SearchData} />
        <Route exact path="/artist/:artistName/:artistId/:pageNum" component={ArtistData} />
      </Switch>
    </Router>
  );
}
