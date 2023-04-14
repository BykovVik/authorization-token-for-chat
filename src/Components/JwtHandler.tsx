import React from "react";
import { redirect } from "react-router-dom";


 
function RouteGuard() {
    let flag = false;
  
    //check user has JWT token
    localStorage.getItem("token") ? flag=true : flag=false
  
    
    if(flag) {
        return(redirect("/chat"))
    }
    else
        return(redirect("/"))
            
    

}
 
  
 export default RouteGuard;