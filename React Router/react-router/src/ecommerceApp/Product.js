import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect,
    useRouteMatch,
    useParams
} from 'react-router-dom'

export default function Product(){
    let {path, url} = useRouteMatch()
    return(
        <Router>
        <div className="flex">
            <div className="card">
                <h4>Mousepad HyperX</h4>
                <img src="https://picsum.photos/200" alt="Product Image"/>
                <p>Mousepad bagus</p>
                <Link className="btn-white text-center" to={url+"/1"}>View Detail</Link>
                <button className="btn-green">Add to Cart</button>
            </div>
            <div className="card">
                <h4>Headset HyperX</h4>
                <img src="https://picsum.photos/200" alt="Product Image"/>
                <p>Headset Bagus</p>
                <Link className="btn-white text-center" to={url+"/2"}>View Detail</Link>
                <button className="btn-green">Add to Cart</button>
            </div>
            <div className="card">
                <h4>Keyboard HyperX</h4>
                <img src="https://picsum.photos/200" alt="Product Image"/>
                <p>Keyboard Bagus</p>
                <Link className="btn-white text-center" to={url+"/3"}>View Detail</Link>
                <button className="btn-green">Add to Cart</button>
            </div>
        </div>
        <div>
            <Switch>
                <Route path={path+"/:id"}>
                    <DetailPage/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}
function DetailPage(){
    let {id} = useParams()
    let data = {
        name: "",
        stock: 0

    }
    switch(id){
        case "1":
            data = {
                name: "Mousepad HyperX",
                stock: 3
            }
            break;
        case "2":
            data = {
                name: "Headset HyperX",
                stock: 5
            }
            break;
        case "3":
            data = {
                name: "Keyboard HyperX",
                stock: 10
            }
            break;
    }
    return(
        <div className="center">
            <hr/>
            <h3>Product Details</h3>
            <p>
                Name : {data.name} <br/>
                Stock : {data.stock}
            </p>
        </div>
    )
}