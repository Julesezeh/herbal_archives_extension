import axios from "axios";

//not working
export default async function FetchUsers() {
    return (
        await axios.get(`https://local-therapy-archives.onrender.com/api/v1/users`)
    );
}