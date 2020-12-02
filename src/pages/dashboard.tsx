import React, { useEffect } from "react"
import { useContext } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CurrentPageContext } from "../contexts/CurrentPageContext"

export default function dashboard() {
  const { setCurrPage } = useContext(CurrentPageContext)
  useEffect(() => {
    setCurrPage("Dashboard")
  }, [])
  return (
    <Layout>
      <SEO title="dashboard" />
      Hello from Dashboard!
    </Layout>
  )
}
