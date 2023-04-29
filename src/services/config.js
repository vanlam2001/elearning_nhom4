import axios from "axios"
import { localUserServ } from "./localService";

const baseURL = 'https://elearningnew.cybersoft.edu.vn/';
const TokenCyberSoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MSIsIkhldEhhblN0cmluZyI6IjEyLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDQ3NjgwMDAwMCIsIm5iZiI6MTY2NTI0ODQwMCwiZXhwIjoxNjk0NjI0NDAwfQ.SUELcPShU58ZkNS3CbFDhM02KMzll9j00ndjVSaiJ8Q'
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