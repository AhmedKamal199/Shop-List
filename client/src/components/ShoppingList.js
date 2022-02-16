import React, {Component} from 'react'
import { useState} from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems,deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'
const uuid = require('uuid')

class ShoppingList extends Component {
    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = (id) =>{
        this.props.deleteItem(id)
    }
    render(){
        const {items}  = this.props.item
        return (
            <div>
              <Container>
                      <ListGroup>
                          <TransitionGroup>
                              {items.map(({_id,name})=> (
                                  <CSSTransition key={_id} timeout={500}
                                  classNames='fade'>
                                      <ListGroupItem> 
                                          <Button 
                                          className='remove-btn'
                                           color="danger" 
                                           size="sm"
                                           onClick={this.onDeleteClick.bind(this,_id)}>
                                               &times;
                                           </Button>
                                          {name}  
                                      </ListGroupItem>
                                  </CSSTransition>
                              ))}
                          </TransitionGroup>
                      </ListGroup>
              </Container>
            </div>
          )
    }
}

ShoppingList.propTypes ={
    getItems:PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem  })(ShoppingList)

