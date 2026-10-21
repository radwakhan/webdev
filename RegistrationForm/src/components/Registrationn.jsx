import React, { useState } from 'react'

const Registrationn = () => {
    const [check,setCheck]=useState(false);
    const {formData,setFormData}=useState({
        user:"",
        pwd:""
    });
    const handleForm=(event)=>{
        const {name,vale}=event.target;
        setFormData({...formData,[name]:value})
    }
  return (
    <div>
<form className='d-flex flex-column w-50' onSubmit={handleSubmit}>
    
</form>
        {check && <DisplayReg user ={formData.user} pwd={pwd}/>}
    </div>
  )
}
const DisplayReg=(props)=>{
    const {user,pwd}=props;
    return(
        <div>
            <h3>user: {user}</h3>
            <h3>Pwd: {pwd}</h3>
        </div>
    )
}

export default Registrationn