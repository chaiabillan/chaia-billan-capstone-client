import './CommentItem.scss'

function CommentItem({comment, onDelete}) {

    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:8080/api/comments/${comment.id}`);
          onDelete(comment.id); // Notify the parent component about the deletion
        } catch (error) {
          console.error(error);
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