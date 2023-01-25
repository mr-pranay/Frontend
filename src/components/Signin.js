import React from "react";
import './Signin.css'
import {useForm} from 'react-hook-form'
function Signin(){
    let {register,handleSubmit,formState:{errors}}=useForm()
    let fun=(data)=>{
        console.log(data)
       fetch("http://127.0.0.1:8000/signup/",{
         method:'POST',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(data)
       })
       .then(res=>res.json)
       .then(resobj=>console.log(resobj))
       .catch(err=>console.log(err))
    }
    return(
        <div className="p-5">
        <div className="Sign text-center">
            <h3>CREATE ACCOUNT</h3>
            <form onSubmit={handleSubmit(fun)} className='for expand mx-auto m-5'> 
            <input type="text" placeholder='Email' className='form-control  fs-4' {...register("email")} >
            
            </input>
            <input type="text" placeholder='Username' className='form-control  fs-4' {...register("username")} >
            
            </input>
            <input  type="text" placeholder='Name' className='form-control  fs-4' {...register("name")}>
            
            </input>
            <input  type="text" placeholder='Address' className='form-control  fs-4' {...register("address")}>
            
            </input>
            <input type="password" placeholder='Password' className='form-control  fs-4' {...register("password")} >
            
            </input>
            <button  type='submit' className='btn btn-success fs-5 mt-3 p-2'>
            submit
         </button>
         <br></br>
         <br></br>
         </form>

        </div>
        </div>
    )
}
 export default Signin