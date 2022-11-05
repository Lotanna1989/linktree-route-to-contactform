import React from 'react';
import "./img/Footer2.jpg";
import "./img/Footer1.jpg";


function Footer() {
  return (
    <div style={{ width:"100%", alignItems:"center", display:"flex",flexWrap:"wrap", justifyContent:"space-around",  }}>
                         
                          <div style={{  width:"93%",borderTop:"1px solid darkgrey", alignItems:"center", display:"flex",flexWrap:"wrap", justifyContent:"space-between", flexDirection:"row",   }}>
                          <img src={require("./img/Footer1.jpg")} style={{justifyContent:"flex-start"}} />
                          <div style={{justifyContent:"center"}} ><h4 style={{color:"darkgrey"}}>HNG Internship 9 Frontend Task</h4></div>
                          <img src={require("./img/Footer2.jpg")} style={{justifyContent:"flex-start"}}/>
                     </div>       
                    </div>
  )
}

export default Footer