import React, {Component} from 'react';

const Student = (props)=>{
    return (
        <div className='article'>
            <div className='article-img'>
                <img src='http://placeimg.com/80/80/user' alt='Article Image'/>
            </div>
            <div className='article-content'>
                <div className='article-title'>{props.name}</div>
                <p className='article-par'>
                    NIM : {props.nim} <br/>
                    Address : {props.address}<br/>
                    Phone : {props.phone}<br/>
                    Year : {props.year}<br/>
                    Status : {props.status}<br/>
                </p>
                <button className='btn btn-sm btn-danger' onClick={()=>props.onDelete(props.idstd)}>Delete</button>
            </div>
        </div>
    )
}

export default Student;