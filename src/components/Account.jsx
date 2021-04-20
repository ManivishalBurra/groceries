import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import {DropdownButton,Dropdown,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Navbar from './Navbar';
import {UserContext,UserCallBack} from './userStatus';
import {UserEmail} from './userEmail';
import Depth from './DepthSearch';


function Account(){
    const {callback,setCallback} = useContext(UserCallBack);
    const [credentials,setCredentials]=React.useState("");
    const {userEmail,setUserEmail} = useContext(UserEmail);
    const history = useHistory();
    const {loginStatus,setLoginStatus} = useContext(UserContext);

    if(!loginStatus){
        history.push("/martauth");
    }
useEffect(()=>{
    axios.post("https://pacific-coast-95024.herokuapp.com/getcreds",{
        email:userEmail,
    }).then(res=>{
      setCredentials(res.data);
    });
},[]);

useEffect(()=>{
    
    axios.get("/cartData").then((res)=>{
        setCallback(res.data.filter(function(obj){
            return obj.email===userEmail;
        }));
    });
    
},[]);

    
    
    function accountPost(list){
        console.log(list,"is the list");
       return <Depth 
            key={list._id} 
            image={list.image} 
            order={list.order} 
            price={list.price}
            quantity={list.quantity}
            location={list.location}
            id={list._id}
            page="account"
        />
    }
    

    function HandleClick(event){
        axios.post("https://pacific-coast-95024.herokuapp.com/updateUser",{
            user:event.target.innerHTML,
            email:userEmail
        }).then(res=>{
            if(res.data){
                setCredentials({...credentials,user:event.target.innerHTML});
                alert(`vola!! you are viewing as ${event.target.innerHTML}`);
            }
            else{
                alert(`couldnt access ${event.target.innerHTML}`);
            }
        })
    }

    function Logout(){
        setLoginStatus(false);
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
        <p>Viewing as:</p>
        </div>
        <div className="col-lg-8">
        <p>{credentials.username}</p>
        <p>{credentials.email}</p>
        <p>{credentials.googleId}</p>
        <p>{credentials.user}</p>
        </div>
        </div>
        <div className="row" style={{marginTop:"50px"}}>
        <div className="col-lg-6">
        <DropdownButton id="dropdown-basic-button" title="View as">
        <Dropdown.Item href="" onClick={HandleClick}>User</Dropdown.Item>
        <Dropdown.Item href="" onClick={HandleClick}>Retailer</Dropdown.Item>
        <Dropdown.Item href="" onClick={HandleClick}>Wholesaler</Dropdown.Item>
        <Dropdown.Item href="" onClick={HandleClick}>Delivery boy</Dropdown.Item>
        </DropdownButton>
        </div>
        <div className="col-lg-6">
        <Button variant="dark" onClick={Logout}>Logout</Button>
        </div>
        </div>

        {credentials.user!=="User" &&
        <div style={{marginTop:"90px"}}>
        <h2 style={{marginBottom:"30px"}}>Your Business bucket:</h2>
             {callback.map(accountPost)}
             </div>
        }
        
        </div>

        </div>
    );


}
export default Account;