import foods from "./data.json";

function Food(props) {
  const filteredFood =
    props.category === "all"
      ? foods
      : foods.filter((food) => food.category === props.category);

  console.log(filteredFood);
  return (
    <>
      <ul className="cards">
        {filteredFood.map((food) => {
          return (
            <li className="flex" key={food.id}>
              <div className="align">
                <h3 className="flex">
                  <div>{food.title}</div>${food.price}
                </h3>
                <hr></hr>
                <p>{food.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Food;
