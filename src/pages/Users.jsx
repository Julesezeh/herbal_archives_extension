import FetchUsers from "../lib/fetchUsers";
import { useQuery } from "react-query";

export default function Users (){
    const {data:user_data}  = useQuery(
        {
            queryFn: async () => await FetchUsers(),
            queryKey: "users"
        }
    ) 
    return(
        <div style={containerStyle}>
        {user_data?.map((key,value)=>(
            <div>
                {value}
            </div>
        ))}
        </div>
    );
}

const containerStyle = {
    display: "flex",
    flexDirection: "row"
}