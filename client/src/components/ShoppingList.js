import React from "react";
import { useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

const ShoppingList = ({ getItems, deleteItem, item, isAuthneticated }) => {
  const { items } = item;
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div>
      <Container>
        <ListGroup>
          <TransitionGroup>
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <h1>{name}</h1>
                <ListGroupItem>
                  {isAuthneticated ? (
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={deleteItem(_id)}
                    >
                      &times;
                    </Button>
                  ) : (
                    ""
                  )}
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  );
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  isAuthneticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  item: state.item,
  isAuthneticated: state.auth.isAuthneticated
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
