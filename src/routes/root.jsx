import { Route, Routes } from "react-router-dom";
import Therapy from "../pages/Therapies/Therapies";
import Home from "../pages/Home";
import Users from "../pages/Users";

export const AppRoutes = () => {
 return (
    <Routes>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Therapies" element={<Therapy/>}/>
        <Route path="*" element= {<Home/>}/>
    </Routes>
 );   
}