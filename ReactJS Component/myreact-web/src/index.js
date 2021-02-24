import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test'
import reportWebVitals from './reportWebVitals';

const Hello = () => {
  return <p>Hello</p>
}
function HelloComponent() {
  return <p> HelloComponent</p>
}

class StatefulComponent extends React.Component{
  render(){
    return <p>Stateful Component</p>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
