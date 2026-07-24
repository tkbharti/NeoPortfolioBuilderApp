import { useState, useLayoutEffect } from 'react'; 
import { motion } from "motion/react";

import useFetch from "../hooks/useFetch"; 

const Awards = () => {
  const {data,loading,error}      = useFetch("./data/awards.json");  
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
            <h2 className="mb-5">Awards</h2>

            <div className="cardui">
	          <div className="cardui-card"> 
                <ul className="fa-ul mb-1"> 
                {data?.awards && data.awards.map((award, index) => (  
                    <li key={index}>
                        <i className="fa-li fa fa-trophy text-warning"></i> 
                        <a href={award.link} target="_blank">
                            {award.name} - {award.year} - {award.by}
                          </a> 
                    </li> 
                ))}
                </ul>
            </div>
            </div>    
          </div>
      </section>  
      </motion.div>
    );  
} 

export default Awards ; 