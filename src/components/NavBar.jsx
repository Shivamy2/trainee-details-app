import { memo } from "react";
import { siteLogo } from "../constants/constant";

const NavBar = ({ className }) => {
  return (
    <div className={`${className} navbar-heading`}>
      <div className="h-100 d-flex align-item-center">
        <img
          src={siteLogo}
          alt="Gemini Solutions"
          className="navbar-heading__logo my-auto"
        />
      </div>
    </div>
  );
};

export default memo(NavBar);
