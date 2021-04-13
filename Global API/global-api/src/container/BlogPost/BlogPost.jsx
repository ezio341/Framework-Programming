import React, {Component} from 'react';
import './BlogPost.css';
import Post from '../../component/BlogPost/Post'
import API from '../../service/index'

class BlogPost extends Component{
    state = {
        listArticle:[],
        insertArticle: {
            userId:1,
            id: 1,
            title: "",
            body: ""
        }
    }

    fetchDataFromAPI = () =>{
        API.getNewsBlog().then(result => {
            this.setState({
                listArticle: result
            })
        })
    }

    componentDidMount(){
        this.fetchDataFromAPI()
    }

    handleDelete = (data) => {
        API.deleteNewsBlog(data)
            .then(res=> {
                this.fetchDataFromAPI()
            })
    }
    handleInsertArticle = (event) =>{
        let formInsertArticle = {...this.state.insertArticle}
        let timestamp = new Date().getTime()
        formInsertArticle['id'] = timestamp
        formInsertArticle[event.target.name] = event.target.value
        this.setState({
            insertArticle: formInsertArticle
        })
    }
    handleSave = () =>{
        API.postNewsBlog(this.state.insertArticle)
            .then(response=> {
                this.fetchDataFromAPI()
            })
    }
    render(){
        return (
            <div className='post-article'>
                <div className='form pb-2 border-bottom'>
                    <div className='form-group row'>
                        <label htmlFor='title' className='col-sm-2 col-form-label'>Title</label>
                        <div className='col-sm-10'>
                            <input type='text' className='form-control' id='title' name='title' onChange={this.handleInsertArticle}/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='body' className='col-sm-2 col-form-label'>Body</label>
                        <div className='col-sm-10'>
                            <textarea className='form-control' id='body' name='body' rows='3' onChange={this.handleInsertArticle}></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary' onClick={this.handleSave}>Save</button>
                </div>
                <h2>Article List total {this.state.listArticle.length}</h2>
                {
                    this.state.listArticle.map(article => {
                        return <Post key={article.id} idArticle = {article.id} title={article.title} content= {article.body} onDelete = {(id)=>this.handleDelete(id)}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;