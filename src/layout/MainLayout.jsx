
import { Outlet } from "react-router-dom";

import { LoadingProvider } from "../context/LoadingContext";  
import TopStrip from "../components/TopStrip";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ()=>{

    return(  
         <LoadingProvider> 
			<TopStrip /> 
            <Sidebar/>  
            <main className="content"> 
                <Outlet /> 
                <Footer /> 
            </main>  
       </LoadingProvider>  
    ) 
}

export default MainLayout;