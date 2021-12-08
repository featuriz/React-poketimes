import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom'
import firefox from '../firefox.png'
import { useSelector } from 'react-redux'

const Home = () => {
    const posts = useSelector((state) => state.root.posts);
    console.log(posts)
    const postList = posts.length ? (
        posts.map(post => {
            return (
                <div className="post card" key={post.id}>
                    <img src={firefox} alt="Firefox Logo" />
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center">No post yet</div>
    );
    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    );
}

export default Home;
