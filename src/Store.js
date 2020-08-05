import React from "react";
import IconSwitch from "./IconSwitch";
import { products } from "./products";
import CardsView from "./CardsView";
import ListView from "./ListView";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "view_list",
    };
  }

  onSwitch = (icon) => {
      this.setState(prevState => ({icon: prevState.icon == "view_list" ? 'view_module' : "view_list"}))
  };

  render() {
    return (
      <div>
        <IconSwitch
          icon={this.state.icon}
          onSwitch={this.onSwitch}
        />
        <div>
            {this.state.icon !==  "view_list" ? <CardsView cards={products}  /> : <ListView items={products} />}
        </div>
      </div>
    );
  }
}

export default Store;
