import { Outlet } from "react-router-dom";
import Navbar from "../com/Navbar";


const Rootlayout = () => {
    return ( 
        <div className="container--rootlayout">
         <Navbar/>
         
         <main>
            <Outlet/>
         </main>
        </div>
     );
}
 
export default Rootlayout;