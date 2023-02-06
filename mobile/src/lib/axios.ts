import axios from 'axios'
// axios.defaults.timeout = 5000

const api = axios.create({
    baseURL: 'http://192.168.15.13:3333', //Se nao funcionar, mudar web e server para 192.168.15.13(ipconfig).
})

export default api;