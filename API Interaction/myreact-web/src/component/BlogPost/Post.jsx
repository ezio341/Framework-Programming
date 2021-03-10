import React, {Component} from 'react';

const Post = (props)=>{
    return (
        <div className='article'>
            <div className='article-img'>
                <img src='http://placeimg.com/80/80/tech' alt='Article Image'/>
            </div>
            <div className='article-content'>
                <div className='article-title'>{props.title}</div>
                <p className='article-par'>{props.content}</p>
            </div>
        </div>
    )
}

export default Post;