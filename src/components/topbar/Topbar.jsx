import './topbar.css'
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>BeingSocial</span>
        </div>
        <div className="topbarCenter">
            <div className='searchbar'>
            <CiSearch className='searchIcon' />
            <input type="text" placeholder='Search for friend, post or video' className='searchInput' />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                <IoPerson />
                <span className="topbarIconBadge">1</span>
                </div>

                <div className="topbarIconItem">
                <BsChatLeftText />
                <span className="topbarIconBadge">2</span>
                </div>

                <div className="topbarIconItem">
                <IoIosNotifications />
                <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className='topbarImg' />
        </div>
    </div>
  )
}

export default Topbar
