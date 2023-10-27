import FetchSpecificTherapy from "../../lib/fetchSpecificTherapy";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function TherapyDetail () {
    const { id } = useParams();
    const {data} = useQuery({
        queryKey: "therapies",
        queryFn: async () => await FetchTherapies(),
    });

    // console.log(data)
    //Receive PK from the browser router
    console.log(id)
    return (
        <div>
            <div style={{color:"green"}}>Therapies</div>
            {data?.map((value)=> (
                <div>
                    {console.log(value?.data.data)}
                    {value?.data.data}
                </div>
                ))}
        </div>
    );
}