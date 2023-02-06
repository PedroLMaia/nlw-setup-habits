import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333' //Se nao funcionar, mudar para 192.168.15.13
})