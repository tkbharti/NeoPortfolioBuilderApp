import { NavLink } from "react-router-dom"; 
import {
    FaUser,
    FaBriefcase,
    FaProjectDiagram,
    FaCode,
    FaGraduationCap,
    FaCertificate,
    FaAward,
    FaEnvelope,
    FaBloggerB,
    FaMobile  
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {  
    return ( 
        <aside className="sidebar"> 
            <div className="profile"> 
                <img src="./img/profile.png" loading="lazy"  alt="profile" className="profile-img" /> 
            </div>
			<div className="nav-container">
                <nav> 
                    <NavLink to="/" end>
                        <FaUser />
                        <span>About</span>
                    </NavLink>
                    
                    <NavLink to="/education">
                        <FaGraduationCap />
                        <span>Education</span>
                    </NavLink>

                    <NavLink to="/experience">
                        <FaBriefcase />
                        <span>Experience</span>
                    </NavLink>
                    
                    <NavLink to="/skills">
                        <FaCode />
                        <span>Skills</span>
                    </NavLink>
                    
                    <NavLink to="/projects">
                        <FaProjectDiagram />
                        <span>Projects</span>
                    </NavLink> 

                    <NavLink to="/certifications">
                        <FaCertificate />
                        <span>Certifications</span>
                    </NavLink>

                    <NavLink to="/awards">
                        <FaAward />
                        <span>Awards</span>
                    </NavLink>

                     

                     <NavLink to="/applications">
                        <FaMobile />
                        <span>Applications</span>
                    </NavLink> 
                    
                    <NavLink to="/articles">
                        <FaBloggerB />
                        <span>Articles</span>
                    </NavLink> 

                    <NavLink to="/contact">
                        <FaEnvelope />
                        <span>Contact</span>
                    </NavLink> 
                </nav>
			</div> 
        </aside> 
    ); 
}

export default  Sidebar;