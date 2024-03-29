import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function signup(){
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { email, username, password })
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)});
        navigate('/signin');
    };

    return (
        <>
        <div className='position-absolute top-50 start-50 translate-middle'>
        <div className='bg-primary p-5 rounded-5 bg-light border border-dark'>
        <form onSubmit={handler}>
            <div className='text-center'>
                <h2 className='text-dark mb-5'>Sign Up</h2>
            </div>
            
            <div className="input-group mb-4">
                <input type="email" className="form-control border border-dark" 
                    aria-label="Sizing example input"  
                    aria-describedby="inputGroup-sizing-default" 
                    placeholder='Email'
                    onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-group mb-4">
                
                <input type="text" className="form-control border border-dark" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                placeholder='Username'  onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className="input-group mb-4">
                
                <input type="password" className="form-control border border-dark" aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
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