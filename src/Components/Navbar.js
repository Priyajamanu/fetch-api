import React from 'react'

const Navbar = ({ getpersonData }) => {
    return (
        <nav className="navbar">
            <div className='navbar-container container-a'>
                <div className="logo"><p>Lets Grow More</p></div>
                <button type="button" onClick={() => getpersonData(1)}>Get Users</button>
            </div>
        </nav>
    )
}

export default Navbar;