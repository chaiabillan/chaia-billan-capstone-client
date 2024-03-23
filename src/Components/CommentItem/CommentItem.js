import './CommentItem.scss'
// import axios from 'axios';

function CommentItem({comment, onDelete}) {

    const handleDelete = async () => {
        try {
            onDelete(comment.comment_id); 
        }  catch (error) {
            console.error('Error deleting comment:', error);
        }
      };

    return (
        <>
            <div>
                    <p>{comment.username}</p>
                    <p>{comment.comment_text}</p>
                    <span>{comment.likes_count}</span>
                    <button onClick={handleDelete}>Delete</button> 
                    {/* Render replies if available */}
                    {comment.replies && comment.replies.map(reply => (
                        <div key={reply.reply_id}>
                            <p>{reply.username}</p>
                            <p>{reply.reply_text}</p>
                            <span>{comment.likes_count}</span>

                        </div>
                    ))}
                </div>
        </>
    )
}

export default CommentItem