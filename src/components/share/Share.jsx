import './share.css'
import { MdOutlinePermMedia } from "react-icons/md";
import { MdLabel } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";


function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/person/1.jpeg" className='shareProfileImg' alt="" />
            <input type="text" placeholder='whats in your mind' className='shareInput' />
        </div>
        <hr  className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <MdOutlinePermMedia color="tomato" className='shareIcon'/>
                        <span className='shareOptionText'>Photo or video</span>
                    </div>
                    <div className="shareOption">
                    <MdLabel color="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <FaLocationDot color="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <MdEmojiEmotions color="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
      </div>
    </div>
  )
}

export default Share


// change the icons  