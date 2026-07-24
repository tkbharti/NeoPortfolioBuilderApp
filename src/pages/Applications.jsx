import { useState, useEffect, useLayoutEffect } from 'react'; 
import { motion } from "motion/react";

import useFetch from "../hooks/useFetch"; 
import { useLoading } from "../context/LoadingContext"; 

import.meta.env.REACT_APP_API_URL;

const Applications = () => {  
    
    const {data,loading,error}      = useFetch("./data/application.json");  
    document.title = data?.title; 
    
    if(error) return <h2>{error}</h2>;

    const apiUrl = process.env.REACT_APP_API_URL; 
    const { loading1, setLoading }  = useLoading();

    const [fileid,setFileid] = useState(); 

    const handleDownload = async () => { 
        setLoading(true); 
        const appdata = data.appdetails.filter((app)=>app.id===fileid);
        const fielname = appdata[0].name.replace(/ /g, "");
 
        try { 
            const response = await fetch(`${apiUrl}/download/${fileid}`, {method: 'POST'});

            if (!response.ok) {
                throw new Error(`Failed to load component: ${response.statusText}`);
            }
               
            // Convert the response data into a blob
            const blob = await response.blob();
            
            // Create a temporary local URL for the blob
            const url = window.URL.createObjectURL(blob);
            
            // Create a hidden anchor element to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${fielname}.exe`); // Force download filename
            
            // Append to document, trigger click, and cleanup
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
           
        } catch (error) {
            console.error('Download failed:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    } 

    useEffect(()=>{
        if(!fileid) return;
        handleDownload();
    },[fileid]);

    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    },[]); 
 
    return (
      <motion.div
        style={{ padding: "10px",fontFamily: "serif"}}
        initial={{ opacity: 0, y: 900}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > 
      <section className="resume-section p-3 p-lg-5 d-flex flex-column">
          <div className="my-auto">
            <h2 className="mb-5">Applications</h2>
                
              <div className="cardui">
	          <div className="cardui-card">   
                <h5 className="mb-5">Independent Builds - an execution of a standalone</h5>  

                {data?.appdetails && data.appdetails.map((app, index) => (  
                    
                    <div className="cardui" key={index}>
                    <div className="cardui-card-inner">   
                        <div className='row' style={{fontSize:"15px"}}> 

                            <div className='col-6'>
                                <img src={`./img/${app.logopath}`} /></div>   
                            <div className='col-6'>
                                <span style={{fontSize:'1.5rem', float:"left", fontWeight:'bold'}}>{app?.name}</span>
                            </div>   
                            <div className='col-12' style={{textAlign:"justify"}}>
                            <br/>
                          
                            <div style={{width:"100%"}} 
                             dangerouslySetInnerHTML={{ __html: app?.description }} /> 
                            <br/><br/>
                            <p style={{float:"left", fontWeight:"bold", color:'#27418c'}}>
                            { app?.gitlink && (
                                <a href={app?.gitlink} target='_blank'>Sourc code link</a>
                            )}
                            <br/>    
                            { app?.applink && (
                                <span style={{cursor:"pointer"}} 
                                onClick={()=>setFileid(app.id)}>Download demo app.</span>  
                            )}
                            <br/>
                            { app?.externallink && (
                                <a href={app?.gitlink} target='_blank'>Click Here</a> 
                            )}    
                            
                            </p> 

                            </div>       
                            
                        </div>    
 
                    </div>
                    </div>

                ))}  

              </div>
              </div>  
          </div>
      </section>  
      </motion.div>
    );  
} 

export default Applications ; 