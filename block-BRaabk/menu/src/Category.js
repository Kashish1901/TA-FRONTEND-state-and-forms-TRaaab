import React from "react";

import Food from "./Food";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "all",
    };
  }
  handleClick = (category) => {
    this.setState({
      activeCategory: category,
    });
  };
  render() {
    let categories = ["all", "breakfast", "lunch", "shakes"];
    return (
      <>
        <ul className="categories">
          {categories.map((category) => (
            <li
              className={category === this.state.activeCategory ? "active" : ""}
              key={category}
              onClick={() => {
                this.handleClick(category);
              }}
            >
              {category}
            </li>
          ))}
        </ul>

        <Food category={this.state.activeCategory} />
      </>
    );
  }
}
export default Category;
