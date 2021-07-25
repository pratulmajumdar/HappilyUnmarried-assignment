import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Categories from '../categories';
import Products from '../products';

class Home extends Component {
  constructor(props) {
    super();
    // this.state = {
    // };
  }

  render() {
    return <Fragment>
        <Categories />
        <Products />
    </Fragment>;
  }
}

export default Home;
