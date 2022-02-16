import React ,{Component} from 'react'
import { useState, useEffect } from 'react'
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'




const Appnavbar = () => {
        const [isOpen, setOpen] = useState(false)   
        return(
            <Navbar color='dark' dark expand="sm" className='mb-5'>
            <Container>
                <NavbarBrand href='/'>Shoppling list</NavbarBrand>
                <NavbarToggler onClick={() => setOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='https://github.com/brandtraversy'>
                                Github
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        )
    }
//    }  for render



export default Appnavbar
