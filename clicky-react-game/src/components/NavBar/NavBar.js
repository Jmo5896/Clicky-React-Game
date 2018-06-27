import React from 'react';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className = 'col-sm-4'>
            <a className="navbar-brand" href="/">
                <h3>Clicky Game!</h3>            
            </a>
        </div>
        <div className = 'col-sm-4'>
           <h3>Click an image to begin</h3>
        </div>
        <div className = 'col-sm-4'>
            <h3>Score: 0 | Top Score: 0</h3>
        </div>
        
       
    </nav>
);

export default NavBar;