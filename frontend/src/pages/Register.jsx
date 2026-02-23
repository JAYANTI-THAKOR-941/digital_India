import React from 'react'
import { useState } from 'react'
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    

    const navigate = useNavigate();

    const [form,setForm] = useState({
        username:"",
        email:"",
        password:""
    });

    const [error,setError] = useState("");


    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await api.post('/user/register',form);
            localStorage.setItem('userdata',res.data.user.username);
            alert("Register successfully.!");
            navigate('/');
        }
        catch(error){
            setError("Register faild.!!");
        }
    }


if(error) return <h2>{error}</h2>

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name='username' onChange={handleChange} placeholder='Enter name' />
        <input type="email" name='email' onChange={handleChange} placeholder='Enter Email' />
        <input type="text" name='password' onChange={handleChange} placeholder='Enter password' />
        <button>Register</button>
    </form>
  )
}

export default Register