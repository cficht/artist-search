import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SearchData from '../../containers/SearchData';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchData} />
      </Switch>
    </Router>
  );
}
