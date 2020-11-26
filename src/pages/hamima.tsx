import {
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBJumbotron,
  MDBRow,
} from "mdbreact"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function hamima() {
  return (
    <Layout>
      <SEO title="Hamima" />
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="text-center">
              <MDBCardTitle className="card-title h4 pb-2">
                <strong>Hamima adventure</strong>
              </MDBCardTitle>

              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardTitle className="indigo-text h5 m-4">
                  Photography
                </MDBCardTitle>
                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </MDBCardText>

                <MDBCol className="d-flex justify-content-center mt-4" md="12">
                  <MDBCol md="3" className="d-flex justify-content-around">
                    <a href="#">
                      <MDBIcon
                        fab
                        icon="linkedin-in"
                        className="grey-text"
                        size="lg"
                      />
                    </a>
                    <a href="#">
                      <MDBIcon
                        fab
                        icon="twitter"
                        className="grey-text"
                        size="lg"
                      />
                    </a>
                    <a href="#">
                      <MDBIcon
                        fab
                        icon="facebook-f"
                        className="grey-text"
                        size="lg"
                      />
                    </a>
                  </MDBCol>
                </MDBCol>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}
