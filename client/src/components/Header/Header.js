import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import "./style.css";
import Payments from "../Payments/Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavDropdown id="nav-dropdown" title="Login" drop="start">
            <NavDropdown.Item
              className="btn btn-google btn-block btn-outline"
              href="/auth/google"
            >
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google Logo"
              />{" "}
              Signup Using Google
            </NavDropdown.Item>
          </NavDropdown>
        );
      default:
        return [
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Tooltip id="tooltip-bottom">
                To add credits use the credit card number 4242 4242 4242 4242 - 01/30 - CVC:
                123
              </Tooltip>
            }
          >
            <Nav.Link key="1" className="navlinks text-light">
              <Payments />
            </Nav.Link>
          </OverlayTrigger>,
          <Nav.Link key="2" className="navlinks text-light">
            Credits: {this.props.auth.credits}
          </Nav.Link>,
          <Nav.Link key="3" className="navlinks text-light" href="/api/logout">
            Logout
          </Nav.Link>,
        ];
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" fixed="top" className="background">
        <Container className="d-flex align-items-center justify-content-between">
          <Navbar.Brand
            href={this.props.auth ? "/surveys" : "/"}
            className="fw-bold text-light fs-3"
          >
            Emaily
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-aut align-items-center">
              {this.renderContent()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
