import { useState } from "react";

const Education = (props) => {
  const [Degree, setDegree] = useState("");
  const [School, setSchool] = useState("");
  const [Location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    switch (name) {
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
    }
    e.preventDefault();
  };

  return (
    <div className="education form_div">
      <div class="input_container">
        <label htmlFor="Degree">Degree:</label>
        <input
          type="text"
          name="Degree"
          placeholder="Degree / Major"
          id="Degree"
          value={Degree}
          onChange={handleChange}
        ></input>
      </div>
      <div class="input_container">
        <label htmlFor="School">School:</label>
        <input
          type="text"
          name="School"
          placeholder="School / University"
          id="School"
          value={School}
          onChange={handleChange}
        ></input>
      </div>
      <div class="input_container">
        <label htmlFor="School">Location:</label>
        <input
          type="text"
          name="Location"
          placeholder="Example City, EX"
          id="Location"
          value={Location}
          onChange={handleChange}
        ></input>
      </div>
      <div class="start_end">
        <div class="input_container">
          <label htmlFor="Start Date">Start Date:</label>
          <input
            type="month"
            name="startDate"
            placeholder="mm/yyyy"
            id="startDate"
            value={startDate}
            onChange={handleChange}
          ></input>
        </div>
        <div class="input_container">
          <label htmlFor="End Date">End Date:</label>
          <input
            type="month"
            name="endDate"
            placeholder="mm/yyyy"
            id="endDate"
            value={endDate}
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Education;
