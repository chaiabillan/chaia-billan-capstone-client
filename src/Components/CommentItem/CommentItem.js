import './CommentItem.scss'

function CommentItem({comment}) {

    return (
        <>
            <div>
                    <p>{comment.username}</p>
                    <p>{comment.comment_text}</p>
                    <span>{comment.likes_count}</span>
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