import FetchTherapies from "../lib/fetchTherapies";
import { useQuery } from "react-query";

export default function Therapy () {
    const {data} = useQuery({
        queryKey: "therapies",
        queryFn: async () => await FetchTherapies(),
    });
    console.log(data)
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