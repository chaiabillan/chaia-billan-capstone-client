import './CommentList.scss'
import CommentItem from '../CommentItem/CommentItem'

function CommentList({comments, onDeleteComment}) {

    const handleDeleteComment = (commentId) => {
        // Filter out the deleted comment from the comments array
        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        onDeleteComment(updatedComments);
      };

    return (
        <>
            {comments.map(comment => (
                <CommentItem 
                    key={comment.id}
                    comment={comment}
                    onDelete={handleDeleteComment}
                />
            ))}
        </>
    )
}

export default CommentList