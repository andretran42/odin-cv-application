const ExperienceSection = ({
  startDate,
  endDate,
  Company,
  jobTitle,
  description,
}) => {
  return (
    <div className="experience_section">
      <div className="section_header">EXPERIENCE</div>
      <div className="experience_details">
        <div className="jobTitle">{jobTitle}</div>
        <div className="company_dates_container">
          <div className="Company">{Company}</div>
          <div className="expDates">
            {startDate} to {endDate}
          </div>
        </div>
        <div className="description" id="description_text">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
