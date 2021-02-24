import React from 'react';
var Footer = (props) => {
    return (
        <div>
            <h3>Footer Page</h3>
            <h3>This component was made uing Function not a class</h3>
            <p>this value displayed from props : {props.title}</p>
            <p>My name : {props.name}</p>
        </div>
    );
}
export default Footer;