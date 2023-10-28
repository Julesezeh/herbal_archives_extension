import FetchSpecificTherapy from "../../lib/fetchSpecificTherapy";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function TherapyDetail () {
    const { id } = useParams();
    const {data} = useQuery({
        queryKey: "therapies",
        queryFn: async () => await FetchSpecificTherapy(id),
    });

    // console.log(data)
    //Receive PK from the browser router
    console.log("id",id)
    console.log("data",data)
    return (
        <div className="grid-cols-1 flex flex-col">
            <div style={{color:"green"}}>Therapies</div>
            {data?.data?.map((value)=> (
                <div className="basis-1/4">
                    {console.log(value?.title)}
                    {value?.title}
                </div>
                ))}
        </div>
    );
}