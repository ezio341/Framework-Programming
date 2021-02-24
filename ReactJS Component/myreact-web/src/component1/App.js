import React, {Component} from 'react';
// import Header from './Header' ;
import Footer from './Footer';
import List from './List';

class App extends Component{
    render(){
        return(
            <div>
                {/* <Header> */}
                    <h1>Component from class APP</h1>
                    <List/>
                    <Footer title='Footer Page' name='Arga'/>
                {/* </Header> */}
            </div>
        );
    }
}

export default App;