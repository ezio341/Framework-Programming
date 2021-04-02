import React, {Component} from 'react'
import { Layout, Breadcrumb, Card, Image, Button, List, Modal, Skeleton, Alert} from 'antd'
import {
    StarOutlined
} from '@ant-design/icons'
import {addCart, updateCart} from '../Actions/cartAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Search from 'antd/lib/input/Search'
import EmptySVG from '../Assets/empty.svg'
import { Link } from 'react-router-dom'

const {Content} = Layout;


class Cont extends Component {
    state = {
        auth: false,
        products:[],
        loading:true,
        descRendered: false,
        visible: false,
        modalItem:[],
        productFilter: [],
        isCartAvailable: false,
        isAddCartSuccess: false,
        addCartSuccessMsg: '',
        cartAvailableMsg:'',
        isModalLoginVisible: false
    }
    hideModal = () => {
        this.setState({visible:false})
    }
    showModal = (item) => {
        this.setState({
            visible:true,
            modalItem:item
        }) 
    }
    takeProducts = () => {
        fetch('http://localhost:3030/products')
            .then(response => response.json())
            .then(jsonfromapi =>{
                this.setState({
                    products: jsonfromapi,
                    productFilter: jsonfromapi,
                    loading: false
                })
            })
    }
    componentDidMount(){
        this.takeProducts()
        if(this.props.auth){
            this.setState({auth: this.props.auth})
        }
    }
    addCart(item){
        if(this.state.auth){
            let cart = []
            fetch('http://localhost:3031/cart?productid='+item.id)
                .then(response => response.json())
                .then(res => {
                    let foundCart = false
                    let cart = {}
                    if(res){
                        res.map(item=>{
                            if(item){
                                foundCart = true
                                cart = item
                            }
                        })
                    }
                    if(foundCart){
                        this.setState({isCartAvailable: true, cartAvailableMsg: '\"'+item.name +'\" is already in your cart'})
                    }else{
                        this.props.addCart(item)
                        this.setState({isAddCartSuccess: true, addCartSuccessMsg:'\"'+item.name +'\" is added to your cart'})
                    }
                })
        }else{
            this.setState({isModalLoginVisible: true})
            console.log(window.location)
        }
    }

    search(str){
        const productFilter = this.state.products.filter(product=>{
            return product.name.toLowerCase().includes(str)
        })
        this.setState({productFilter: productFilter})
    }

    GotoLogin = () =>{
        const {isModalLoginVisible, auth} = this.state
        const handleOk = () => {
            this.setState({isModalLoginVisible: false})
        }
        const handleCancel = () => {
            this.setState({isModalLoginVisible: false})
        }
        return (
            <div>
            <Modal style={{zIndex: 5}} title="You are not login yet" visible={isModalLoginVisible} onOk={handleOk} onCancel={handleCancel} footer={[
                <Button key="back" onClick={handleCancel}>
                Back
                </Button>,
                <Link key='link' to='/User' style={{marginLeft:'10px'}}><Button key="Auth" type='primary' onClick={handleOk}>
                Login
                </Button></Link>
            ]}>
                <p>Go to Login Page?</p>
            </Modal>
            </div>
        )
    }

    RenderProducts = (item)=> {
        return(
            <Card title={item.name} hoverable style={{cursor:'default'}}>
                <div style={{textAlign:'center'}}>
                    <Image src={item.img} height='100px' width='100px' onClick={()=>this.showModal(item)} preview={false} style={{cursor:'pointer'}} ></Image>
                </div>
                <p style={{textAlign: 'right', fontSize:11}}>Stock: {item.stock}</p>
                <p style={{fontSize: 13, textOverflow:'ellipsis', overflow: 'hidden', maxHeight:'100px', cursor:'pointer'}} onClick={()=>this.showModal(item)}>{item.desc && item.desc.substring(0, 50)+'...'}</p>
                <h4>Rp {item.price.toLocaleString('id-ID',{minimumFractionDigits:2, maximumFractionDigits:2})}</h4>
                <StarOutlined/> {item.rate}
                <div style={{textAlign:'right'}}>
                    <Button type='ghost'  onClick={()=>this.addCart(item)} disabled={((item.stock > 0))? false: true}>Add to Cart</Button>
                </div>
            </Card>
        )
    }

    ProductDetail = (Item) =>{
        const {modalItem, visible, auth} = this.state
        return (   
            <Modal title={Item.name} visible={visible} onCancel={this.hideModal} onOk={()=>{this.props.addCart(Item); setTimeout(this.hideModal, 1000)}} okText='Add To Cart' 
                style={{zIndex:2}}
                footer={[
                    <Button key='cancel' type='ghost'  onClick={this.hideModal}>Back</Button>,
                    <Button key='ok' type='primary'  onClick={()=>this.addCart(Item)} disabled={((Item.stock !== 0))? false: true} >Add to Cart</Button>]}>
                <div style={{textAlign:'center'}}>
                    <Image src={Item.img} height='auto' width='auto' style={{maxHeight:200, maxWidth:200}}></Image>
                </div>
                <div style={{textAlign:'right'}}><p>Stock: {Item.stock}</p></div>
                <p>{Item.desc}</p>
                <h4>Rp {Item.price!==undefined && Item.price.toLocaleString('id-ID', {minimumFractionDigits:2, maximumFractionDigits:2})}</h4>
                <StarOutlined/> {Item.rate}
            </Modal>
        )
    }
    onCloseAlert = (e)=>{
        this.setState({isCartAvailable: false, isAddCartSuccess: false, cartAvailableMsg:'', addCartSuccessMsg:''})
    }
    
    render() {
        const {modalItem, loading, products, productFilter, cartAvailableMsg, isCartAvailable, isAddCartSuccess, addCartSuccessMsg} = this.state
        return (
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Shop</Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 400, backgroundImage: 'url('+(!loading&&(products.length ===0) && EmptySVG)+')', backgroundRepeat: 'no-repeat', backgroundSize:'35%', backgroundPosition:'center'}}>
                <div style={{textAlign:'center', padding: '10px'}}>
                    {!(products.length ===0) && <Search placeholder="Search" allowClear style={{ minWidth:100, maxWidth:300, verticalAlign:'middle', marginRight:50 }} onSearch={value=> this.search(value)}/>}
                </div>
                {isCartAvailable && <Alert type='warning' showIcon message={cartAvailableMsg} closable onClose={this.onCloseAlert}/>}
                {isAddCartSuccess && <Alert type='success' showIcon message={addCartSuccessMsg} closable onClose={this.onCloseAlert}/>}
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 4,
                        xxl: 5,
                        }}
                    dataSource={productFilter}
                    renderItem={
                        item => (
                            <div>
                                <List.Item key={item.id} >
                                    <Skeleton loading={loading} active>
                                        <this.RenderProducts {...item}/>
                                    </Skeleton>
                                </List.Item>
                            </div>
                        )
                    } style={{marginTop:20}}/>
                <this.ProductDetail {...modalItem}/>
                <this.GotoLogin/>
            </div>
            </Content>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        auth: state.auth.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        addCart, updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cont)