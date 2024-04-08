import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axious-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser,setToken} = useStateContext();
    

    const onSubmit = (ev) =>{
        ev.preventDefault();

        const payload = {
            email : emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/auth/login' , payload)
        .then(({data}) => {
            setToken(data.token)
            setUser(data.user)
        })

        .catch(err => {
            const response = err.response;
            if(response && response.status == 422){
                console.log(response.data.errors);
            }
        })
    }



    return (
        <>
        <div className="containerlogin">

        <div id="topcontainerlogin">
        <h1>LOGIN</h1>
        <p>You don't have an Account? <Link id="createone" to='/register'>create one</Link></p>
        </div>

        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input ref={emailRef} type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input ref={passwordRef} type="password" name="password" id="password" />
            </div>

            <button type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}