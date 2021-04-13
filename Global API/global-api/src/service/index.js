import GetAPI from './Get'
import PostAPI from './Post'
import DeleteAPI from './Delete'

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc')
const postNewsBlog = (data) => PostAPI('posts', data)
const deleteNewsBlog = (data) => DeleteAPI('posts', data)

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API