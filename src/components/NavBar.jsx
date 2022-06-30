import { memo } from "react";

const NavBar = ({ className }) => {
  return (
    <div className={`${className} navbar-heading`}>
      <div className="h-100 d-flex align-item-center">
        <img
          src={process.env.PUBLIC_URL + "images/geminiLogo.png"}
          alt="Gemini Solutions"
          className="navbar-heading__logo my-auto"
        />
      </div>
    </div>
  );
};

export default memo(NavBar);
