import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdbreact"
import React from "react"

const Footer = () => {
  return (
    <MDBFooter color="secondary-color" className="font-small darken-3 pt-0">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
