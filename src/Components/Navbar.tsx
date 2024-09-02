import logo from "../../public/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <header className="navbar-logo-header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="navbar-header">US Government Site Visits</h1>
      </header>
    </nav>
  );
};

export default Navbar;
