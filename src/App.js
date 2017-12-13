import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './material_ui_raw_theme_file.js'
import RaisedButton from 'material-ui/RaisedButton';

import SearchForRestaurant from './containers/SearchForRestaurant.js'
import ClaimRestaurant from './containers/ClaimRestaurant.js'
import SignIn from './containers/SignIn.js'
import Dashboard from './containers/Dashboard.js'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <Router>
    <MuiThemeProvider muiTheme={theme}>
      <div>
        <Route exact path="/" component={SearchForRestaurant} />
        <Route path="/claim/:id/:name" component={ClaimRestaurant} />
        <Route path="/login" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/:subPath" component={Dashboard} />
      </div>
    </MuiThemeProvider>
  </Router>
)
export default App