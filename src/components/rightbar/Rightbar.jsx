import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
         <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className='birthdayImg'/>
          <span className='birthdaytext'> <b> pola foster </b> and <b> 3 other friends </b> have birtheday today
          </span>
        </div>
        <img src="/assets/ad.png" className='rightbarAd' alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
        {Users.map(u=>(
          <Online key={u.id} user={u} />     /*stopped here*/
        ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarinfoItem">
          <span className='rightbarInfoKey'>City:</span>
          <span className='rightbarInfoValue'>New York</span>
        </div>

        <div className="rightbarinfoItem">
          <span className='rightbarInfoKey'>From:</span>
          <span className='rightbarInfoValue'>Madrid</span>
        </div>

        <div className="rightbarinfoItem">
          <span className='rightbarInfoKey'>Relationship:</span>
          <span className='rightbarInfoValue'>Single</span>
        </div>
      </div>
      <h4 className='rifhtbarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/person/1.jpeg" className='rightbarFollowingImg' alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/2.jpeg" className='rightbarFollowingImg' alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/3.jpeg" className='rightbarFollowingImg' alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/4.jpeg" className='rightbarFollowingImg' alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/5.jpeg" className='rightbarFollowingImg' alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/6.jpeg" className='rightbarFollowingImg' alt="" />
          <span className='rightbarFollowingName'>John Carter</span>
        </div>
      </div>
      </>
    )
  }


  return (

    <div className='rightbar'>
      <div className="rightbarWrapper">
     {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar


