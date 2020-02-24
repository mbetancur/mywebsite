import React from 'react';

import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    };
    return (
        <div className={drawerClasses}>
            <div className="my-photo">
                <img className="small-photo" alt="myphoto"src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRf_bRDRhLHjTnzUjKBR-Czexw2yuYow4YjNQxOcLguCHzVATgZ"></img>
            </div>
            <div className="my-name">Mateo Betancur</div>
            <nav >
                <ul className="site-nav">
                    <li>
                        <a href="/">Products</a>
                    </li>
                    <li>
                        <a href="/">Users</a>
                    </li>
                </ul>
            </nav>
            <div className="social-links">
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-twitter"></i>
            </div>
        </div>
    );
};

export default SideDrawer;