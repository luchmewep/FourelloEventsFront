import { Link } from "gatsby"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBFormInline,
} from "mdbreact"
import React, { useState } from "react"

export default function NavBar() {
  const [isHamOpen, setIsHamOpen] = useState(false)
  const toggleCollapse = () => setIsHamOpen(!isHamOpen)
  return (
    <MDBContainer>
      <MDBNavbar
        color="secondary-color"
        dark
        expand={"lg"}
        scrolling
        fixed={"top"}
      >
        <MDBNavbarBrand>
          <strong className="white-text">Lulago</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isHamOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link" to="/">
                Features
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link" to="/">
                Pricing
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0 }}
                    alt=""
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <Link className="dropdown-item" to="/">
                    My account
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Log out
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </MDBContainer>
  )
}
