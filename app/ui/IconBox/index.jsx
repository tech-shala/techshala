import React from "react";
import parse from "html-react-parser";
import Div from "../Div";

export default function IconBox({ title, subtitle, icon }) {
  return (
    <div className="cs-iconbox cs-style1 text-center">
      <div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" />
      </div>
      <h2 className="cs-iconbox_title">{parse(title)}</h2>
      <div className="cs-iconbox_subtitle">{parse(subtitle)}</div>
    </div>
  );
}
