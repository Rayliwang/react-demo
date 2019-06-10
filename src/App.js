import React, { Component } from 'react';
import { BrowserRouter, Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';

import AssessmentList from './containers/assessment/AssessmentList';

const NoMatch = ({ location }) => (
  <div>
    <h3 style={{textAlign: 'center'}}>No match for <code>{location.pathname}</code></h3>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={AssessmentList}/>
            <Route component={NoMatch}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
