import { useState } from "react";
import AuthBoard from "../Pages/AuthBoard";
import ChatBoard from "../Pages/Chat";

var flag
var page
 
function RouteGuard() {

    const [reload, setReload] = useState(false);

    localStorage.getItem("token") ? flag=true : flag=false

    if (flag) {
        page = <ChatBoard changeState={setReload}/>
    } else {
        page = <AuthBoard changeState={setReload}/>
    }
            
    return(page)

}

export default RouteGuard;