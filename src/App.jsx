import { useState } from "react";
import GenInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Header from "./components/Header.jsx";
import EducationSection from "./components/EducationSection.jsx";
import Experience from "./components/Experience.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Degree, setDegree] = useState("");
  const [School, setSchool] = useState("");
  const [Location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expStartDate, setExpStartDate] = useState("");
  const [expEndDate, setExpEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");

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
      case "Degree":
        setDegree(value);
        break;
      case "School":
        setSchool(value);
        break;
      case "Location":
        setLocation(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "expStartDate":
        setExpStartDate(value);
        break;
      case "expEndDate":
        setExpEndDate(value);
        break;
      case "Company":
        setCompany(value);
        break;
      case "jobTitle":
        setJobTitle(value);
        break;
      case "description":
        console.log(e);
        setDescription(value);
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
        <Education
          Degree={Degree}
          School={School}
          Location={Location}
          startDate={startDate}
          endDate={endDate}
          onChange={handleChange}
        />
        <Experience
          startDate={expStartDate}
          endDate={expEndDate}
          Company={company}
          jobTitle={jobTitle}
          description={description}
          onChange={handleChange}
        />
      </div>
      <div id="cv_container">
        <Header
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
        />
        <EducationSection
          Degree={Degree}
          School={School}
          Location={Location}
          startDate={startDate}
          endDate={endDate}
        />
        <ExperienceSection
          startDate={expStartDate}
          endDate={expEndDate}
          Company={company}
          jobTitle={jobTitle}
          description={description}
        />
      </div>
    </div>
  );
}

export default App;
