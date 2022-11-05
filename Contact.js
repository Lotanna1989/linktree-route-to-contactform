import React from 'react';
import  "./Contact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                
import "primeicons/primeicons.css";
import {useForm} from "react-hook-form";
import "./img/Footer3.jpg";
import "./img/Footer4.jpg";






function Contact() {
 
  
  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);
  

  return (
    
    <div style={{width: "1440px",
    }}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div  style={{ backgroundColor: "",
        display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    
  
    
    
    position: "absolute",
    width: "100%",
    
    
    
    boxsizing:"borderBox",
    flexWrap: "wrap",
    overflow:"hidden"}}>
                

                    <div  style={{marginTop:"10%",marginBottom:"10%",width:"50%",  display:"flex",  justifyContent:"flex-start", flexDirection:"column",  }}  >
                    <div className='contact'>
                            <h2> Contact Me</h2>
                            <p> Hi there, contact me to ask me about anything you have in mind.</p>
                    </div>

                    <div className='topForm' >
                    <span className='start'>
                      

                      <div className='inpdiv1' style={{ width:"98%"}}>
                    <label style={{padding:"0", margin:"0", width:"80%"}} id='first_name'>Firstname </label>
                    
                    <input  style={{width:"98%",borderRadius: "8px",
                      border:" 1px solid #D0D5DD"}} name="firstname" {...register("firstname",{required: true})}  placeholder='Enter your first name' />
                     <error>
                     {errors.firstname?.type === "required" && "firstname please"}
                     </error>
                    </div>

                    <div  style={{width:"98%"}}>
                   
                   
                    <label style={{padding:"0", margin:"0", width:"98%",}} {...register("lastname",{required: true})} id='last_name'>Lastname</label>
                    <input className='inp2' style={{ width:"100%",borderRadius: "8px",
                    border:" 1px solid #D0D5DD"}} id="last_name" name="lastname"  placeholder='Enter your last name'  />
                    {errors.firstname?.type === "required" && "lastname please"} 
                    </div>
                   
                    </span>
                   
                    <label id='email'>Email</label>
                    <input  style={{width:"100%", borderRadius: "8px",
                    border:" 1px solid #D0D5DD"}} {...register("email",{required: true})} id="email" type='email'  placeholder='yourname@email.com'/>
                    {errors.email?.type === "required" && "your email"} 

                    <label id='message'>Message</label> 
                    <textarea id='message'  name="message" placeholder="Send me a message and i will reply you as soon as possible" {...register("message",{required: true})} />
                    {errors.message?.type === "required" && "your message"} 
                    

                    <span className='check'>
                    <input style={{borderRadius: "8px",
                    border:" 1px solid #D0D5DD"}}  type={"checkbox"} /> <label>You agree to providing your data to name whom will contact you</label>
                    </span>
                   
                    <button style={{borderRadius: "8px", 
                    border:" 1px solid #D0D5DD", backgroundColor:"blue"}}  id="btn__submit" >
                            Send Message
                    </button>
                    

                    </div>
                    

                    </div>
                    <div style={{ width:"100%", alignItems:"center", display:"flex",flexWrap:"wrap", justifyContent:"space-around",  }}>
                         
                          <div style={{  width:"93%",borderTop:"1px solid darkgrey", alignItems:"center", display:"flex",flexWrap:"wrap", justifyContent:"space-between", flexDirection:"row",   }}>
                          <img src={require("./img/Footer3.jpg")} style={{justifyContent:"flex-start"}} />
                          <div style={{justifyContent:"center"}} ><h4 style={{color:"darkgrey"}}>HNG Internship 9 Frontend Task</h4></div>
                          <img src={require("./img/Footer4.jpg")} style={{justifyContent:"flex-start"}}/>
                     </div>  
    </div>
    
                    
    </div>
  </form>
  </div>
  )
  }

export default Contact