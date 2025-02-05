import './online.css'

function Online({user}) {
  return (
    <li className='rightbarFriend'>
    <div className="rightbarProgileImgContainer">
      <img src={user.profilePicture} alt="" className='rightbarProfileImg'/>
      <span className='rightbarOnline'></span>
    </div>
    <span className='rightbarUsername'>{user.username}</span>
  </li>
  )
}

export default Online
