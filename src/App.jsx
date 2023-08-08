import { useState } from "react";
import GenInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Header from "./components/Header.jsx";

function App() {
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
    <div id="body_cont">
      <div id="form_container">
        <GenInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          onChange={handleChange}
        />
        <Education />
      </div>
      <div id="cv_container">
        <Header
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
        />
      </div>
    </div>
  );
}

export default App;
