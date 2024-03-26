import './CommentList.scss'
import CommentItem from '../CommentItem/CommentItem'
import axios from "axios";

function CommentList({comments, onDeleteComment, fetchComments}) {

    const handleDeleteComment = async (commentId) => {
        // Filter out the deleted comment from the comments array
        await axios.delete(`http://localhost:8080/api/comments/${commentId}`);

        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        onDeleteComment(updatedComments);
        console.log(updatedComments);
        // setComments(updatedComments);
    };

    

    return (
        <>
            <section className='comments'>
                {comments.map(comment => (
                    <CommentItem
                        key={comment.comment_id}
                        comment={comment}
                        commentId={comment.comment_id}
                        onDelete={handleDeleteComment}
                        fetchComments={fetchComments}
                    />
                ))}
            </section>
        </>
    )
}

export default CommentList