import { useRef } from "react";
import axios from 'axios';
import './ReplyForm.scss'

function ReplyForm({commentId, fetchComments, onReplyPosted}) {

    const formRef = useRef();
    const usernameRef = useRef();
    const replyTextRef = useRef();
    const baseURL = 'http://localhost:8080';

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newReplyData = {
            commentId: commentId,
            username: usernameRef.current.value,
            replyText: replyTextRef.current.value
        }
        console.log(newReplyData);

        try {
            await axios.post(`${baseURL}/api/replies`,
                newReplyData)
            console.log(newReplyData);
            fetchComments();
            onReplyPosted();
            usernameRef.current.value = '';
            replyTextRef.current.value = '';
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <section className='post-reply'>
                <form className='form' ref={formRef} onSubmit={handleSubmit}>
                    <label className='form__label'>Name:</label>
                    <input className='form__input' ref={usernameRef} type='text' id='name'></input>
                    <label className='form__label'>Reply:</label>
                    <textarea className='form__input' ref={replyTextRef} type='text' id='comment'></textarea>
                    <button className='form__button'>Post</button>
                </form>
            </section>
        </>
    )
}

export default ReplyForm