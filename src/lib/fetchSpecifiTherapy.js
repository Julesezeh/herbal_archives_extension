import axios from "axios";

export default async function FetchSpecificTherapy(pk) {
    return await axios.get(`https://local-therapy-archives.onrender.com/api/v1/${pk}`)
}