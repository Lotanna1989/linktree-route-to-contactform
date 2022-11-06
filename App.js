import { React,  Fragment, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                
import "primeicons/primeicons.css";
import { Avatar } from "primereact/avatar";

import "primeflex/primeflex.css";
import { Button } from "primereact/button";

import iconSvg from "./img/Icon.svg";
import iconSlack from "./img/slack.svg";
import yourGithub from "./img/github.svg";

import "./app.css";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import Logg from "./Logg"










function App() {
  return (

    <Router>
    <div  style={{backgroundColor:"#F4F5F7", overflow:"visible", flexWrap:"wrap", width: "100%", boxSizing:"border-box",overflow:"hidden"}}>
            <Routes> 
            <Route exact path="/" 
            element={
                  <Fragment>

                      
                    <Home />
                    <Logg />
                    <Footer />

                </Fragment>
            }
            />

            <Route path="/contact" 
            element={
                  <Fragment>

                  
                    <Contact />
                    
                    
                    
                    
                   
                    
                    

                </Fragment>
            }
            />

             </Routes>
             </div>
            
   </Router> 
  );
}

export default App;
