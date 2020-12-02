import React, { useContext, useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { CurrentPageContext } from "../../contexts/CurrentPageContext"

export default function index() {
  const { setCurrPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("Events")
  }, [])
  return (
    <Layout>
      <SEO title="All Events" />
      Hello from All Event!
    </Layout>
  )
}
