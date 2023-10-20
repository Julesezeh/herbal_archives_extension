import FetchSpecificTherapy from "../../lib/fetchSpecificTherapy";
import { useQuery } from "react-query";

export default function TherapyDetail () {
    // const {data} = useQuery({
    //     queryKey: "therapies",
    //     queryFn: async () => await FetchTherapies(),
    // });

    // console.log(data)
    //Receive PK from the browser router
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