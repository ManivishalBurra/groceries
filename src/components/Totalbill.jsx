import React from 'react';


function Close(){
    const x=document.querySelectorAll('.bill-main');
    x[0].style.display="none";
}

function Total(props){

    var bill=0;
    if(props.billdata.length!==0){
        
        props.billdata.forEach(function(element){
            bill=Number(element.price)+bill;
        });
    }

    return(
        <div>
        <hr/>
        <div className="cart-header center">
        
              <h6>Total: {bill}Rs</h6>
              <div>
                  
                  <button onClick={Close} style={{color:"black",backgroundColor:"white"}}> Cancel </button>&nbsp;&nbsp;
                  <button> Pay now </button>
              </div>
            </div>
        
        
        </div>
    );
}
export default Total;