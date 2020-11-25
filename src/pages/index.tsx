import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBCarouselCaption,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdbreact"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MDBContainer>
      <MDBRow className="mb-2">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Slight Mast</h3>
                <p>Third text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBRow>
      {/* Carousel of Items */}
      <MDBRow>
        <MDBCard>
          <MDBCardBody>
            <MDBCarousel
              activeItem={1}
              length={3}
              slide={true}
              showControls={true}
              showIndicators={true}
              multiItem
            >
              <MDBCarouselInner>
                <MDBRow>
                  <MDBCarouselItem itemId="1">
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBCard className="mb-2">
                        <MDBCardImage
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
                        />
                        <MDBCardBody>
                          <MDBCardTitle>MDBCard title</MDBCardTitle>
                          <MDBCardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </MDBCardText>
                          <MDBBtn color="primary">MDBBtn</MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                </MDBRow>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default IndexPage
