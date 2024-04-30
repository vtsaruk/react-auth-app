import axios from 'axios'
console.log(
  `env_props: ${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_HOST}`
)
const instanceAxios = axios.create({
  baseURL: `/api/`,
  timeout: 3000,
})

export default instanceAxios
