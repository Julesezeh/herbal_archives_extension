import FetchTherapies from "../../lib/fetchTherapies";
import { useQuery } from "react-query";
import LoadingSpinner from "./spinner3.gif"
import { Link } from "react-router-dom";

export default function Therapy () {
    const {data} = useQuery({
        queryKey: "therapies",
        queryFn: async () => await FetchTherapies(),
    },[]);
    console.log(data?.data)
    // data?.data.forEach(element => {
    //     console.log(element)
    // })

    return (
        data?(
        <div>
            <div style={{color:"green", textAlign:"center"}}>Therapies</div>
            {data?.data?.map((value)=> (
                <div style={titleStyle}>
                   <Link
                    to={`/therapies/${value.id}/`}
                   >
                    {value.title.toUpperCase()}
                    </Link>by {value.username}
                </div>
                ))}
        </div>
        ):
        (<div >
            <img style={{color:"black", width:"100%", height:"400px"}} src={LoadingSpinner} alt="spinner"/>
        </div>)
    );
}

const titleStyle = {
    color:"green",
    fontSize:20,
    textAlign:"left"
}