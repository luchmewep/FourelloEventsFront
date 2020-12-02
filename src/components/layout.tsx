import React from "react"

// Layout-related files
import Footer from "./footer"
import NavBar from "./navbar"

// MDBReact-related files
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
import { MDBContainer } from "mdbreact"

const Layout = ({ children }: IProps) => (
  <MDBContainer
    fluid
    style={{
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    }}
  >
    <NavBar />
    <MDBContainer fluid className="mt-5 p-5">
      {children}
    </MDBContainer>
    <Footer />
  </MDBContainer>
)

export interface IProps {
  children: React.ReactNode
}

export default Layout
