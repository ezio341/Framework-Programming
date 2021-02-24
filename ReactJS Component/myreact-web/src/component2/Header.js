import React from 'react';
import './header.css';
function Header(props){
    return (
        <div class='title'>
            <h3>{props.title}</h3>
        </div>
    );
}
export default Header;