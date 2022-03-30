import React, { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';


const FriendDetail = () => {
    let {friendId} = useParams()
    let [detail, setDetail] = useState({})

    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[])

    return (
        <div className='mt-3 wrap'>
            <h1>Friends Details Are Showing Here </h1>
            <ul className='list'>
               
                <h5><li>Name : {detail.name}</li></h5>
                <h5><li>User Name : {detail.username}</li></h5>
                <h5><li>Email : {detail.email}</li></h5>
            </ul>
        </div>
    );
};

export default FriendDetail;