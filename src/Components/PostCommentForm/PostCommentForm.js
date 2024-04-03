import './PostCommentForm.scss'
import { useRef } from "react";
import axios from 'axios';


function PostCommentForm({ fetchComments }) {

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

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/comments`,
                newCommentData)
            fetchComments();

            usernameRef.current.value = '';
            commentTextRef.current.value = '';
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <section className='post-comment'>
                <p className='post-comment__title'>Leave some advice, share experiences, or ask a question!</p>
                <form className='form' ref={formRef} onSubmit={handleSubmit}>
                    <label className='form__label'>Name:</label>
                    <input className='form__input' ref={usernameRef} type='text' id='name'></input>
                    <label className='form__label'>Comment:</label>
                    <textarea className='form__input form__input--comment' ref={commentTextRef} type='text' id='comment'></textarea>
                    <button className='form__button'>Post</button>
                </form>
            </section>
        </>
    )
}

export default PostCommentForm