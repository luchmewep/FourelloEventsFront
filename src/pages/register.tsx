import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from "mdbreact"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function register() {
  return (
    <Layout>
      <SEO title="Register" />
      <MDBContainer>
        <MDBRow>
          <MDBCol className="mx-auto" md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}
