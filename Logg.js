import react from "react";
import iconSlack from "./img/slack.svg";
import yourGithub from "./img/github.svg";





function logg() {
  return (
    <div style={{paddingTop:"6%", paddingBottom:"12%",width:"100%", alignItems:"center", display:"flex", justifyContent:"center", flexDirection:"row", flexWrap:"wrap"  }}>
                                  <a href="https://slack.com/" id="@Lotanna" target="_blank" rel="noopener noreferrer"style={{width:"10%", alignItems:"center", marginLeft:"5%"}} >
                                      <img src={iconSlack} style={{marginRight:"10%", width:"30%",  }}  />
                                        
                                      <img src={yourGithub} style={{width:"30%",  }}  />
                                    </a>
                                    </div>
  )
}

export default logg




