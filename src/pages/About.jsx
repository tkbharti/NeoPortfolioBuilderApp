import { useState, useLayoutEffect } from 'react' ;  
import { motion } from "motion/react";

import useFetch from "../hooks/useFetch";
import "./about.css";

const About = () => { 
  const {data,loading,error}      = useFetch("./data/about.json"); 
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
            <h2 className="mb-5">About Me</h2> 
         
          <div className="cardui">
	        <div className="cardui-card">
              <div>
                <h1 className="mb-4">{data?.fname} {data?.mname}
                  <span className="text-primary"> {data?.lname}</span>
                </h1>
              <div className="subheading mb-5">
                  {data?.address}<span className="text-primary"> | </span>{data?.email} 
                  {data?.web && (
                    <><span className="text-primary"> | </span><span>{data.web}</span></>
                  )}
                  {data?.contact && (
                     <><span className="text-primary"> | </span><span>{data.contact}</span></>
                  )}  

                <br/><br/>

                {data?.description1 && (
                <p className="mb-3">{data.description1}</p>
                )}
			
                {data?.description2 && (
                  <p className="mb-3">{data.description2}</p>
                )}

                {data?.description3 && (
                  <p className="mb-3">{data.description3}</p>
                )}
                
                {data?.description4 && (
                  <p className="mb-3">{data.description4}</p>
                )}
                
                {data?.description5 && (
                  <p className="mb-3">{data.description5}</p>
                )} 
              </div>  

            {data?.availability && ( 
                <div className="tech"> <p className="mb-3">Availability : 
                  {data?.availability.split(",").map((t, index2) => (
                    <span key={index2}>{t}</span> 
                  ))}  </p>
                </div> 
            )}
                

            <ul className="list-inline list-social-icons mb-0">
              {data?.linkedin && ( 
              <li className="list-inline-item">
                <a href={data.linkedin} target="_blank">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
			        )}
              {data?.github && ( 
                    <li className="list-inline-item">
                      <a href={data.github} target="_blank">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
              )}
              {data?.facebook && ( 
              <li class="list-inline-item">
                      <a href={data.facebook}>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
              )}
              {data?.twitter && ( 
                    <li className="list-inline-item">
                      <a href={data.twitter}>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
              )} 
             </ul>
            </div>
              </div>
          </div>
          </div>    
        </section> 
        </motion.div>
    ); 
} 

export default About;