import { textAlign } from '@mui/system'
import React from 'react'
import success from '../../images/success.png';

const Success = () => {
  return (
    <div className='success-container'>
      <h1 style = {{textAlign: "center", fontSize:"36px", fontWeight:"bold"}}>SUCCESS !</h1>
      <img src={success} width="300px" />
      <h3 style = {{textAlign: "center", width: "70%"}}>You have successfully filled your membership form, you will soon recieve details about your interview via email</h3>
    </div>
  )
}

export default Success
