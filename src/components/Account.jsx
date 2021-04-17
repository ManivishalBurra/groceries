import axios from 'axios';
import React from 'react';
import {DropdownButton,Dropdown,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Navbar from './Navbar';
function Account(){
    const [credentials,setCredentials]=React.useState("");
    const history = useHistory();
    axios.get("https://pacific-coast-95024.herokuapp.com/loginStatus").then((res)=>{
        console.log(res.data);
        if(!res.data){
            history.push("/martauth");
        }
    })
    axios.get("https://pacific-coast-95024.herokuapp.com/accountCreds").then((res)=>{
        console.log(res.data);
        setCredentials(res.data);
    })
    function Logout(){
        axios.post("https://pacific-coast-95024.herokuapp.com/loginStatusUpdate",{
            status:false
        });
        history.push("/");
    }
    return(
        <div>
        <Navbar />
        <div className="container account-main">
        <div className="row">
        <div className="col-lg-8" style={{marginTop:"auto",marginBottom:"auto"}}>
        <h2>Hello, {credentials.username}</h2>
        <h6>{credentials.email}</h6>
        </div>
        <div className="col-lg-4 account-image">
        <img src={credentials.image}></img>
        </div>
        </div>
        <div className="row" style={{marginTop:"50px"}}>
        <div className="col-lg-4">
        <p>Name:</p>
        <p>Email:</p>
        <p>googleId:</p>
        </div>
        <div className="col-lg-8">
        <p>{credentials.username}</p>
        <p>{credentials.email}</p>
        <p>{credentials.googleId}</p>
        </div>
        </div>
        <div className="row" style={{marginTop:"50px"}}>
        <div className="col-lg-6">
        <DropdownButton id="dropdown-basic-button" title="View as">
        <Dropdown.Item href="#/action-1">Customer</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Retailer</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Wholesaler</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Delivery</Dropdown.Item>
        </DropdownButton>
        </div>
        <div className="col-lg-6">
        <Button variant="dark" onClick={Logout}>Logout</Button>
        </div>
        </div>
        </div>
        </div>
    );


}
export default Account;