import React from 'react';
import { Link, }from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                
import "primeicons/primeicons.css";
import { Avatar } from "primereact/avatar";

import "primeflex/primeflex.css";
import { Button } from "primereact/button";

import iconSvg from "./img/Icon.svg";
import iconSlack from "./img/slack.svg";
import yourGithub from "./img/github.svg";



function Home() {
  return (
    <div>
                  <div className="p-d-flex p-jc-center p-ai-center"  >
                        <div >
                           
                        
                          <Avatar style={{marginTop:"70px",   }} image={require("./img/GEE.jpg")} alt='splash' id="profile_img"  size="xlarge" shape="circle"
                          className="p-overlay-badge">
                             
                          </Avatar>
                          
                        </div>

                          <div>
                         
                              <img src={iconSvg}  style={{ marginTop:"0%", paddingTop:"0%", paddingLeft:"2300%" }}  />
                             </div>
                          
                          
                    </div>
                    

                    <div  style={{display:"flex", alignItems:"center", flexWrap:"wrap", justifyContent:"normal", flexDirection:"column", flexWrap:"wrap"}}>
                          <h2 style={{marginTop:"0", paddingTop:"0"}}>Lotanna Nnamani</h2>
                          <h4 style={{marginTop:"0", paddingTop:"0"}}>FRONTEND WEB DEV -- REACTJS AND DJANGO. www.github.com/Lotanna1989</h4>
                          
                    </div>

                    

                    <div className="p-d-flex p-jc-center">
                        <div className="p-d-flex p-flex-column " style={{width:"90%"}}>
                       
                              <Button className="p-px-4 p-py-8 p-jc-center p-button-secondary" style={{border: "1px solid #EAECF0", borderRadius: "8px", marginBottom: "5px", width:"100%", backgroundColor:"#EAECF0", border:"none"}}>
                                    <i className="pi pi-twitter p-px-8" style={{color:"blue"}}></i>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{width: "1152px",
                                    height: "76px",
                                    fontstyle:" normal",
                                    fontWeight: "500",
                                    fontSize: "18px",
                                    lineHeight: "28px",color: "black", textDecoration:"none"}} >
                                      <span className="p-px-4" id="Twitter" > Twitter Link @PhilipNnamani </span>
                                     </a> 
                              </Button>
                            

                           
                              <Button className="p-p-2  p-jc-center p-button-secondary"  style={{border: "1px solid #EAECF0", borderRadius: "8px", marginBottom: "5px", backgroundColor:"#EAECF0", border:"none"}}>
                              <a href="https://background.zuri.team" target="_blank" rel="noopener noreferrer" style={{
                              fontstyle:" normal",
                              fontWeight: "500",
                              fontSize: "18px",
                              lineHeight: "28px", color: "black", textDecoration:"none", width: "1152px",
                              height: "76px"}} >
                                      <span className="p-px-2" id="btn__zuri"> Zuri Team </span>
                              </a>
                              </Button>
                            

                            
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{border: "1px solid #EAECF0", borderRadius: "8px", marginBottom: "5px", backgroundColor:"#EAECF0", border:"none"}}>
                              <a href="http://books.zuri.team" target="_blank" rel="noopener noreferrer" style={{width: "1152px",
                              height: "76px",
                              fontstyle:" normal",
                              fontWeight: "500",
                              fontSize: "18px",
                              lineHeight: "28px", color: "black", textDecoration:"none"}} >      
                                      <span className="p-px-2" id="books"  > Zuri Books </span>
                                      </a>
                              </Button>
                              

                              
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{border: "1px solid #EAECF0", borderRadius: "8px", marginBottom: "5px", backgroundColor:"#EAECF0", border:"none"}}>
                                     <a href="https://github.com/Lotanna1989" target="_blank" rel="noopener noreferrer" style={{
                                          fontstyle:" normal",
                                          fontWeight: "500",
                                          fontSize: "18px",
                                          lineHeight: "28px", color: "black", textDecoration:"none", width: "1152px",
                                          height: "76px",width: "1152px",
                                     height: "76px",color: "black", textDecoration:"none"}}>
                                      <span className="p-px-2" id="book__python"> Python Books </span>
                                      </a>
                              </Button>
                              

                             
                             
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{border: "1px solid #EAECF0", borderRadius: "8px", marginBottom: "5px", backgroundColor:"#EAECF0", border:"none"}}>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
                                    fontstyle:" normal",
                                    fontWeight: "500",
                                    fontSize: "18px",
                                    lineHeight: "28px", color: "black", textDecoration:"none", width: "1152px",
                                    height: "76px"}} > 
                                      <span className="p-px-2" id="pitch" > Background Checks for Coders </span>
                                      </a>
                              </Button>
                              


                              
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{border: "1px solid #EAECF0", borderRadius: "8px", marginBottom: "5px", backgroundColor:"#EAECF0", border:"none"}}>
                                   <a href="https://books.zuri.team/design-rules" target="_blank" rel="noopener noreferrer" style={{
                                   fontstyle:" normal",
                                   fontWeight: "500",
                                   fontSize: "18px",
                                   lineHeight: "28px", color: "black", textDecoration:"none", width: "1152px",
                                   height: "76px"}}>
                                      <span className="p-px-2" id="book__design" > Design Books </span>
                                    </a>
                              </Button>


                              
                              <Button className="p-p-2 p-jc-center p-button-secondary"  style={{border: "1px solid #EAECF0", borderRadius: "8px", marginBottom: "5px", backgroundColor:"#EAECF0", border:"none",}}>
                                      <Link to={"./Contact"} style={{
                                      fontstyle:" normal",
                                      fontWeight: "500",
                                      fontSize: "18px",
                                      lineHeight: "28px", color: "black", textDecoration:"none", width: "1152px",
                                      height: "76px"}}>

                                      
                                     <span className="p-px-2" id="contact" > Contact Me</span>   
                                       </Link>
                                       
                                      
                              </Button>
                              

                             
                              
                                    <div style={{paddingTop:"6%", paddingBottom:"12%",width:"100%", alignItems:"center", display:"flex", justifyContent:"center", flexDirection:"row", flexWrap:"wrap"  }}>
                                  <a href="https://slack.com/" id="@Lotanna" target="_blank" rel="noopener noreferrer"style={{width:"10%", alignItems:"center", marginLeft:"5%"}} >
                                      <img src={iconSlack} style={{marginRight:"10%", width:"30%",  }}  />
                                        
                                      <img src={yourGithub} style={{width:"30%",  }}  />
                                    </a>
                                    </div>
                              
                              
                          </div>
                    </div>
          </div>          
                   
       
  )
}

export default Home