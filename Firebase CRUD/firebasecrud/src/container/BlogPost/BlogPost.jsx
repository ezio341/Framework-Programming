import React, {Component} from 'react';
import './BlogPost.css';
import Post from '../../component/BlogPost/Post'
import firebaseConfig from '../../firebase/config'
import firebase from 'firebase'

class BlogPost extends Component{
    constructor(props){
        super(props)
        firebase.initializeApp(firebaseConfig)
        this.state = {
            listArticle:[]
        }
    }

    fetchDataFromAPI = () =>{
        let ref = firebase.database().ref('/')
        ref.on('value', snapshot => {
            const state = snapshot.val()
            this.setState(state)
        })
    }
    saveDataToServerAPI = () => {
        firebase.database()
            .ref('/')
            .set(this.state)
    }

    componentDidMount(){
        this.fetchDataFromAPI()
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state){
            this.saveDataToServerAPI()
        }
    }

    handleDelete = (idArticle) => {
        const {listArticle} = this.state
        const newState = listArticle.filter(data => {
            return data.uid !== idArticle
        })
        this.setState({listArticle: newState})
    }

    handleSave = (event) =>{
        let title = this.refs.articleTitle.value
        let body = this.refs.articleBody.value
        let uid = this.refs.uid.value

        if(uid && title && body){
            const {listArticle} = this.state
            const articleIndex = listArticle.findIndex(data=> {
                return data.uid === uid
            })
            listArticle[articleIndex].title = title
            listArticle[articleIndex].body = body
            this.setState({listArticle})
        } else if(title && body){
            const uid = new Date().getTime().toString()
            const {listArticle} = this.state
            listArticle.push({uid, title, body})
            this.setState({listArticle})
        }
        this.refs.articleTitle.value = ''
        this.refs.articleBody.value = ''
        this.refs.uid.value = ''
    }
    render(){
        return (
            <div className='post-article'>
                <div className='form pb-2 border-bottom'>
                    <div className='form-group row'>
                        <label htmlFor='title' className='col-sm-2 col-form-label'>Title</label>
                        <div className='col-sm-10'>
                            <input type='text' className='form-control' id='title' name='title' ref='articleTitle'/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='body' className='col-sm-2 col-form-label'>Body</label>
                        <div className='col-sm-10'>
                            <textarea className='form-control' id='body' name='body' rows='3' ref='articleBody'></textarea>
                        </div>
                    </div>
                    <input type='hidden' name='uid' ref='uid'/>
                    <button type='submit' className='btn btn-primary' onClick={this.handleSave}>Save</button>
                </div>
                <h2>Article List total {this.state.listArticle.length}</h2>
                {
                    this.state.listArticle.map(article => {
                        return <Post key={article.uid} idArticle = {article.uid} title={article.title} content= {article.body} onDelete = {(id)=>this.handleDelete(id)}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;