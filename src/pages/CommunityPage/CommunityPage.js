import './CommunityPage.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CommentList from '../../Components/CommentList/CommentList';
import PostCommentForm from '../../Components/PostCommentForm/PostCommentForm';
import hero from '../../assets/images/hero-community.jpeg'

function CommunityPage () {

    const [comments, setComments] = useState([]);
    const baseURL = 'http://localhost:8080'

    useEffect(() => {
        fetchComments();
    }, [])

    const fetchComments = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/comments`)
            setComments(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDeleteComment = (updatedComments) => {
        setComments(updatedComments);
        fetchComments();
    }

    return (
        <>
            <section className='hero'>
                <img src={hero} className='hero__image hero__image--community'/>   
                <p className='hero__title hero__title--community'>Community</p>
            </section>
            <section className='introduction'>
                <div className='introduction__text'>
                    <p className='introduction__top'>This is the description for the community page</p>
                    <p className='introduction__bottom'>further description</p>
                </div>
            </section>
            < PostCommentForm  fetchComments={fetchComments}/>
            < CommentList comments={comments} onDeleteComment={handleDeleteComment} fetchComments={fetchComments}/>
        </>
    )
}

export default CommunityPage