import React from 'react'

const Button = ({clicked}) => {
  return (
    <button className='btn' onClick={clicked}>Get User</button>
  )
}

export default Button;