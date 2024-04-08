import { useState } from "react"
import {Link, Navigate, Outlet } from "react-router-dom"
import {useStateContext} from "../contexts/ContextProvider.jsx"

export default function defaultlayout() {
    const {user,token} = useStateContext()


    if(!token) {
        return <Navigate to="/login" />
    }
    return (
        <section id="page1">
        <Outlet></Outlet>
        </section>
        
    )
}