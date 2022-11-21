import { useState } from 'react';
import Button from './button/Button';

const User = ({userInfo, clicked}) => {
    const [activeRef, setActiveRef] = useState(0)

    const icons = [
        "fa fa-user-circle fa-4x",
        "fa fa-male fa-4x",
        "fa fa-calendar fa-4x",
        "fa fa-envelope fa-4x",
        "fa fa-map-marker fa-4x",
        "fa fa-phone fa-4x",
    ]

    const Profile=({user})=>{
        const profile =[
            `I am ${user.name.title} ${user.name.first} ${user.name.last}`,
            `I am a ${user.gender}`,
            `I am ${user.dob.age} years old`,
            `My email address is ${user.email}`,
            `I am a ${user.nat} citizen`,
            `You can contact me through my phone on ${user.phone}`
    ]

    return(<h2>{profile[activeRef]}</h2>)
    }
    const activeRefHandler = (index) => {
        setActiveRef(index)
    }
      
    return(
    <>
    {userInfo.map((user, index)=>{
        return(
            <div className='user' key={user.cell}>
            <img className='img' src={user.picture.large} alt=''/>
            <Profile user={user}/>
            <div className='icons'>
                {icons.map((icon, index)=>{
                    return <i className={icon} key={index} onMouseEnter={()=>activeRefHandler(index)}></i>
                })}
            </div>
            
            </div>
        )
    })}
    <Button clicked={clicked}/>
    </>)
}
export default User