import React from 'react';

function Buttons(props){
    return(
        <div className={props.classname}>
        <button>{props.buy}</button>
        </div>
    );
}
export default Buttons;