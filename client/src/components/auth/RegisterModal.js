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
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
const RegisterModal = ({ error, isAuthenticated, register, clearErrors }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, SetMsg] = useState(null);

  useEffect(() => {
    if (error) {
      // check error type
      console.log(error.id);
      SetMsg(error.msg.msg);
    } else {
      SetMsg(null);
    }

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
    console.log("from on submit");
    // Create new user object
    const NewUser = {
      name,
      email,
      password
    };
    register(NewUser);
    // dispatch(register)
  }
  return (
    <div>
      <NavLink onClick={toggle} href="#">
        Register
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger"> {msg} </Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placehodler="Name"
                className="mb-3"
                onChange={e => setName(e.target.value)}
              />

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
                Register
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

RegisterModal.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(RegisterModal);
