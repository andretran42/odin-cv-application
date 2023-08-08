import { useState } from "react";

const GenInfo = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
          ></input>
        </div>
      </div>
      <div className="input_container">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="firstName"
          placeHolder="firstlast@example.com"
          value={email}
        ></input>
      </div>
      <div className="input_container">
        <label htmlFor="phoneNumber">Phone #:</label>
        <input
          type="text"
          name="phoneNumber"
          placeHolder="###-###-####"
          value={phoneNumber}
        ></input>
      </div>
    </div>
  );
};

export default GenInfo;
