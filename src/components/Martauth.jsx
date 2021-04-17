import React,{useEffect} from 'react';
import GoogleLogin from "react-google-login";
import {useHistory} from "react-router-dom";
import axios from 'axios';

function Martauth(){
    useEffect(()=>{
        axios.get("https://pacific-coast-95024.herokuapp.com/loginStatus").then((res)=>{
            if(res.data){
                history.push("/mart");
            }
        })
    })
    const history = useHistory();
    function MyFunction(){
        history.push("/martauthLogin")
    }
    const responseSuccessGoogle=(response)=>{        
        axios.post("https://pacific-coast-95024.herokuapp.com/googlelogin",{
            name:response.profileObj.name,
            image:response.profileObj.imageUrl,
            email:response.profileObj.email,
            googleId:response.profileObj.googleId
        }).then(res=>{
            
            if(res.data==="user")
            {
                alert("this user already exists");
            }
            else{
                history.push("/martauthLogin");
            }
        })
    }    
    const responseErrorGoogle=(response)=>{
        console.log(response);
    }
    return (
        <div className="register-main center">
        <div className="registerLogin center column">
        <img src="images/fresh.png" alt="" width="auto" height="40" />  <p>Groceries.me</p>
        <div className="center column">
        <GoogleLogin
         clientId="839232716235-qe6mjhv8m7b0ke4g2jvcjnh994vsh4fo.apps.googleusercontent.com"
         buttonText="Sign-up or Register"
         onSuccess={responseSuccessGoogle}
         onFailure={responseErrorGoogle}
         cookiePolicy={"single_host_origin"}
        />
        </div>
        <hr/>
        <button onClick={MyFunction} >Login using Gmail</button>
        </div>
        </div>
    );
}
export default Martauth;