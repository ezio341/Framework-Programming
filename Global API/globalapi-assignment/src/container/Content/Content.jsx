import React, {Component} from 'react';
import './Content.css';
import Post from '../../component/Student'
import API from '../../service/index'

class Content extends Component{
    state = {
        listStudent:[],
        insertStudent: {
            userId:1,
            id: 1,
            title: "",
            body: ""
        }
    }

    fetchDataFromAPI = () =>{
        API.getStudent().then(result => {
            this.setState({
                listStudent: result
            })
        })
    }

    componentDidMount(){
        this.fetchDataFromAPI()
    }

    handleDelete = (data) => {
        API.deleteStudent(data)
            .then(res=> {
                this.fetchDataFromAPI()
            })
    }
    handleinsertStudent = (event) =>{
        let forminsertStudent = {...this.state.insertStudent}
        let timestamp = new Date().getTime()
        forminsertStudent['id'] = timestamp
        forminsertStudent[event.target.name] = event.target.value
        this.setState({
            insertStudent: forminsertStudent
        })
    }
    handleSave = () =>{
        API.postStudent(this.state.insertStudent)
            .then(response=> {
                this.fetchDataFromAPI()
            })
    }
    render(){
        return (
            <div className='post-article'>
                <div className='form pb-2 border-bottom'>
                    <div className='form-group row'>
                        <label htmlFor='NIM' className='col-sm-2 col-form-label'>NIM</label>
                        <div className='col-sm-10'>
                            <input type='number' className='form-control' id='NIM' name='NIM' onChange={this.handleinsertStudent}/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='name' className='col-sm-2 col-form-label'>Name</label>
                        <div className='col-sm-10'>
                            <input type='text' className='form-control' id='name' name='name' onChange={this.handleinsertStudent}/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='address' className='col-sm-2 col-form-label'>Address</label>
                        <div className='col-sm-10'>
                            <input type='text' className='form-control' id='address' name='address' onChange={this.handleinsertStudent}/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='phone' className='col-sm-2 col-form-label'>Phone</label>
                        <div className='col-sm-10'>
                            <input type='number' className='form-control' id='phone' name='phone' onChange={this.handleinsertStudent}/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='year' className='col-sm-2 col-form-label'>Year</label>
                        <div className='col-sm-10'>
                            <input type='number' className='form-control' id='year' name='year' onChange={this.handleinsertStudent}/>
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor='status' className='col-sm-2 col-form-label'>Status</label>
                        <div className='col-sm-10'>
                            <input type='text' className='form-control' id='status' name='status' onChange={this.handleinsertStudent}/>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary' onClick={this.handleSave}>Save</button>
                </div>
                <h2>Student List Total: {this.state.listStudent.length}</h2>
                {
                    this.state.listStudent.map(student => {
                        return <Post key={student.id} idstd={student.id} nim = {student.NIM} name={student.name} address = {student.address} phone ={student.phone} year={student.year} status={student.status} onDelete = {(id)=>this.handleDelete(id)}/>
                    })
                }
            </div>
        )
    }
}

export default Content;