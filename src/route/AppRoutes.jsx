import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import About from "../pages/About";
import Education from "../pages/Education"; 
import Experience from "../pages/Experience"; 
import Skills from "../pages/Skills"; 
import Projects from "../pages/Projects"; 
import Certifications from "../pages/Certifications"; 
import Awards from "../pages/Awards"; 
import Applications from "../pages/Applications"; 
import Articles from "../pages/Articles"; 
import Contact from "../pages/Contact"; 
import NotFound from '../components/NotFound'; 

const AppRoutes=()=>{

    return( 
        <BrowserRouter> 
            <Routes> 
                <Route element={<MainLayout/>}> 
                    <Route path="/" element={<About/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/skills" element={<Skills/>}/> 
                    <Route path="/projects" element={<Projects/>}/> 
                    <Route path="/certifications" element={<Certifications/>}/> 
                    <Route path="/awards" element={<Awards/>}/> 
                    <Route path="/applications" element={<Applications/>}/> 
                    <Route path="/articles" element={<Articles/>}/>  
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound />} />
                </Route> 
            </Routes> 
        </BrowserRouter> 
    ) 
}

export default AppRoutes;