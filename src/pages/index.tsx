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
import { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      image: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
      alt: "First slide",
      name: "Light mask",
      overlay: "black-light",
      description: "First text",
    },
    {
      id: 2,
      image: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
      alt: "Second slide",
      name: "Strong mask",
      overlay: "black-strong",
      description: "Second text",
    },
    {
      id: 3,
      image: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
      alt: "Third slide",
      name: "Slight mask",
      overlay: "black-slight",
      description: "Third text",
    },
  ])
  const [products, setProducts] = useState([
    {
      id: 1,
      items: [
        {
          id: 1,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 2,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 3,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 2,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 3,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          id: 1,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 2,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
          id: 3,
          image:
            "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg",
          title: "MDBCard title",
          text:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
      ],
    },
  ])
  return (
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
              {ads.map(ad => (
                <MDBCarouselItem itemId={ad.id}>
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={ad.image}
                      alt={ad.alt}
                    />
                    <MDBMask overlay={ad.overlay} />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">{ad.name}</h3>
                    <p>{ad.description}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              ))}
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
                    {products.map(product => (
                      <MDBCarouselItem itemId={product.id}>
                        {product.items.map(item => (
                          <MDBCol md="4">
                            <MDBCard className="mb-2">
                              <MDBCardImage
                                className="img-fluid"
                                src={item.image}
                              />
                              <MDBCardBody>
                                <MDBCardTitle>{item.title}</MDBCardTitle>
                                <MDBCardText>{item.text}</MDBCardText>
                                <MDBBtn color="primary">MDBBtn</MDBBtn>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        ))}
                      </MDBCarouselItem>
                    ))}
                  </MDBRow>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </Layout>
  )
}

export default IndexPage
