import React from 'react'
import './sidebar.css'
import { MdRssFeed } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { FaRedhat } from "react-icons/fa6";
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend';


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className='sidebarList'>

          <li className="sidebarListItem">
          <MdRssFeed className='sidebarIcon'/>  
          <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <MdOutlineChat className="sidebarIcon" /> 
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <MdOutlineSlowMotionVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <MdGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <FaRegQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <IoBagSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <MdEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <FaRedhat  className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>

        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        
        <ul className='sidebarFriendList'>
          {Users.map((u)=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
