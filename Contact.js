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
    
    <div style={{width: "740px",
    }}>
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
    <div className='main'  style={{ display: "flex",
    
    justifyContent: "center",
    alignItems:"center",
    
  
    
    
    position: "absolute",
    width: "100%",
    
    
    
    boxsizing:"borderBox",
    flexWrap: "wrap",
    overflow:"hidden",
        }}>
                

                    <div  style={{marginTop:"10%",marginBottom:"8%",width:"96%",  display:"flex",  justifyContent:"flex-start", flexDirection:"column", left: "0px",
                    top: "0px", padding: "64px 0px 96px 0px",
                    gap: "64px" }}  >
                    <div className='contact' style={{width:"100%", paddingLeft:"30px"}}>
                            <h2 style={{fontWeight:"600",
                            fontSize: "36px",
                            lineheight: "44px",
                            /* identical to box height, or 122% */
                            
                            letterSpacing: "-0.02em", width:"100%"}} > Contact Me</h2>
                            <p className='topP'> Hi there, contact me to ask me about anything you have in mind.</p>
                    </div>

                    <div className='topForm' style={{padding:"30px", marginBottom:"40px", width:"100%"}} >
                    
                    
                     
                     <div  style={{ marginBottom:"25px",  width:"100%",display:"flex", justifyContent:"space-between", flexDirection:"row", flexWrap:"wrap"}}>
                        <div  style={{width:"380px", marginBottom:"25px"}}>
                      <label  >Firstname </label>
                    
                    <input id='first_name'  {...register("firstname", {required: true})} style={{
                      marginRight:"",border:" 1px solid #D0D5DD", boxSizing: "border-box",

                      /* Auto layout */
                      
                      display: "flex",
                      flexDirection: "row",
                      alignitems: "center",
                      padding: "10px 14px",
                      gap: "8px",
                      
                      width:"100%",
                      height: "44px",
                      
                      /* Base/White */
                      
                      background: "#FFFFFF",
                      /* Gray/300 */
                      
                      border:" 1px solid #D0D5DD",
                      /* Shadow/xs */
                      
                      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                      borderRadius: "8px",
                      
                      /* Inside auto layout */
                      flex: "none",
                      order: "1",
                      alignSelf: "stretch",
                      flexGrow: "0",}} name="firstname"   placeholder='Enter your first name' />
                      <error>
                      {errors.firstname?.type === "required" && "firstname please"}</error>
                    </div>

                    <div  style={{width:"380px",}}>
                   
                   
                    <label>Lastname</label>
                    <input    {...register("lastname", {required: true})} id="last_name" name="lastname"  placeholder='Enter your last name' style={{ borderRadius: "8px",
                    border:" 1px solid #D0D5DD", width:"98%",borderRadius: "8px",
                    boxSizing: "border-box",

                    /* Auto layout */
                    
                    display: "flex",
                    flexDirection: "row",
                    alignitems: "center",
                    padding: "10px 14px",
                    gap: "8px",
                    
                    width: "100%",
                    height: "44px",
                    
                    /* Base/White */
                    
                    background: "#FFFFFF",
                    /* Gray/300 */
                    
                    border:" 1px solid #D0D5DD",
                    /* Shadow/xs */
                    
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    borderRadius: "8px",
                    
                    /* Inside auto layout */
                    flex: "none",
                    order: "1",
                    alignSelf: "stretch",
                    flexGrow: "0",}}/>
                    <error> {errors.lastname?.type === "required" && "lastname please"}</error>
                    </div>
                   </div>
                   
                    
                   <div name="email">
                    <label id='email'>Email</label>
                    <input  {...register("email",{required: true})} id="email" name="email" type='email'  placeholder='yourname@email.com' style={{ borderRadius: "8px",
                    border:" 1px solid #D0D5DD", borderRadius: "8px",
                    boxSizing: "border-box",

                    /* Auto layout */
                    
                    display: "flex",
                    flexDirection: "row",
                    alignitems: "center",
                    padding: "10px 14px",
                    gap: "8px",
                    
                    width: "100%",
                    height: "44px",
                    
                    /* Base/White */
                    
                    background: "#FFFFFF",
                    /* Gray/300 */
                    
                    border:" 1px solid #D0D5DD",
                    /* Shadow/xs */
                    
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    borderRadius: "8px",
                    
                    /* Inside auto layout */
                    flex: "none",
                    order: "1",
                    alignSelf: "stretch",
                    flexGrow: "0", marginBottom:"25px"}}/>
                    <error> {errors.email?.type === "required" }</error>
                    </div>



                    
                      <div style={{marginBottom:"25px"}} >
                    <label id='message'>Message</label> 
                    <textarea {...register("message", {required: true})} id='message'  name="message" placeholder="Send me a message and i will reply you as soon as possible" {...register("message",{required: true})} />
                    <error> {errors.email?.type === "required"}</error>
                    </div>
                    

                   <div id="check" style={{marginBottom:"35px"}}>
                   <span className='check'>
                   <input  style={{borderRadius: "8px",
                   border:" 1px solid #D0D5DD"}}  type={"checkbox"} /> <label>You agree to providing your data to Lotanna Nnamani who may contact you</label>
                   </span>
                   </div>
                   
                    <button type='submit'  name="btn"  id="btn__submit" >
                            <p>Send Message</p>
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