import React from "react";
import Logo from "../assets/common/footer_logo.svg";

const Footer = () => {
  return (
    <div className="footer_container">
      <div>
        <img src={Logo} alt="" style={{ width: "67px", height: "48px" }} />
      </div>
      <div className="footer_word">상명대 천안캠퍼스</div>
      <div>gdsc</div>
    </div>
  );
};

export default Footer;
