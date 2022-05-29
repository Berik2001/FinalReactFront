import React,  {useState} from 'react';

const Userform = () => {
   const [state,setState]=useState[{}];
   const handleChange=e=>{
       setState(state=>({...state,[e.target.name]:e.target.value}))
   }
   return [state];
};

export default Userform;