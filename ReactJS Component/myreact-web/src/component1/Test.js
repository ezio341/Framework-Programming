import React from 'react';

class Test extends React.Component{
    constructor(props){
      super(props);
      this.state = {hello : "World"};
    }
    componentWillMount(){
      console.log("component will mount");
    }
    componentDidMount(){
      console.log("componentDidMount()");
    }
    changeState(){
      this.setState({ hello : "Geek!" });
    } 
  
    render(){
      return(
        <div>
          <h1>Geeks for geeks, Hello {this.state.hello}</h1>
          <h2><a onClick={this.changeState.bind(this)}>Press here</a></h2>
        </div>
      );
    }
    shouldComponentUpdate(nextProps, nextState){
      console.log("should component update");
      return true;
    }
    componentWillUpdate(){
      console.log("component will update");
    }
    componentDidUpdate(){
      console.log("component did update");
    }
  }
  export default Test;