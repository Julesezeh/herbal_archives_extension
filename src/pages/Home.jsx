import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();
    function goToTherapies () {
        navigate("/therapies")
    }
    return (
        <div className="flex flex-col"  onClick={()=> goToTherapies()} >

            <p>Hello</p>
            <p>Fried</p>
            
        </div>
    );
}
// const homeStyle = {
//     color:"green",
//     fontSize:"6em",
//     cursor:"pointer",
//     textDecoration:"none"

// }