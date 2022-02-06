//import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <h3 id="title">
        <img
          id="logo"
          src="https://freesvg.org/img/3D-Fabricatorz-Logo.png"
          alt="logo"
        />
        Lorem
      </h3>
      <nav>
        <span>Home</span>
        <span>Projects</span>
        <span>Contact</span>
      </nav>
      <button className="button" id="sign-in-btn">
        Sign in
      </button>
    </div>
  );
}
