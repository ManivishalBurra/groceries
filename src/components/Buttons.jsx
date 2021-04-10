import React from 'react';

function Buttons(props){

    return(
        <div className={props.classname}>
        <a href={props.pathref}><button name={props.name} value={props.value}>{props.buy}</button></a>
        </div>
    );
}
export default Buttons;