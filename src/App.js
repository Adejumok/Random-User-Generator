import axios from 'axios'
import React, { useState } from 'react'
import User from './components/User'

const App = () => {
  const [userInfo, setUserInfo] = useState([])

  const clickHandler =(e) =>{
    e.preventDefault()
   axios.get('https://randomuser.me/api/')
   .then((response)=>{
    console.log(response.data.results);
    setUserInfo(response.data.results);
   }).catch((e)=>{
    console.log(e);
   }).finally(()=>{
   })
  }

  return (
    <div className='app'>
    <h1>Random User Generator</h1>
    <User userInfo={userInfo} clicked={clickHandler}/>
    </div>
  )
}

export default App