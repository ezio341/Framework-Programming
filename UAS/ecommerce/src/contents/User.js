import React, {Component} from 'react'
import { Layout, Breadcrumb,  Form, Input, Button, Card, Alert, Image} from 'antd'
import {bindActionCreators} from 'redux'
import {authenticate, logout} from '../Actions/authAction'
import { connect } from 'react-redux';
import SignInSVG from '../Assets/Sign_in.svg'
import ProfileSVG from '../Assets/profile.svg'

const {Content} = Layout;



class Cont extends Component {
  state = {
    isLogged: false,
    user:null,
    LoginFail: false
  }
  componentDidMount(){
    this.setState({isLogged: this.props.auth, user: this.props.user})
  }
  LoginForm = ()=>{
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const onFinish = (values) => {
      this.props.authenticate(values.username, values.password)
      this.setState({isLogged: this.props.auth, user: this.props.user})
      if(!this.state.isLogged){
        this.setState({LoginFail: true})
      }
    }
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }
    const onCloseAlert = ()=>{
      this.setState({LoginFail: false})
    }
    return(
      <div id='form-block' style={{maxWidth: 400, margin:'auto', textAlign:'center'}}>
        <div id='alert-box' style={{minHeight:100, padding: '10px'}}>
          {this.state.LoginFail && <Alert message='Login Failed' description='Invalid Username/ Password' type='error' closable onClose={onCloseAlert}/>}
        </div>
        <Form id='form-root'
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='Username' id='input-username'/>
          </Form.Item>
      
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password' id='input-password'/>
          </Form.Item>
      
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    </div>
    )
  }
  Profile = () => {
    return(
      <div style={{paddingTop:10, paddingBottom:10}}>
        <Card title={'Welcome Back '+this.state.user.uname} style={{margin:30}} 
        extra={<Button type='danger' onClick={()=>{this.props.logout(); setTimeout(()=>this.setState({isLogged: this.props.auth}),500)}}>Logout</Button> }>
          <div className="site-layout-background" style={{minHeight: 250, backgroundImage: 'url('+ProfileSVG+')', backgroundRepeat: 'no-repeat', backgroundSize:'30%', backgroundPosition:'center'}}></div>
          
        </Card>
      </div>
    )
  }

  render() {

    return (
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Login</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{minHeight: 400, backgroundImage: 'url('+(!this.state.isLogged && SignInSVG)+')', backgroundRepeat: 'no-repeat', backgroundSize:'80%'}}>
            {this.state.isLogged === true? <this.Profile/> : <this.LoginForm/>}
          </div>
        </Content>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    user: state.auth.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authenticate,
    logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cont)

