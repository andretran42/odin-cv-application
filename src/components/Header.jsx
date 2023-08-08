const Header = ({ firstName, lastName, email, phoneNumber }) => {
  return (
    <div class="cv_header">
      <div className="cv_first_name">
        {firstName} {lastName}
      </div>
    </div>
  );
};

export default Header;
