import React, {Component} from 'react';
import './BlogPost.css';
import Post from '../../component/BlogPost/Post'

class BlogPost extends Component{
    state = {
        listArticle:[]
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(jsonFromAPI =>{
                this.setState({
                    listArticle: jsonFromAPI
                })
            })
    }
    render(){
        return (
            <div className='post-article'>
                <h2>Article List total {this.state.listArticle.length}</h2>
                {
                    this.state.listArticle.map(article => {
                        return <Post key={article.id} title={article.title} content= {article.body}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;