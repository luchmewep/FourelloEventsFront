import { graphql, Link, useStaticQuery } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBNavbarBrand,
  MDBIcon,
  MDBDropdownItem,
} from "mdbreact"
import React, { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { CurrentPageContext } from "../contexts/CurrentPageContext"

export default function NavBar() {
  const { checkPage, authCookie, userCookie } = useContext(CurrentPageContext)
  const { logoutUser } = useContext(AuthContext)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggleCollapse = () => setIsCollapsed(!isCollapsed)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <MDBNavbar color="secondary-color" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">{data.site.siteMetadata.title}</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isCollapsed} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active={checkPage("dashboard")}>
            <Link className="nav-link" to="/dashboard">
              <MDBIcon icon="home" fixed /> Dashboard
            </Link>
          </MDBNavItem>
          <MDBNavItem active={checkPage("events")}>
            <Link className="nav-link" to="/events">
              <MDBIcon icon="calendar-alt" fixed /> Events
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
        {userCookie && (
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img
                    src={
                      "https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    }
                    className="rounded-circle z-depth-0 mr-1"
                    style={{ height: "25px", padding: 0 }}
                    alt=""
                  />
                  {`${userCookie.name} (${userCookie.email})`}
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <Link className="dropdown-item" to="/">
                    <MDBIcon icon="user" fixed /> Profile
                  </Link>
                  <MDBDropdownItem onClick={logoutUser}>
                    <MDBIcon icon="sign-out-alt" fixed /> Log out
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        )}
      </MDBCollapse>
    </MDBNavbar>
  )
}
