import './PostCommentForm.scss'
import { useRef } from "react";
import axios from 'axios';


function PostCommentForm ({onNewComment}) {

    const formRef = useRef();
    const usernameRef = useRef();
    const commentTextRef = useRef();
    const baseURL = 'http://localhost:8080';

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newCommentData = {
            username: usernameRef.current.value,
            comment_text: commentTextRef.current.value
        }

        // const postNewComment = async () => {
            try {
                await axios.post(`${baseURL}/api/comments`,
                newCommentData)
                onNewComment(newCommentData)
            } catch(err) {
                console.error(err);
            }
        }
        // postNewComment();
    // }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <label>Name</label>
            <input ref={usernameRef} type='text' placeholder='Name' id='name'></input>
            <label>Comment</label>
            <input ref={commentTextRef} type='text' placeholder='Comment' id='comment'></input>
            <button>Post</button>
        </form>
    )
}

export default PostCommentForm