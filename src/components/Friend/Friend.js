import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    let {name , username , email, id} = props.friend
    let navigate = useNavigate()
    let showDetails = () => {
        
        navigate('/about/' +id);
    }
    return (
        <div className='mt-3 wrap'>
            <ul className='list'>
                <h5><li>Tag : {id}</li></h5>
                <h5><li>Name : {name}</li></h5>
                <h5><li>User Name : {username}</li></h5>
                <h5><li>Email : {email}</li></h5>
                <button onClick={showDetails} className='btn btn-primary'>See Their Details</button>
            </ul>
        </div>
        
    );
};

export default Friend;