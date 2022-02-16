import React, { useState, useEffect } from 'react'
import AppNavbar from './components/Appnavbar'
import ShoppingList  from './components/ShoppingList'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap'
import {Provider} from 'react-redux'
import store from './store'

function App() {

  return(
    <Provider store = {store}>
      <div className='App'>
      <AppNavbar />
      <Container>
      <ItemModal/>
      <ShoppingList />
      </Container>
    </div>
    </Provider>
  ); 
}

export default App
