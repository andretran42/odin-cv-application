const EducationSection = ({ Degree, School, Location, startDate, endDate }) => {
  return (
    <div className="education_section">
      <div className="section_header">EDUCATION</div>
      <div className="education_details">
        <div className="degree">{Degree}</div>
        <div className="school_dates_container">
          {" "}
          <div className="school">{School}</div>
          <div className="dates">
            {startDate} to {endDate}
          </div>
        </div>

        <div className="Location">{Location}</div>
      </div>
    </div>
  );
};

export default EducationSection;
