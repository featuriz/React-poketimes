import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    let { post_id } = useParams();
    const [posts, setPosts] = useState({ post: null, countSecrets: 0, ui: '' });

    useEffect(() => {
        if (posts.countSecrets === 0) {
            const doAxe = (a) => {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id)
                    .then((res) => {
                        setPosts(s => ({ ...s, post: res.data }));
                        doUI(res.data)
                        // console.log(res.data)
                    });
            }
            setPosts(s => ({ ...s, countSecrets: s.countSecrets + 1 }));
            doAxe()
        }
    }, [posts, post_id]);
    let doUI = (x) => {
        console.log('x' + x.title)
        const finalPost = (x !== null) ? (
            <div className="post">
                <h4 className="center">{x.title}</h4>
                <p>{x.body}</p>
            </div>
        ) : (
            <div className="center">Loading posts...</div>
        );
        setPosts(s => ({ ...s, ui: finalPost }));
    }
    return (
        <div className="container">
            {posts.ui}
        </div>
    );
}

export default Post;
