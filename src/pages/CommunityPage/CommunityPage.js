import './CommunityPage.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CommentList from '../../Components/CommentList/CommentList';
import PostCommentForm from '../../Components/PostCommentForm/PostCommentForm';
import hero from '../../assets/images/hero-community.jpeg'

function CommunityPage () {

    const [comments, setComments] = useState([]);
    // const baseURL = 'http://localhost:8080'
    // const baseURL = process.env.url;

    useEffect(() => {
        fetchComments();
    }, [])

    const fetchComments = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/comments`)
            setComments(response.data);
            console.log('Response:', response.data); // Log response data
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
                <img src={hero} alt='cheese plate' className='hero__image hero__image--community'/>   
                <p className='hero__title hero__title--community'>Community</p>
            </section>
            <section className='introduction'>
                <div className='introduction__text'>
                    <p className='introduction__top'>This is a great place to connect with fellow travelers that suffer from food allergies</p>
                    <p className='introduction__bottom'>
                        Feel free to leave suggestions for the author of this site as well (e.g., resources to add to travel guide), as this site is a continuous work in progress and will be updated regularly.
                        If you know of a helpful resource or tip, please share! Our mission is to keep as many people safe and worry-free as possible.
                    </p>
                </div>
            </section>
            <section className='comments-all'>
                < PostCommentForm  fetchComments={fetchComments}/>
                < CommentList comments={comments} onDeleteComment={handleDeleteComment} fetchComments={fetchComments}/>
            </section>
            
        </>
    )
}

export default CommunityPage