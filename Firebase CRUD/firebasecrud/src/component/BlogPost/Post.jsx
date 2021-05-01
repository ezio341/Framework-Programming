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
                <button className='btn btn-sm btn-warning' onClick={()=>{
                    if(window.confirm('Are you sure to delete this article?')) props.onDelete(props.idArticle)
                }}>Delete</button>
            </div>
        </div>
    )
}

export default Post;