const Header = ({ firstName, lastName, email, phoneNumber }) => {
  return (
    <div class="cv_header">
      <div className="cv_full_name">
        {firstName} {lastName}
      </div>
      <div className="cv_contact">
        Email: {email} &bull; Phone Number: {phoneNumber}
      </div>
    </div>
  );
};

export default Header;
