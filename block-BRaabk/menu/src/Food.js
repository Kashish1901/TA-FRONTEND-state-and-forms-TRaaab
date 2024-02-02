import Foods from "./data.json";

function Food() {
  return (
    <>
      <ul className="cards">
        {Foods.map((food) => {
          return (
            <li className="flex">
              <div className="image">
                <img src={food.img} alt={food.img} />
              </div>
              <div className="align">
                <h3 className="flex">
                  <div>{food.title}</div>${food.price}
                </h3>
                <div className="line"></div>
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
