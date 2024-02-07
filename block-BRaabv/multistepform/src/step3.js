function Step3(props) {
  if (props.currentState !== 3) {
    return null;
  } else {
    return (
      <>
        <h1>Checkbox</h1>
        <div className="flex">
          <input type="" placeholder="Male..." className="gender" />
          <input type="" placeholder="Female" className="gender" />
        </div>
        <div className="start">
          <div>
            <label>
              <input type="checkbox" />I want to add this option
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Let me click on this checkbox and choose some cool stuff
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default Step3;
