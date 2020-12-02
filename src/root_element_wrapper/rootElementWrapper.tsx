import React from "react"
import AuthProvider from "../contexts/AuthContext"
import CurrentPageProvider from "../contexts/CurrentPageContext"
// import "../styles/global.css"
// import "../styles/pageLoader.css"

export const wrapRootElement: (arg0: any) => any = ({ element }) => (
  <CurrentPageProvider>
    <AuthProvider>{element}</AuthProvider>
  </CurrentPageProvider>
)
