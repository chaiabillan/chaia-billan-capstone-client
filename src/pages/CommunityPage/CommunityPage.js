import './CommunityPage.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CommentList from '../../Components/CommentList/CommentList';
import PostCommentForm from '../../Components/PostCommentForm/PostCommentForm';

function CommunityPage () {

    const [comments, setComments] = useState([]);
    const baseURL = 'http://localhost:8080'

    useEffect(() => {
        
        fetchComments();
    }, [])

    const fetchComments = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/comments`)
            // console.log(response.data);
            setComments(response.data);
        } catch (err) {
            console.log(err);
        }

    }

    const handleNewComment = async (newCommentData) => {
        try {
            await axios.post(`${baseURL}/api/comments`, newCommentData);
            // After posting, refetch comments to update the UI
            fetchComments();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteComment = (updatedComments) => {
        setComments(updatedComments);
    }


    return (
        <>
            <p>this is the community page</p>
            < PostCommentForm onNewComment={handleNewComment}/>
            < CommentList comments={comments} onDeleteComment={handleDeleteComment}/>
        </>
    )
}

export default CommunityPage