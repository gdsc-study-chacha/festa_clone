import React from "react";
import jyj from "../../assets/creator/jyj.svg";

function CreatorList() {
  return (
    <div className="creator-container">
      <div className="creator-image">
        <img src={jyj} alt="" style={{ width: "100px", height: "100px" }} />
      </div>
      <div className="creator-info">
        <div className="creator-name">정연재</div>
        <div className="creator-role">FE 팀장</div>
        <div className="creator-major">소프트웨어학과 20학번</div>
      </div>
    </div>
  );
}

export default CreatorList;
