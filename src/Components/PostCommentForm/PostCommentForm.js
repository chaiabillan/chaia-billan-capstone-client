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
        <>
            <section className='post-comment'>

                <p className='post-comment__title'>Leave some advice, share experiences, or ask a question!</p>
                <form className='form'ref={formRef} onSubmit={handleSubmit}>
                    <label className='form__label'>Name:</label>
                    <input className='form__input'ref={usernameRef} type='text' id='name'></input>
                    <label className='form__label'>Comment:</label>
                    <textarea className='form__input' ref={commentTextRef} type='text' id='comment'></textarea>
                    <button className='form__button'>Post</button>
                </form>
            </section>

        </>
        
    )
}

export default PostCommentForm