import FetchTherapies from "../../lib/fetchTherapies";
import { useQuery } from "react-query";
import LoadingSpinner from "./spinner.gif"

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
                    {value.title.toUpperCase()} by {value.username}
                </div>
                ))}
        </div>
        ):
        (<div style={{backgroundColor:"black"}}>
            <img src={LoadingSpinner} alt="spinner"/>
        </div>)
    );
}

const titleStyle = {
    color:"green",
    fontSize:20,
    textAlign:"left"
}