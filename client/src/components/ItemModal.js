import React, { Component } from 'react'
import { useState } from 'react'
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem} from '../actions/itemActions'


const ItemModal = () => {
  const [modal,setModal] = useState(false)
  const [name,setName] = useState('')


  function toggle(){
    setModal(!modal)
  }

  function onChange (e){
    setName({[e.target.name]: e.taget.value})
  }
 function onSubmit (e) {
    e.preventDefault();
    const newItem ={ 
      name
     }
     // Add item via addItem action
     addItem(newItem);

     // Close modal
     toggle();

  }
  return (
    <div>
      <Button
        color="dark"
        style={{marginBottom:'2rem'}}
        onClick = {toggle}
        >Add Item</Button>  

        <Modal 
        isOpen={modal}
        toggle={toggle}>
          <ModalHeader toggle={toggle}>
            Add To Shopping List
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for='item'>Item</Label>
                <Input
                type='text'
                name='name'
                id='item'
                placehodler='Add Shopping Item'
                onChange={onChange}
                ></Input>
                <Button
                color="dark"
                style={{marginTop:'2rem'}}
                block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
    </div>
  )
}

const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal)
