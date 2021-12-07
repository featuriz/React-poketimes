import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = (props) => {

    // https://reactrouter.com/docs/en/v6/getting-started/concepts#navigate-function
    let navigate = useNavigate();
    const [state, setPosts] = useState({ alert: null });

    const setRainbow = (e) => {
        if (e.target.text === 'About') {
            clearTimeout(state.alert)
            var a = setTimeout(() => {
                navigate("/contact");
            }, 2000);
            setPosts(s => ({ ...s, alert: a }));
        } else {
            clearTimeout(state.alert)
            setPosts(s => ({ ...s, alert: null }));
        }
    }

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Poke'Times</Link>
                <ul className="right" onClick={setRainbow}>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
