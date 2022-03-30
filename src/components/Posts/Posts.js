import React, { useEffect, useState } from 'react';

const Post = () => {
    const [posts , setPosts] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h1>Users Posts are Available Here</h1>
            <h6>Total Post : {posts.length}</h6>
        </div>
    );
};

export default Post;