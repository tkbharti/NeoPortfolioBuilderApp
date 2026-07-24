import { useState, useLayoutEffect } from 'react'; 
import { motion } from "motion/react";

import useFetch from "../hooks/useFetch"; 

import { FaBriefcase } from "react-icons/fa";

const Education = () => {
  const {data,loading,error}      = useFetch("./data/education.json");  
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
      <section className="resume-section p-3 p-lg-5">
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>
            
            {data?.education && data.education.map((edu, index) => (
              <div className="cardui" key={index}>
              <div className="cardui-card">  
                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                      <h3 className="mb-0">{edu.college}</h3>
                      <div className="subheading mb-3">{edu.course}</div>
                      <div>{edu.subject}</div> 
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary">{edu.year}</span>
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

export default Education ;