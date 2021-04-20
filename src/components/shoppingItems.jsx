import axios from 'axios';
import React, { useContext } from 'react';
import Buttons from './Buttons';
import {UserCallBack,Cartdata} from './userStatus';
import {useHistory} from "react-router-dom";
function Shoppingitems(props){
    const history = useHistory();
    const {callback,setCallback} = useContext(UserCallBack);
      
    function HandleClick(e){
      axios.post("https://pacific-coast-95024.herokuapp.com/queryByOrder",{
        order:props.order
      }).then(res=>{
        setCallback(res.data);
        history.push("/innermart")
      })
    }
    return (
            <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="center column item-card" id={props.classes} >
            <div className="items center" onClick={HandleClick}>
                <img src={props.image} alt="shoppingitems.jpg"/>
                <Buttons classname="order order-abs center stat-order shopbutton" buy={props.order} /> 
            </div>
            <div className="center Boi">
            <div className="Buy2 Buy order center Coi addcart">
            <button onClick={HandleClick} name={props.image} value={props.order} >{props.buy}</button>
            </div>
            <div className="Buy order center Coi buynow">
            <button onClick={HandleClick} name={props.image} value={props.order} >Buy now</button>
            </div>
            </div>
            </div>
            </div>
            );
}
export default Shoppingitems;