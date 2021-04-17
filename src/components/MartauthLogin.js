import React,{useEffect} from 'react';
import GoogleLogin from "react-google-login";
import {useHistory} from "react-router-dom";
import axios from 'axios';

function Martauth(){
    const [loginStatus,setLoginStatus] = React.useState(false);
    const [image,setImage]=React.useState("");
    const [username,setName] = React.useState("");
    const [password,setPassword]= React.useState("");
    const [typePassword,setTypePassword]=React.useState("");
    const history = useHistory();

    function handleChange(event){
        setTypePassword(event.target.value);
    }

    function handleClick(){
        if(password.toString()===typePassword.toString())
        {
            axios.post("https://pacific-coast-95024.herokuapp.com/loginStatusUpdate",{
                status:true,
            });
            history.push("/mart");
        }
        else{
            alert("verification OTP compromised!! please try again");
            setLoginStatus(false);
        }
    }


    const responseSuccessGoogle=(response)=>{        
        axios.post("https://pacific-coast-95024.herokuapp.com/login",{
            email:response.profileObj.email,
        }).then(res=>{
            if(res.data!=="fail"){
                setPassword(res.data);
                setLoginStatus(true);
                setImage(response.profileObj.imageUrl);
                setName(response.profileObj.name);
            }
            else{
                alert("user never exist!");

            }
        });
    }
    const responseErrorGoogle=(response)=>{
        console.log(response);
    }
    return (
        <div className="register-main center">
        <div className="registerLogin center column">
        
        {loginStatus?
            <div className="center column "><img src={image} alt="" width="auto" style={{borderRadius:"100%",height:"70px",marginBottom:"20px"}}/>  <p className="username">Hello, {username}!!</p></div>:
            <div className="center column"><img src="images/fresh.png" alt="" width="auto" height="40" />  <p>Groceries</p></div>
         }
        
        <div className="center column">
        {!loginStatus &&  
        <GoogleLogin
         clientId="839232716235-qe6mjhv8m7b0ke4g2jvcjnh994vsh4fo.apps.googleusercontent.com"
         buttonText="Login"
         onSuccess={responseSuccessGoogle}
         onFailure={responseErrorGoogle}
         cookiePolicy={"single_host_origin"}
        />
        }
        {
         loginStatus && 
         <div className="center column log">
            <p>we have sent an OTP to your email</p>
           <input type="text" placeholder="verification OTP" onChange={handleChange} />
           <button className="loginButton" onClick={handleClick}>Log in</button>
         </div>   
        }
        </div>
        </div>
        </div>
    );
}
export default Martauth;
