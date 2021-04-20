import React, { useCallback, useContext, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import Navbar from './Navbar';
import Shopping from './shopping';
import Buttons from './Buttons';
import {cartList} from '../cartlist'
import Cart from './Cart';
import {UserContext,Cartdata} from './userStatus';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import axios from 'axios';
import { UserEmail } from './userEmail';
function Mart(){
    const [value,setValue]=React.useState({
        image:"",
        order:"",
        price:"",
        quantity:"",
        catagory:"",
        location:""
    }); 
    

    const [credentials,setCredentials]=React.useState("");
    const {userEmail,setUserEmail} = useContext(UserEmail);
    const history = useHistory();

    const {loginStatus,SetLoginStatus} = useContext(UserContext);
useEffect(()=>{
    axios.post("https://pacific-coast-95024.herokuapp.com/getcreds",{
        email:userEmail,
    }).then((res)=>{
        setCredentials(res.data);
    });
    
},[])

    function HandleOpen(){
        var x=document.querySelectorAll(".form-main");
        x[0].style.display="flex";
    }
    function HandleClose(){
        var x=document.querySelectorAll(".form-main");
        x[0].style.display="none";
    }
    function HandleSubmit(e){

        axios.post("https://pacific-coast-95024.herokuapp.com/cartData",{
            ...value,email:userEmail
        }).then(res=>{
            if(res.data){
                alert("added to the grocery store!! thanks for the deal,hope you see high profits")
            }
        })
        e.preventDefault();
    }

    if(!loginStatus){
        history.push("/martauth");
    }
    const {data,setData}=useContext(Cartdata);

    return(
        <div>
        <Navbar />
        <div className="shopping-page">
        {credentials.user!=="User" &&
        <button className="filter retailer-add" onClick={HandleOpen}>+</button>
        }
        <div className="form-main center backdrop-blur">
        <div className="close-form">
         <button onClick={HandleClose}>X</button>
        </div>
        <form className="center column" onSubmit={HandleSubmit}>
           <input 
           type="text" 
           placeholder="imageURL" 
           onChange={(e)=>{setValue({...value,image:e.target.value})}} 
           value={value.image}

           />
           <input type="text" 
           placeholder="Name of the item" 
           onChange={(e)=>{setValue({...value,order:e.target.value})}} 
           value={value.order}

            />
           <input 
           type="number" 
           placeholder="price" 
           onChange={(e)=>{setValue({...value,price:e.target.value})}}  
           value={value.price}

           />
           <input 
           type="text" 
           placeholder="quantity" 
           onChange={(e)=>{setValue({...value,quantity:e.target.value})}} 
           value={value.quantity}

           />
           <input 
           type="text" 
           placeholder="Catagory like fruits,vegetables,dairy...." 
           onChange={(e)=>{setValue({...value,catagory:e.target.value})}} 
           value={value.catagory}

           />
           <input 
           type="text" 
           placeholder="Location of your shop" 
           onChange={(e)=>{setValue({...value,location:e.target.value})}} 
           value={value.location}

           />
           <input type="mail" value={userEmail}/>
           <button type="submit" className="loginButton">Submit</button>
        </form>
        </div>
        <Shopping/>
        <Cart classname="cart backdrop-blur-white" />
        <Cart classname="center bill-main backdrop-blur" subclass="billbox" />
        <button className="filter" ><i class="fas fa-filter"></i></button>
        <Buttons classname="popup" buy="added to cart"/>
        </div>
        </div>
    );
}

export default Mart;