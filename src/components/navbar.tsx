import { Link } from "gatsby"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBFormInline,
} from "mdbreact"
import React, { useState, useEffect } from "react"

export default function NavBar() {
  const [isHamOpen, setIsHamOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
            <MDBNavItem active={isCurrentPage("root")}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </MDBNavItem>
            <MDBNavItem active={isCurrentPage("hamima")}>
              <Link className="nav-link" to="/hamima">
                Hamima
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav center>
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
            {isLoggedIn ? (
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
            ) : (
              <>
                <MDBNavItem>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </MDBNavItem>
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </MDBContainer>
  )
}

export const isBrowser = () => typeof window !== "undefined"

export const isCurrentPage = (page: string) => {
  if (!isBrowser()) return false
  switch (page) {
    case "root":
      return location.pathname.match("^/$") !== null
      break
    case "hamima":
      return location.pathname.match("hamima") !== null
      break
    default:
      return false
      break
  }
}
