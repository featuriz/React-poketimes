import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    // https://reactrouter.com/docs/en/v6/getting-started/concepts#navigate-function
    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/contact");
        }, 20000);
    });
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tenetur nemo nihil consectetur beatae animi nam, iste libero quae illo deserunt possimus! Numquam quidem quos iure explicabo voluptate excepturi porro.</p>
        </div>
    );
}

export default Rainbow(About);
