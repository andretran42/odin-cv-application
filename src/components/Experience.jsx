const Experience = ({
  startDate,
  endDate,
  Company,
  jobTitle,
  description,
  onChange,
}) => {
  return (
    <div className="experience form_div">
      <div className="input_container">
        <label htmlFor="Company">Company:</label>
        <input
          type="text"
          name="Company"
          placeholder="Company LLC"
          id="Company"
          value={Company}
          onChange={onChange}
        ></input>
      </div>
      <div className="input_container">
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Accountant"
          id="jobTitle"
          value={jobTitle}
          onChange={onChange}
        ></input>
      </div>
      <div class="start_end">
        <div class="input_container">
          <label htmlFor="Start Date">Start Date:</label>
          <input
            type="month"
            name="expStartDate"
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
            name="expEndDate"
            placeholder="mm/yyyy"
            id="endDate"
            value={endDate}
            onChange={onChange}
          ></input>
        </div>
      </div>
      <div class="input_container">
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          placeholder="Accounted for financials"
          id="description"
          value={description}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Experience;
