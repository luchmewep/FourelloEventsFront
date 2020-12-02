import React, { createContext, useContext, useState } from "react"
import { axiosAPI } from "../API/client"
import { CurrentPageContext, isBrowser, logLocal } from "./CurrentPageContext"
import decode from "jwt-decode"
import { useEffect } from "react"

interface IProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextI)
const { Provider } = AuthContext
const AuthProvider = ({ children }: IProps) => {
  // Context stuff
  const { authCookie, userCookie, updateCookie, deleteCookie } = useContext(
    CurrentPageContext
  )

  //Queries and Mutations

  // Every page load
  useEffect(() => {
    if (checkLogin()) {
      console.log("LOGIN OK")
    } else {
      console.log("LOGIN NOT OK")
    }
  }, [])

  // Methods
  const loginUser = (login: LoginI) => {
    axiosAPI
      .post("/api/admin/login", login)
      .then(({ data }) => {
        logLocal("Logging in...")
        const { token, user }: LoginDataI = data
        const expires = getDateFromToken(token)
        logLocal("expires", expires, token, user)
        token && updateCookie("authToken", token, { expires })
        user && updateCookie("userInfo", user, { expires })
      })
      .catch(error => {
        console.log("error", error)
      })
  }

  const getDateFromToken = (token?: any) => {
    if (!token && authCookie) {
      token = authCookie
    }
    const { exp }: TokenI = decode(token)
    return new Date(exp * 1000)
  }

  const checkLogin = () => {
    return authCookie && userCookie && getDateFromToken().getDate < Date.now
  }

  const logoutUser = () => {
    deleteCookie("authToken")
    deleteCookie("userInfo")
    console.log("Logged out user...")
  }

  const value = {
    loginUser,
    checkLogin,
    logoutUser,
  } as AuthContextI
  return <Provider value={value}>{children}</Provider>
}

export default AuthProvider

// Route
export const isMemberRoute = (path?: string) => {
  return isBrowser() && (path || location.pathname).match(/^\/app/) !== null
}
export const isAdminRoute = (path?: string) => {
  return isBrowser() && (path || location.pathname).match(/^\/admin/) !== null
}
export const isLoginRegisterRoute = (path?: string) => {
  return (
    isBrowser() && (path || location.pathname).match(/login|register/) !== null
  )
}

// Interfaces

interface AuthContextI {
  loginUser: (login: LoginI) => void
  checkLogin: () => boolean
  logoutUser: () => void
}

interface LoginI {
  username: string
  password: string
}

interface LoginDataI {
  token: string
  user: UserInfoI
}

export interface UserInfoI {
  id: number
  name: string
  username: string
  email: string
  mobile_number: string
  facebook_id: string & null
  google_id: string & null
  twitter_id: string & null
  user_type: string
  is_active: number
  event_id: number & null
  created_at: string
  updated_at: string
  user_permission_id: number & null
  user_data: Array<Object>
  permission: string & null
}

interface TokenI {
  exp: number
}
