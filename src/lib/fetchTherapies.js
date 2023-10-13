import axios from "axios";

export default async function FetchTherapies() {
    return (
        await axios.get(`https://local-therapy-archives.onrender.com/api/v1/`)
    );
}