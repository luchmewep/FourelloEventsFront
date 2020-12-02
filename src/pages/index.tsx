import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBContainer,
} from "mdbreact"
import React, { useContext, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CurrentPageContext, logLocal } from "../contexts/CurrentPageContext"
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthContext"

const IndexPage = () => {
  const { setCurrPage } = useContext(CurrentPageContext)
  const { loginUser } = useContext(AuthContext)
  useEffect(() => {
    setCurrPage("Home")
  }, [])

  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (data: any) => loginUser(data)

  return (
    <Layout>
      <SEO title="Home" />
      <MDBRow middle>
        <MDBCol className="mx-auto" xs="12" md="4">
          <MDBContainer fluid className="my-5">
            <h3 className="text-center">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <MDBInput
                inputRef={register}
                ref={register}
                label="Username"
                outline
                icon="user"
                name="username"
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid name!</div>
              </MDBInput>
              <MDBInput
                inputRef={register}
                ref={register}
                label="Password"
                outline
                icon="lock"
                name="password"
                type="password"
              />
              <MDBBtn type="submit" circle gradient={"purple"} block>
                Login
              </MDBBtn>
            </form>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </Layout>
  )
}

export default IndexPage
