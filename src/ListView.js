
import React from 'react';
import logo from './logo.svg';
import ShopItem from './ShopItem'



function ListView(props) {
  console.log('showList', props);
  
  return (
    <div>
      {props.items.map((item) => (
        <ShopItem card={item}/>
      ))}
    </div>
  )
}

export default ListView;
