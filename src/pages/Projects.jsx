import { useState, useLayoutEffect } from 'react'
import { motion } from "motion/react";

import useFetch from "../hooks/useFetch";

const Projects = () => {
  const {data,loading,error}      = useFetch("./data/projects.json");  
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
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
              <div className="my-auto">
                <h2 className="mb-5">Projects</h2>
                {data?.proj && data.proj.map((prj, index) => (
                  <div className="cardui" key={index}>
                    <div className="cardui-card"> 
                      <h3 style={{fontSize:'1.1rem'}}>{prj?.name} - ({prj?.stack})</h3> 
                      <p>
                        <span style={{fontWeight:'bold'}}>Organization: {prj?.company}</span>
                        <br/>
                        <span style={{fontWeight:'bold'}}>Role: {prj?.role}</span>
                        <br/>
                        <span style={{textAlign:"justify",width:'100%'}} 
                        dangerouslySetInnerHTML={{ __html: prj?.description }}></span>
                      </p> 
                      <div className="tech">
                        {prj?.tech && prj.tech.split(",").map((t, index2) => (
                          <span key={index2}>{t}</span> 
                        ))} 
                      </div> 
                  </div>
                </div>
                ))} 
              </div>
            </section> 
      </motion.div>
    ); 
} 

export default Projects;