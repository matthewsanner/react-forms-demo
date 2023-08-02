import { useState } from "react";

function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const updateLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleSubmit = () => {
    console.log(firstName, lastName);
  };
  return (
    <div>
      <label htmlFor="firstname">First name: </label>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={updateFirstName}
        id="firstname"
      />
      <label htmlFor="lastname">Last name: </label>
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={updateLastName}
        id="lastname"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SignupForm;
