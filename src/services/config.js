import axios from "axios"
import { localUserServ } from "./localService";

const baseURL = 'https://elearningnew.cybersoft.edu.vn/';
const TokenCyberSoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY'
const configHeader = () => {
    return {

        TokenCyberSoft: TokenCyberSoft,
        "Authorization": "Bearer " + localUserServ.get()?.accessToken,
    }
}



export const https = axios.create({
    baseURL: baseURL,
    headers: configHeader(),
})