import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
  } from 'mdb-react-ui-kit';
  
  


function Header() {
    const [openNav, setOpenNav] = useState(false);
  return (
    <MDBNavbar expand='lg' light bgColor='info'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>Random Quotes</MDBNavbarBrand>
      <MDBNavbarToggler
        type='button'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setOpenNav(!openNav)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBCollapse navbar open={openNav}>
        <MDBNavbarNav>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#'>Features</MDBNavbarLink>
          </MDBNavbarItem>
         
          <MDBNavbarItem>
           
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default Header