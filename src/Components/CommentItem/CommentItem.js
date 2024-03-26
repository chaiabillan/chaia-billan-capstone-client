import './CommentItem.scss'
import { useEffect, useState } from 'react';
import heart from '../../409001-200.png';
import ReplyForm from '../ReplyForm/ReplyForm';
import axios from 'axios';

function CommentItem({comment, onDelete, fetchComments, commentId}) {
    const [timeAgo, setTimeAgo] = useState('');
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showReplies, setShowReplies] = useState(true);

    useEffect(() => {
        const calculateTimeAgo = () => {
            const timestamp = new Date(comment.timestamp);
            const now = new Date();
            const diff = Math.abs(now - timestamp);
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const weeks = Math.floor(days / 7);
            const months = Math.floor(days / 30);
            const years = Math.floor(days / 365);
            let timeAgoString = '';

            if (years > 0) {
                timeAgoString = years === 1 ? '1 year ago' : `${years} years ago`;
            }
            else if (months > 0) {
                timeAgoString = months === 1 ? '1 month ago' : `${months} months ago`;
            }
            else if (weeks > 0) {
                timeAgoString = weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
            } else if (days > 0) {
                timeAgoString = days === 1 ? '1 day ago' : `${days} days ago`;
            } else if (hours > 0) {
                timeAgoString = hours === 1 ? '1 hour ago' : `${hours} hours ago`;
            } else if (minutes > 0) {
                timeAgoString = minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
            } else {
                timeAgoString = 'just now';
            }
            setTimeAgo(timeAgoString);
        };
        calculateTimeAgo();
    }, [comment.timestamp]);

    // console.log(commentId);

    const handleDeleteReply = async (replyId) => {
        try {
            await axios.delete(`http://localhost:8080/api/replies/${commentId}/${replyId}`);
            fetchComments(); 
        } catch (error) {
            console.error('Error deleting reply:', error);
        }
    };

    const handleDelete = async () => {
        try {
            onDelete(comment.comment_id); 
        }  catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const handleToggleReplyForm = () => {
        setShowReplyForm(!showReplyForm);
    };

    const handleToggleReplies = () => {
        setShowReplies(!showReplies); // Toggle the visibility of replies
    };

    const handleReplyPosted = () => {
        setShowReplyForm(false); // Hide the reply form once posted
        fetchComments(); // Fetch comments to refresh the list
    };



    return (
        <>
            <div className='comment'>
                    <div className='comment__details'>
                        <p className='comment__details--name'>{comment.username}</p>
                        <p className='comment__details--time'>{timeAgo}</p>
                    </div>
                    <div className='comment__text'>
                    <p className='comment__text--content'>{comment.comment_text}</p>
                </div>
                <div className='comment__actions'>
                    <div className='comment__actions--left'>
                        {comment.replies && comment.replies.length > 0 && (
                            <button className='comment__actions--left--hide' onClick={handleToggleReplies}>
                                {showReplies ? 'Hide Replies' : 'Show Replies'}
                            </button>
                        )}                        
                    </div>
                    <div className='comment__actions--right'>
                        <button className="heart-image">
                            <img src={heart} alt='heart'/>
                            </button>
                            <div className='comment__actions--right--likes'>{comment.likes_count}</div>
                            <button className='comment__actions--right--reply' onClick={handleToggleReplyForm}>Reply</button>
                            <button className='comment__actions--right--delete'onClick={handleDelete}>Delete</button> 
                        </div>
                    </div>

                    {showReplyForm && <ReplyForm commentId={comment.comment_id} fetchComments={fetchComments} onReplyPosted={handleReplyPosted}/>}

                {/* Render replies if available */}
                {showReplies && (
                <div className='replies'>
                    {comment.replies && comment.replies.map(reply => (
                        <div key={reply.reply_id} className='replies__indiv'>
                            <div className='comment__details'>
                                <p className='comment__details--name'>{reply.username}</p>
                                <p className='comment__details--time'>{timeAgo}</p>
                            </div>
                            <div className='comment__text'>
                                <p className='comment__text--content'>{reply.reply_text}</p>
                            </div>
                            <div className='comment__actions'>
                                <div className='comment__actions--left'>
                                    <p className='comment__actions--left--hide'></p>
                                </div>
                                <div className='comment__actions--right'>
                                    <button className="heart-image">
                                        <img src={heart} alt='heart'/>
                                    </button>
                                    <div className='comment__actions--right--likes'>{reply.likes_count}</div>
                                    <button className='comment__actions--right--delete' onClick={() => handleDeleteReply(reply.reply_id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>)}
                
                </div>
        </>
    )
}

export default CommentItem