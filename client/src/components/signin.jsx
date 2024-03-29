import {React, useState} from 'react';
import axois from 'axios';
import { useNavigate } from 'react-router-dom';
function signin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [borderUsername, setBorderUsername] = useState('border-dark');
    const [borderPassword, setBorderPassword] = useState('border-dark');
    const navigate = useNavigate();

    const signinHandler = (e) => {
        e.preventDefault();
        if(!username || !password){
            if(!username){
                setErrorUsername('Username is required');
                setBorderUsername('border-danger');
            }else{
                setErrorUsername('');
                setBorderUsername('border-dark');
            }

            if(!password){
                setErrorPassword('Password is required');
                setBorderPassword('border-danger');
            }else{
                setErrorPassword('');
                setBorderPassword('border-dark');
            }

        }else{
            axois.post("http://localhost:3001/login",{username, password})
            .then((res)=>{console.log(res)
                if(res.data.message === "Success"){
                    navigate('/dashboard');
                }
            })
            .catch((err)=>console.error(err));
        }
    }
    return (
        <>
            <div className='position-absolute top-50 start-50 translate-middle'>
                <div className="bg-light border border-dark p-5 rounded-5">
                    <form onSubmit={signinHandler}>
                        <h2 className='mb-4 text-center'>Sign In</h2>
                            <div className='mb-3'>
                                <div className="input-group">
                                    <input type="text" className={`form-control border ${borderUsername}`} 
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                                    placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                                </div>
                                <div className='text-danger'>{errorUsername}</div>
                            </div>
                            <div className='mb-3'>
                            <div className="input-group">
                                    <input type="password" className={`form-control border ${borderPassword}`} aria-label="Sizing example input" 
                                    aria-describedby="inputGroup-sizing-default" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <div className='text-danger'>{errorPassword}</div>
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