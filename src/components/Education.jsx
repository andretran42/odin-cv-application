import { useState } from "react";

const Education = ({
  Degree,
  School,
  Location,
  startDate,
  endDate,
  onChange,
}) => {
  Degree, School, Location, startDate, endDate, onChange;
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Education;
