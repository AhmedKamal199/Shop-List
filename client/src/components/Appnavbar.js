import React, { Fragment } from "react";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";

const Appnavbar = ({ auth }) => {
  const [isOpen, setOpen] = useState(false);

  const { isAuthneticated, user } = auth;
  const userLink = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.name}` : ""}</strong>
        </span>
        <Logout />
      </NavItem>
    </Fragment>
  );
  const guestLink = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );
  return (
    <Navbar color="dark" dark expand="sm" className="mb-5">
      <Container>
        <NavbarBrand href="/">Shoppling list</NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuthneticated ? userLink : guestLink}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
//    }  for render
const mapStateToProps = state => ({
  auth: state.auth
});

Appnavbar.propTypes = {
  auth: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  null
)(Appnavbar);
