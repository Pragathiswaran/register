import {React, useState} from 'react';
import axois from 'axios';
import { useNavigate } from 'react-router-dom';
function signin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signinHandler = (e) => {
        e.preventDefault();
        // console.log(username, password);
        axois.post("http://localhost:3001/login",{username, password})
            .then((res)=>{console.log(res)
                if(res.data.message === "Success"){
                    // console.log('Login Successfull');
                    navigate('/dashboard');
                }
            })
            .catch((err)=>console.error(err));
    }
    return (
        <>
        <div className='position-absolute top-50 start-50 translate-middle'>
        <div className="bg-light border border-dark p-5 rounded-5">
            <form onSubmit={signinHandler}>
                <h2 className='mb-4 text-center'>Sign In</h2>
                <div className="input-group mb-3">
                    {/* <span class="input-group-text bg-dark text-white" id="inputGroup-sizing-default">Username</span> */}
                    <input type="text" className="form-control border border-dark" 
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                    placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    {/* <span class="input-group-text bg-dark text-white" id="inputGroup-sizing-default">password</span> */}
                    <input type="password" className="form-control border border-dark" aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </div>
            </form>
            <div className='mt-3'>
                <p>Don't have an account? <a href="/signup">Signup</a></p>
            </div>
        </div>     
        </div>       
        </>
    );
}

export default signin;