import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <div className="container">
            <did className="row">
              <div className="col">
                <h1>NuCamp</h1>
                <h2>a better way to camp</h2>
              </div>
            </did>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top">
          <div className="container">
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
      </>
    );
  }
}
