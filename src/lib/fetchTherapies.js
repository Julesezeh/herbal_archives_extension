import axios from "axios";

export default async function FetchTherapies() {
    return (
        await axios.get(`http://127.0.0.1:8000/api/v1/`)
    );
}