import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import {Cartdata,UserCallBack} from './userStatus';
import {UserEmail} from './userEmail';
function Depth(props){
    const {data,setData} = useContext(Cartdata);
    const {callback,setCallback} = useContext(UserCallBack);
    const {userEmail,setUserEmail} = useContext(UserEmail);

    console.log(props,"is the props");
    function HandleClick(e){
        const x=data.filter(function(obj){
            return obj.id===props.id
        });
        
        if(x.length===0)
        {
        setData([...data,{
            key:props.id,
            img:props.image,
            price:props.price,
            itemname:props.order,
            quantity:props.quantity,
            id:props.id
        }]);
        }
        else{
            const quantity = Number(props.quantity) + Number(x[0].quantity);
            const price = Number(props.price)+Number(x[0].price);
            const index=data.findIndex(function(element){
                return element===x[0];
            });
            data[index].quantity = quantity.toString();
            data[index].price = price;
            setData([...data]);
        }
        if(e.target.innerHTML==="Buy now"){
            var y=document.querySelectorAll(".bill-main");
            y[0].style.display="flex";
        }
        if(e.target.innerHTML==="Delete"){
            console.log("entered");
            axios.post("https://pacific-coast-95024.herokuapp.com/deleteItems",{
                id:props.id,email:userEmail
            }).then(res=>{
                
                setCallback(res.data);

            })
        }
     }
    


    return (
        <div className="container">
        <div className="row DepthSearch-main ">
        <div className="col-lg-3 DepthSearch-image">
        <img src={props.image}/>
        </div>
        <div className="col-lg-6 depth-matter">
        <div style={{color:"black"}}>
        <p>Name: {props.order}</p>
        <p>Price: {props.price}Rs</p>
        <p>Quantity: {props.quantity}Pcs</p>
        <p>Location: {props.location}</p>
        </div>
        </div>
        {props.page==="innermart" &&
        <div className="col-lg-3 center column depth-button">
        
         <button onClick={HandleClick} >add to cart</button>   
         <button onClick={HandleClick} style={{background: "black",color: "white"}}>Buy now</button>   
        
        </div>
        }
        {props.page==="account" &&
        <div className="col-lg-3 center column depth-button">
        <button onClick={HandleClick} style={{background: "black",color: "white"}}>Delete</button>   
        </div>
        }
        </div>
        </div>
    );   
}

export default Depth;