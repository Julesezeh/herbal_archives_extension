import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();
    function goToTherapies () {
        navigate("/therapies")
    }
    return (
        <div style={homeStyle} onClick={()=> goToTherapies()} >

            Hello
            
        </div>
    );
}
const homeStyle = {
    color:"green",
    fontSize:"6em",
    cursor:"pointer"

}