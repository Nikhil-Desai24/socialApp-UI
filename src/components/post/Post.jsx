import './post.css'
import { MdMoreVert } from "react-icons/md";
import { Users } from '../../dummyData'; // Importing Posts from dummyData file
import { useState } from 'react';

function Post({post}) {
    
    // const user = Users.filter(u=>u.id===1)

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className='postTopLeft'>
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} className='postProfileImg' alt="" />
                    <span className='postUsername'>              
                    {Users.filter((u) => u.id === post?.userId)[0].username}
                    </span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopRight'>
                <MdMoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className='postText'>{post?.desc}</span>
                <img src={post.photo} alt="" className='postImg'/>
            </div>
            <div className="postBottom">
                <div className='postBottomLeft'>
                    <img src="/assets/like.png" alt="" className='likeIcon' onClick={likeHandler} />
                    <img src="/assets/heart.png" alt="" className='likeIcon' onClick={likeHandler} />
                    <span className='postLikeCounter'>{like}</span>
                </div>
                <div className='postBottomRight'>
                    <span className="postCommentT">{post.comment}</span>ext
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
