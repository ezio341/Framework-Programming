import GetAPI from './Get'
import PostAPI from './Post'
import DeleteAPI from './Delete'

const getStudent = () => GetAPI('student?_sort=id&_order=desc')
const postStudent = (data) => PostAPI('student', data)
const deleteStudent = (data) => DeleteAPI('student', data)

const API = {
    getStudent,
    postStudent,
    deleteStudent
}

export default API