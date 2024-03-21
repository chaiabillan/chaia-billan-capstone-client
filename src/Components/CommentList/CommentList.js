import './CommentList.scss'
import CommentItem from '../CommentItem/CommentItem'

function CommentList({comments}) {

    return (
        <>
            {comments.map(comment => (
                <CommentItem 
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </>
    )
}

export default CommentList