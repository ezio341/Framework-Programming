import React, {Component} from 'react'
import CreateTodo from './containers/CreateToDo'
import Table from './containers/Table'


export default class App extends Component{
    render(){
        return(
            <div align="center">
                <CreateTodo/>
                <Table/>
            </div>
        )
    }
}