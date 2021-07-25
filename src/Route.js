import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
// import NotFound from './utils/NotFound';
import { connect } from 'react-redux';
import Home from './components/home';

class CustomRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/ustraa" />
            <Route exact path="/ustraa" component={Home} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomRoute);
