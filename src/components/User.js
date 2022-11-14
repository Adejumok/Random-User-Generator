import Button from './button/Button';

const User = ({userInfo, clicked}) => {
      
    return(
    <>
    {userInfo.map((user)=>{
        return(
            <div className='user' key={user.cell}>
            <img className='img' src={user.picture.large} alt=''/>
            <div>I am {user.name.title} {user.name.first} {user.name.last}</div>
            <div>I am {user.dob.age} years old</div>
            <div>I reside in {user.location.city}</div>
            <div>My email address is {user.email}</div>
            <div>I am a {user.nat} citizen</div>
            <div>You can contact my phone on {user.phone}</div>
            </div>
        )
    })}
    <Button clicked={clicked}/>
    </>)
}
export default User