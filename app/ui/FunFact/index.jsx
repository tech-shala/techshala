import React from "react";
import Div from "../Div";
import { funfaceData } from "@/constants";

export default function FunFact({ variant }) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}` : "cs-funfact_wrap"}>
      <Div
        className="cs-funfact_shape"
        style={{ backgroundImage: "url(/images/funfact_shape_bg.svg)" }}
      />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <h2>Some Stats.</h2>
          <p>
            It's been 5+ years since Techshala is been established, and we have
            successfully organized 500+ workshops, with over more than 150k+
            participation of students in whole.
          </p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div className="cs-funfacts">
          {funfaceData.map((item, index) => (
            <Div className="cs-funfact cs-style1" key={index}>
              <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                <span />
                {item.factNumber}
              </Div>
              <Div className="cs-funfact_text">
                <span className="cs-accent_color">+</span>
                <p>{item.title}</p>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
