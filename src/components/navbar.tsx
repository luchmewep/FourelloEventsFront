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
            <MDBNavItem active={location.pathname.match("^[/]$") !== null}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </MDBNavItem>
            <MDBNavItem active={location.pathname.match("hamima") !== null}>
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
                  <Link
                    className="nav-link"
                    style={{
                      borderRight: "1px solid rgba(153,153,153,.298039)",
                    }}
                    to="/"
                  >
                    Signup
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

const NavLink = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Link<unknown>> &
    Readonly<import("gatsby-link").GatsbyLinkProps<unknown>> &
    Readonly<{ children?: React.ReactNode }>
) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "blue",
        },
      }
    }}
  />
)
