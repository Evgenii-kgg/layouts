import React from "react";
import Icon from '@material-ui/core/Icon';

function IconSwitch(props) {
  return (
    // <div className= 'classes.root'>
    //     <button  onClick={() => props.onSwitch(props.icon)}></button>
    // </div>
    <div>
    <button class="material-icons" onClick={() => props.onSwitch(props.icon)} >{props.icon}</button>
    </div>
  );
}

export default IconSwitch;
