import { useState } from "react";

const GenInfo = ({ firstName, lastName, email, phoneNumber, onChange }) => {
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
            onChange={onChange}
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
            onChange={onChange}
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
          onChange={onChange}
        ></input>
      </div>
      <div className="input_container">
        <label htmlFor="phoneNumber">Phone #:</label>
        <input
          type="text"
          name="phoneNumber"
          placeHolder="###-###-####"
          value={phoneNumber}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};

export default GenInfo;
