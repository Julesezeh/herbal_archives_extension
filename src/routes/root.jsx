import { Route, Routes } from "react-router-dom";
import Therapy from "../pages/Therapies";
import Home from "../pages/Home";

export const AppRoutes = () => {
 return (
    <Routes>
        <Route path="/Therapies" element={<Therapy/>}/>
        <Route path="*" element= {<Home/>}/>
    </Routes>
 );   
}