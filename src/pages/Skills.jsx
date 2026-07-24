import { useState, useLayoutEffect } from 'react'
import { motion } from "motion/react";  
import useFetch from "../hooks/useFetch";

const Skills = () => {
  const {data,loading,error}      = useFetch("./data/skills.json"); 
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
          <h2 className="mb-5">Skills</h2> 
          <div className="cardui">
	        <div className="cardui-card">
              <div className="subheading mb-0">Tech Stack  &amp; Tools</div>
              <ul className="list-inline list-icons"> 
                  {data?.image && data.image.map((icon, index) => (
                    <li className="list-inline-item" title={icon} key={index}>
                      <img src={`img/skills/${icon.toLowerCase()}.png`} 
                      style={{height:'40px', marginTop: "2px"}} loading="lazy"  /> 
                    </li>
                  ))} 
              </ul>
            </div></div>  
            <div className="cardui">
	          <div className="cardui-card">      
			        <div className="subheading mb-0">Technical Expertise</div>
              <ul className="fa-ul mb-1" style={{fontSize: "medium"}}> 
                {data?.skill && data.skill.map((skl, index) => {
                   return Object.entries(skl).map(([key, value]) => (
                      <li key={`${key}-${index}`}>
                        <i className="fa-li fa fa-check"></i>
                        <span className="skill">{key}:</span><span className="skillval">{value}</span>
                      </li> 
                  ))}
                )} 
              </ul> 
            </div></div>   
            <div className="cardui">
	          <div className="cardui-card">       
              <div className="subheading mb-0">Core Competencies</div>
              <ul className="fa-ul mb-1" style={{fontSize: "medium","marginTop": "2%"}}> 
                {data?.core && data.core.map((cor, index) => (
                  <li key={index}><span className="fa-li">👉</span> {cor}</li> 
                ))} 
              </ul> 
              </div></div>
        </div> 
      </section> 
      </motion.div>
    ); 
} 

export default Skills;