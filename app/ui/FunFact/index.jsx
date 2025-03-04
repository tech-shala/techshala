import React from "react";
import Div from "../Div";
import { funfaceData } from "@/constants";

export default function FunFact({ variant }) {
  return (
    <div className={variant ? `cs-funfact_wrap ${variant}` : "cs-funfact_wrap"}>
      <div
        className="cs-funfact_shape"
        style={{ backgroundImage: "url(/images/funfact_shape_bg.svg)" }}
      />
      <div className="cs-funfact_left">
        <div className="cs-funfact_heading">
          <h2>Some Stats.</h2>
          <p>
            It's been 5+ years since Techshala is been established, and we have
            successfully organized 500+ workshops, with over more than 150k+
            participation of students in whole.
          </p>
        </div>
      </div>
      <div className="cs-funfact_right">
        <div className="cs-funfacts">
          {funfaceData.map((item, index) => (
            <div className="cs-funfact cs-style1" key={index}>
              <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <span />
                {item.factNumber}
              </div>
              <div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
