import './CommunityPage.scss';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CommentList from '../../Components/CommentList/CommentList';

function CommunityPage () {

    const [comments, setComments] = useState([]);
    const baseURL = 'http://localhost:8080'

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/comments`)
                // console.log(response.data);
                setComments(response.data);
            } catch (err) {
                console.log(err);
            }
    
        }
        fetchComments();
    }, [])


    return (
        <>
            <p>this is the community page</p>
            < CommentList comments={comments}/>
        </>
    )
}

export default CommunityPage