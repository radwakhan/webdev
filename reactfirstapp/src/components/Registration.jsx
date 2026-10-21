import React from 'react'

const Registration = () => {
  return (
    <div className='d-flex flex-column'>
        <h2 className='bg -warning text -dark text -center mt -3 row row-cols'>Registration</h2>
        <form className='d-flex flex-column justify-content -center align-items -center'>
            <input type="text" name='user' placeholder='enter your name' />
            <input type="password" name='password' placeholder='enter password'/>

            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Registration