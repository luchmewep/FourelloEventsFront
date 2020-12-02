import React, { useState, createContext } from "react"
import { useCookies } from "react-cookie"
import { navigate } from "gatsby"
import { useEffect } from "react"
import { UserInfoI } from "./AuthContext"

export const CurrentPageContext = createContext({} as CurrentPageInt)

const { Provider } = CurrentPageContext

const CurrentPageProvider = ({ children }: PageProps) => {
  //for current page
  const [currentPage, setCurrentPage] = useState("Home")
  const setCurrPage: (page: string) => void = page => {
    console.log(`Changed from ${currentPage} to ${page}`)
    setCurrentPage(page)
  }
  const checkPage = (page: string) => {
    if (!isBrowser()) return false
    switch (page) {
      case "root":
        return location.pathname.match("^/$") !== null
      default:
        return location.pathname.match(page) !== null
    }
  }

  // for cookies
  const [
    { authToken: authCookie, userInfo: userCookie },
    setCookie,
    removeCookie,
  ] = useCookies(["authToken", "userInfo"])
  const cookieOptions = {
    secure: isLocalhost() ? false : true,
  }
  const updateCookie = (name: string, value: any, options?: any) => {
    setCookie(name, value, { ...options, ...cookieOptions })
  }

  const deleteCookie = (name: string) => {
    removeCookie(name, { ...cookieOptions })
  }

  // Use Effects
  useEffect(() => {}, [])

  const value = {
    currentPage,
    setCurrPage,
    checkPage,
    authCookie,
    userCookie,
    updateCookie,
    deleteCookie,
  }
  return <Provider value={value}>{children}</Provider>
}

export default CurrentPageProvider
interface PageProps {
  children: React.ReactNode
}
interface CurrentPageInt {
  currentPage: string
  setCurrPage: (page: string) => void
  checkPage: (page: string) => boolean
  authCookie: any
  userCookie: UserInfoI
  updateCookie: (
    name: string,
    value: any,
    options?: any,
    redirectNow?: boolean | undefined,
    callback?: (() => void) | undefined
  ) => void
  deleteCookie: (name: string) => void
}

export const isLocalhost = () =>
  isBrowser() && location.hostname.match(/localhost|127.0.0.1/) !== null

export const isBrowser = () => typeof window !== "undefined"

//console log for localhost and deployed
export const logLocal = (...rest: any) => isLocalhost() && console.log(rest)
export const logOnline = (...rest: any) => !isLocalhost() && console.log(rest)
