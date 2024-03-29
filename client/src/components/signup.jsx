import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function signup(){
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setusernameError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [errorEmailColor, setEmailErrorColor] = useState('border-dark');
    const [errorUsernameColor, setUsernameErrorColor] = useState('border-dark');
    const [errorPasswordColor, setPasswordErrorColor] = useState('border-dark');
    const navigate = useNavigate();

    const handler = (e) => {
        e.preventDefault();
        if(!email || !username || !password){
            if(!email){
                setEmailError('Email is required');
                setEmailErrorColor('border-danger')
            } else {
                setEmailError('');
                setEmailErrorColor('');
            }
            if(!username){
                setusernameError('Username is required');
                setUsernameErrorColor('border-danger');
            } else {
                setusernameError('');
                setUsernameErrorColor('');
            }
            if(!password){
                setpasswordError('Email is required');
                setPasswordErrorColor('border-danger');
            } else {
                setpasswordError('');
                setPasswordErrorColor('');
            }
        }else{
            axios.post('http://localhost:3001/register', { email, username, password })
            .then((res) => {console.log(res)})
            .catch((err) => {console.log(err)});
            navigate('/signin');
        }
        
    };

    return (
        <>
        <div className='position-absolute top-50 start-50 translate-middle position-fixed'>
        <div className='bg-primary p-5 rounded-5 bg-light border border-dark w-100'>
        <form className='' onSubmit={handler}>
            <div className='text-center'>
                <h2 className='text-dark mb-5'>Sign Up</h2>
            </div>
            
           <div className="mb-3">
            <div className="input-group">
                    <input type="email" className={`form-control border ${errorEmailColor}`} 
                        aria-label="Sizing example input"  
                        aria-describedby="inputGroup-sizing-default" 
                        placeholder='Email'
                        onChange={(e)=>setEmail(e.target.value)}/>  
                </div>
            <div className='text-danger'>{emailError}</div>
           </div>
            <div className="mb-3">
            <div className="input-group">
                <input type="text" className={`form-control border ${errorUsernameColor}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                placeholder='Username'  onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className='text-danger'>{usernameError}</div>
            </div>
            <div className="mb-4">
            <div className="input-group ">
                
                <input type="password" className={`form-control border ${errorPasswordColor}`} aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className='text-danger'>{passwordError}</div>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">Sign up</button>
            </div>
           </form>
           <div className='mt-3'>
             <p>Already have an account?  <Link to="/signin">Signin</Link></p>
           </div>
        </div> 
        </div>
        </>
        
    );
}

export default signup;