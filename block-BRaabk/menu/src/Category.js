import React from "react";
import data from "./data.json";
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
    let categories = ["All", "Breakfast", "Lunch", "Dinner"];

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
        <Food />
      </>
    );
  }
}
export default Category;
