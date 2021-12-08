import React from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useSelector } from 'react-redux'

const Post = () => {
    let { post_id } = useParams();
    const posts = useSelector((state) => state.root.posts);
    var singPost = (id) => posts.filter(obj => {
        return obj.id === parseInt(id)
    })

    var doUI = (id) => {
        var x = singPost(id)[0];
        return (x !== null) ? (
            <div className="post">
                <h4 className="center">{x.title}</h4>
                <p>{x.body}</p>
            </div>
        ) : (
            <div className="center">Loading posts...</div>
        );
    }
    return (
        <div className="container">
            {doUI(post_id)}
        </div>
    );
}

export default Post;
