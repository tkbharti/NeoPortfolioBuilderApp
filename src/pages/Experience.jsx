import { useState, useLayoutEffect } from 'react'; 
import { motion } from "motion/react";

import useFetch from "../hooks/useFetch"; 

const Experience = () => {
  const {data,loading,error}      = useFetch("./data/experience.json");  
  document.title = data?.title; 
  
  if(error) return <h2>{error}</h2>;

  useLayoutEffect(()=>{
      window.scrollTo(0, 0)
  }) 

  return (
      <motion.div
        style={{ padding: "10px",fontFamily: "serif"}}
        initial={{ opacity: 0, y: 900}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > 
      <section className="resume-section p-3 p-lg-5 d-flex flex-column">
          <div className="my-auto">
            <h2 className="mb-5">Experience</h2>

            {data?.company && data.company.map((exp, index) => (

            <div className="cardui" key={index}>
	          <div className="cardui-card">   
                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                   <div className="resume-content mr-auto">
                    <div className="row">
                          <div className="col-8">
                            <h3 className="mb-0">{exp.designation} - {exp.roletype}</h3>
                          </div> 
                          <div className="col-4" style={{fontSize: '14px', textAlign:'right'}}>
                            <span className="text-primary">{exp.duration}</span>
                          </div> 
                      </div>       
                      
                        <div className="subheading mb-2">
                          <a href={exp.web} target="_blank">{exp.name}, {exp.location}</a>
                        </div>   
                      
                      <span style={{fontSize: '14px'}}>Roles and Responsibilities:</span>
                      <p style={{textAlign:"left",width:'100%'}} dangerouslySetInnerHTML={{ __html: exp.role }}></p>
                    </div>
                     
                </div> 
            </div> 
            </div>   
            ))}

          </div>
      </section>  
      </motion.div>
    );  
} 

export default Experience ; 