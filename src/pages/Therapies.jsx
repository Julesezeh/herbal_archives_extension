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
            Therapies
            {data.map((value)=> (
                <div>
                    {value?.data.data}
                </div>
                ))};
        </div>
    );
}