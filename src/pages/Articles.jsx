import { useEffect, useState, useCallback,useLayoutEffect } from 'react'; 
import { motion } from "motion/react";

import useFetch from "../hooks/useFetch"; 
import './Articles.css';
import.meta.env.REACT_APP_API_URL;

import { useLoading } from "../context/LoadingContext"; 

const Articles = () => {
    const {data,loading,error}      = useFetch("./data/articles.json");   
    const [expandedId, setExpandedId] = useState();  
    const [htmlContent, setHtmlContent] = useState('');
    const [currentHeight, setCurrentHeight] = useState();
    const [htmlContents, setHtmlContents] = useState({});
    const apiUrl = process.env.REACT_APP_API_URL;
    const { loading1, setLoading }  = useLoading();

    useEffect(() => {  
        if (!expandedId) return;
        if (!htmlContents[expandedId]) 
        setLoading(true);  
        fetch(`${apiUrl}/article/${expandedId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to load component: ${response.statusText}`);
            }
            setLoading(false);  

             window.scrollBy({
              top: 50,
              left: 0,
              behavior: 'smooth'  
            })
            
            return response.text();  
          })
          .then((html) => { 
            setLoading(false);  
             setHtmlContents((prev) => ({ ...prev, [expandedId]: html })); 
          })
          .catch((err) => { 
            setLoading(false);  
              console.log(err);
          });
    }, [expandedId]);   

    const toggleItem = (id) => { 
      setExpandedId(expandedId === id ? null : id);
      if (id !== expandedId) {
        setHtmlContent('');
        setCurrentHeight(0);
      }
        //setExpandedId(id);
        
    };

    const measuredRef = useCallback((node) => {
        if (node !== null) {
            const height = node.getBoundingClientRect().height; 
            
            setCurrentHeight((prev) => (prev === height ? prev : height));
        }
    }, [htmlContent]);

    
    document.title = data?.title; 
    if(error) return <h2>{error}</h2>; 

    useLayoutEffect(()=>{
      window.scrollBy({
        top: 0,
        left: 0,
        behavior: 'smooth'  
      })
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
            <h2 className="mb-5">Articles</h2> 
            <div className="accordion-container">
            {data?.filter(art => art.show).map((article) => { 
              const isOpen = expandedId === article.id;

              return (
                <div key={article.id} className={`accordion-item ${isOpen ? 'active' : ''}`}> 
                  <div 
                    className="accordion-header" 
                    onClick={() => toggleItem(article.id)}
                    aria-expanded={isOpen}
                  >
                    <h3>📌 {article.title}</h3>
                    <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
                  </div>

                  {/* Collapsible Content Wrapper */}
                  <div className={`accordion-collapse ${isOpen ? 'show' : ''}`}>

                    <div className="accordion-content" ref={measuredRef}> 
                          <div style={{width:"100%"}} 
                          dangerouslySetInnerHTML={{ __html: htmlContents[article.id] }} /> 
                                    
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
       </section>    
     </motion.div>
  ); 
} 

export default Articles ; 