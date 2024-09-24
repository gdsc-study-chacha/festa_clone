import React from "react";
import Logo1 from "../assets/common/logo1.svg";
import Logo2 from "../assets/common/logo2.svg";
import Menu1 from "../assets/common/menu1.svg";
import Menu2 from "../assets/common/menu2.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ name, type, onClick }) => {
  const navigate = useNavigate();
  return (
    <div className={"header_container"}>
      <div className="header_wrapper">
        <div className="header_Img" onClick={() => navigate("/")}>
          <img
            src={type === 1 ? Logo1 : Logo2}
            alt=""
            style={{ width: "65px", height: "48px" }}
          />
        </div>
        {name !== undefined && <div className="header_props">{name}</div>}
        <div className="header_menu_icon" onClick={onClick}>
          <img
            src={type === 1 ? Menu1 : Menu2}
            alt=""
            style={
              type === 1
                ? { width: "40px", height: "40px" }
                : { width: "24px", height: "24px" }
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
