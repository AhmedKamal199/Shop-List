import React from "react";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import PropTypes from "prop-types";

const ItemModal = ({ addItem, isAuthneticated }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  function toggle() {
    setModal(!modal);
  }

  
  function onSubmit(e) {
    e.preventDefault();
    const newItem = {
      name
    };
    // Add item via addItem action
    addItem(newItem);
    console.log(newItem);
    // Close modal
    toggle();
  }
  return (
    <div>
      {isAuthneticated ? (
        <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
          Add Item
        </Button>
      ) : (
        <h4 className="mb-3 ml-4">Please Login to control</h4>
      )}

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placehodler="Add Shopping Item"
                onChange={(e) => setName(e.target.value)}
              ></Input>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

ItemModal.propTypes = {
  isAuthneticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  item: state.item,
  isAuthneticated: state.auth.isAuthneticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
