import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    //console.log(props.friends)
    const { name, email, id } = props.friend;
    const history = useHistory();
    const friendsStyle = {
        border: '1px solid purple',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '5px 5px 5px lightgrey'
    }
    const handleClick = (fId) => {
        const url = `/about/${fId}`;
        history.push(url);
    }
    return (
        <div style={friendsStyle}>
            <h4>Name: {name}</h4>
            <h6>Email: {email}</h6>
            <Link to={`/about/${id}`}>
                More About
            </Link>
            <button onClick={() => handleClick(id)}>or Click here</button>
        </div>
    );
};

export default Friend;