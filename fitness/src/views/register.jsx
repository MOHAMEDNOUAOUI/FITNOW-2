import { useRef , useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axious-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function register() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordconfirmRef = useRef();
    const [errors , setErrors] = useState(null);

    const {setUser,setToken} = useStateContext();
    

    const onSubmit = (ev) =>{
        ev.preventDefault()


        const payload = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,
            passwordconfirm : passwordconfirmRef.current.value
        }


        axiosClient.post('/auth/register' , payload)
        .then(({data}) => {
            setToken(data.token)
            setUser(data.user)
            console.log(data);
        })

         .catch(err => {
            const response = err.response;
            if(response && response.status == 422){
                setErrors(response.data.errors)
            }
        })
    }





    return (
        <>
        <div className="containerregister">
                <div id="topcontainerregister">
                <h1>register</h1>
                {errors && <div className="alert">
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
                }
                <p>You have an Account? <Link id="createone" to='/login'>Clickh here</Link></p>
                </div>

                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" ref={nameRef}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" ref={emailRef} />
                    </div>
                    <div>
                        <label htmlFor="password">Email</label>
                        <input type="password" name="password" ref={passwordRef} />
                    </div>
                    <div>
                        <label htmlFor="password_confirm">Email</label>
                        <input type="password" name="password_confirm" ref={passwordconfirmRef} />
                    </div>


                    <button type="submit">Submit</button>
                    </form>
        </div>
        </>
    )
}