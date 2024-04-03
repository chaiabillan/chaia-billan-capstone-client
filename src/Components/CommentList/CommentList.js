import './CommentList.scss'
import CommentItem from '../CommentItem/CommentItem'
import axios from "axios";

function CommentList({comments, onDeleteComment, fetchComments}) {

    const handleDeleteComment = async (commentId) => {
        // Filter out the deleted comment from the comments array
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/comments/${commentId}`);

        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        onDeleteComment(updatedComments);
    };

        // Function to compare timestamps and sort comments by date
        const compareTimestamps = (a, b) => {
            const timestampA = new Date(a.timestamp);
            const timestampB = new Date(b.timestamp);
            return timestampB - timestampA; // Sort in descending order (newest first)
        };
    
        // Sort comments by date
        const sortedComments = [...comments].sort(compareTimestamps);

    return (
        <>
            <section className='comments'>
                {sortedComments.map(comment => (
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