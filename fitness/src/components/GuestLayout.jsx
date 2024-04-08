import { Navigate, Outlet } from "react-router-dom"
import {useStateContext} from "../contexts/ContextProvider.jsx"


export default function guestlayout() {
    const {token} = useStateContext()


    if(token) {
        return <Navigate to="/"/>
    }

    return (
       <section id="pagelogin">
        <div id="leftpagelogin">

        </div>
        <div id="rightpagelogin">
            <Outlet></Outlet>
        </div>
       
       </section>
    )
}