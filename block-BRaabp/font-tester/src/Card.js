function Cards(props) {
  return (
    <>
      <div className="cards ">
        <div className="card one">
          <h1>{props.text}</h1>
        </div>
        <div className="card two">
          <h1>{props.text}</h1>
        </div>
        <div className="card three">
          <h1>{props.text}</h1>
        </div>
        <div className="card four">
          <h1>{props.text}</h1>
        </div>
        <div className="card five">
          <h1>{props.text}</h1>
        </div>
        <div className="card six">
          <h1> {props.text}</h1>
        </div>
      </div>
    </>
  );
}

export default Cards;
