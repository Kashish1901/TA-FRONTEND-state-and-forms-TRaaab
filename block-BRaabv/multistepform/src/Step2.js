function Step2(props) {
  if (props.currentState !== 2) {
    return null;
  } else {
    return (
      <>
        <h1>Message</h1>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="message">
            Message
            <textarea
              rows="6"
              columns="16"
              value={props.message}
              placeholder="Message......"
              onChange={props.hanldeChange}
            />
          </label>
          <div className="flex">
            <div className="flex">
              <input type="checkbox" className="cirlce" />
              <label className="">The number One choice</label>
            </div>
            <div className="flex">
              <input type="checkbox" className="cirlce" />
              <label className="flex">The number two choice</label>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Step2;
