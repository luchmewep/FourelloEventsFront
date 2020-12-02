import Axios from "axios"
export const axiosAPI = Axios.create({
  baseURL: process.env.GATSBY_API_SITE,
  // withCredentials: true,
})
