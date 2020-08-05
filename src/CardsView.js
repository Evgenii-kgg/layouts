import React from "react";
import ShopCard from "./ShopCard";

function CardView(props) {
  console.log('showCards', props);
  
  return (
    <div style={{ columnCount: "3" }}>
      {props.cards.map((card) => (
        <ShopCard card={card}/>
      ))}
    </div>
  );
}

export default CardView;
