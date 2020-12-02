import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CurrentPageContext } from "../contexts/CurrentPageContext"

const NotFoundPage = () => {
  const { setCurrPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("404")
  }, [])
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <h1>404: Not found</h1>
        <p>The page you were looking for could not be found.</p>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
