import React, { useState, useEffect } from 'react';
import Post from '../Posts/Post';

const Fetch = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            console.log(data)
        })
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Fetch;