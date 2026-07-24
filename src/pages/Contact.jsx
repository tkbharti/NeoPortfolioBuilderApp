import { useState, useLayoutEffect } from 'react'; 
import { motion } from "motion/react";

import useFetch from "../hooks/useFetch"; 
import { useLoading } from "../context/LoadingContext"; 

import.meta.env.REACT_APP_API_URL;

const Contact = () => { 

  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading1, setLoading }  = useLoading();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    setLoading(true); 
    setMessage('');  

    try { 
         
        const response = await fetch(`${apiUrl}/contact/1`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }); 
       
        if (!response.ok) {
          throw new Error(`Server returned status: ${response.status}`);
        }
        setSubmitted(true); 
      } catch (error) {
          setMessage(`Error: ${error.message}`);
      } finally {
          setLoading(false);
      }  
  };
 
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
            <h2 className="mb-5">Contact</h2>

        <div className="cardui">
	          <div className="cardui-card"> 

            {message.length>0 ? (
              <div className="alert alert-danger text-center" role="alert">
                <strong>Error!</strong> Something went wrong. Please try again.
              </div>
            ):(
              <></>
            )}
             
               
            {submitted ? (
              <div className="alert alert-success text-center" role="alert">
                Thank you! I have received your message.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    autoComplete="off"
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  
                  <textarea 
                    autoComplete="off"
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
 
                <button type="submit" 
                  className="btn btn-primary btn-sm" 
                  style={{float:"inline-end", 
                  cursor:"pointer",
                  backgroundColor:"#0056b3"}}>
                  Send Message
                </button>
              </form>
            )}
           
 
            </div>
            </div>
            
          </div>
      </section>  
      </motion.div>
    );  
} 

export default Contact ; 