function Step1(props) {
  if (props.currentState !== 1) {
    return null;
  } else {
    return (
      <>
        <h1>Sign Up</h1>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            placeholder="Enter your First Name"
            value={props.firstname}
            name="firstname"
            onChange={props.handleChange}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            placeholder="Enter your Last Name"
            value={props.lastname}
            name="lastname"
            onChange={props.handleChange}
          />
          <label htmlFor="dateOfBirth">Date-Of-Birth</label>
          <input
            type="date"
            value={props.dateOfBirth}
            name="dateOfBirth"
            onChange={props.handleChange}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={props.email}
            name="email"
            onChange={props.handleChange}
          />
          <label htmlFor="address"> Address</label>
          <input
            type="text"
            placeholder="Enter your Address"
            value={props.address}
            onChange={props.handleChange}
            name="address"
          />
        </form>
      </>
    );
  }
}

export default Step1;
