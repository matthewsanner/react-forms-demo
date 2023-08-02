import { useState } from "react";

function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });
  const handleChange = (event) => {
    const changedField = event.target.name;
    const newValue = event.target.value;
    setFormData((currData) => {
      // Commented out syntax works but below is same but cleaner
      // currData[changedField] = newValue;
      // return { ...currData };
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };

  return (
    <div>
      <label htmlFor="firstname">First name: </label>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        id="firstname"
        name="firstName"
      />
      <label htmlFor="lastname">Last name: </label>
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
        name="lastName"
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </div>
  );
}

export default BetterSignupForm;
