import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friendDetail, setFriendDetail] = useState({});
    const friendStyle ={
        width: '500px',
        height: '200px',
        boxShadow: '5px 5px 5px lightblue',
        margin: '0 auto'
    }
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriendDetail(data))
    }, [])
    return (
        <div style={friendStyle}>
            <h4>Name: {friendDetail.name}</h4>
            <h6>Phone: {friendDetail.phone}</h6>
            <p>Website: {friendDetail.website}</p>
            <p>Email: {friendDetail.email}</p>
        </div>
    );
};

export default FriendDetail;