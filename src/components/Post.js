import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { deletePost } from '../reducers/rootSlice'

const Post = () => {
    let navigate = useNavigate();
    let { post_id } = useParams();
    const posts = useSelector((state) => state.root.posts);
    var singPost = (id) => posts.find(obj => obj.id === parseInt(id))
    const dispatch = useDispatch()

    const handleClick = (id) => {
        dispatch(deletePost({ id, extra_val: 'ok-1' }));
        navigate("/");
    }

    const post = (id) => {
        var sp = singPost(id);
        return sp ? (
            <div className="post">
                <h4 className="center">{sp.title}</h4>
                <p>{sp.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={() => handleClick(sp.id)}>deletePost</button>
                </div>
            </div>
        ) : (
            <div className="center">Loading posts...</div>
        );
    }
    return (
        <div className="container">
            {post(post_id)}
        </div>
    );
}

export default Post;
