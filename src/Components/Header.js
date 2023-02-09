import React from 'react'
import {Container,Nav,Navbar,Button } from 'react-bootstrap';
import AddBill from './AddBill';
import "./../style.css"
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { showModal, hideModal } from '../store/modalSlice';



const Header = () => {
const show = useSelector((state) => state.modal);

const dispatch = useDispatch();

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Link className='navbar-brand' to="/">Wash Station</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto flex-grow-1">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      <Link className='nav-link' to="/">Home</Link>

          <Link className='nav-link mx-3' to="/monthly-graph">Monthly Graph</Link>
          <Link className='nav-link' to="/monthly-budget">Monthly Budget</Link>

         
        </Nav>
        <Nav className="mx-auto"><Button variant="primary" className='mx-4'  onClick={() =>dispatch(showModal()) }> Add Invoice </Button><AddBill  show={show} onHide={() => dispatch(hideModal())}/>{'    '}
         
        </Nav>
       </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container fluid className='banner'>
  </Container>
  </>
  )
}

export default Header