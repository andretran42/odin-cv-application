import { useState } from "react";

const GenInfo = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "Email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
    }
    e.preventDefault();
  };

  return (
    <div class="general_info form_div">
      <div class="first_last">
        <div class="input_container">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="First"
            id="firstName"
            value={firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="input_container">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last"
            id="lastName"
            value={lastName}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="input_container">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="Email"
          placeHolder="firstlast@example.com"
          value={email}
          onChange={handleChange}
        ></input>
      </div>
      <div className="input_container">
        <label htmlFor="phoneNumber">Phone #:</label>
        <input
          type="text"
          name="phoneNumber"
          placeHolder="###-###-####"
          value={phoneNumber}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default GenInfo;
