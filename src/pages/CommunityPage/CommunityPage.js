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
            setComments(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDeleteComment = (updatedComments) => {
        setComments(updatedComments);
        console.log(updatedComments);
        fetchComments();
    }

    return (
        <>
            <p>this is the community page</p>
            < PostCommentForm  fetchComments={fetchComments}/>
            < CommentList comments={comments} onDeleteComment={handleDeleteComment} fetchComments={fetchComments}/>
        </>
    )
}

export default CommunityPage