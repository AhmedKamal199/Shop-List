import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
const LoginModal = ({ error, isAuthenticated, login, clearErrors }) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, SetMsg] = useState(null);

  useEffect(() => {
    if (error)
      // check error type
      SetMsg(error.msg.msg);
    else SetMsg(null);

    if (modal) {
      if (isAuthenticated) {
        toggle();
        clearErrors();
      }
    }
  }, [error, modal]);
  function toggle() {
    // Clear Errors
    clearErrors();
    setModal(!modal);
  }

  function onSubmit(e) {
    e.preventDefault();

    const user = {
      email,
      password
    };
    login(user);
    console.log("from on submit");
  }
  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Login
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger"> {msg} </Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placehodler="Email"
                className="mb-3"
                onChange={e => setEmail(e.target.value)}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placehodler="password"
                className="mb-3"
                onChange={e => setPassword(e.target.value)}
              />

              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

LoginModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginModal);
