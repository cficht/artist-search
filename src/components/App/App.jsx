import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../Header/Header';
import SearchData from '../../containers/SearchData/SearchData';
import ArtistData from '../../containers/ArtistData/ArtistData';
import ReleaseData from '../../containers/ReleaseData/ReleaseData';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/:search?/:pageNum?" component={SearchData} />
        <Route exact path="/artist/:artistName/:artistId/:pageNum" component={ArtistData} />
        <Route exact path="/release/:artistName/:releaseId" component={ReleaseData} />
      </Switch>
    </Router>
  );
}

