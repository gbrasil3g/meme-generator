import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.imgflip.com/get_memes'
})

export default api