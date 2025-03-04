import React from "react";
import parse from "html-react-parser";
import Div from "../Div";
import Button from "../Button";
import VerticalLinks from "../VerticalLinks";
import gsap from "gsap";

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="cs-shape_1" />
      <div className="cs-shape_1" />
      <div className="cs-shape_1" />
      <div className="container">
        <div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <div className="cs-hero_info">
            <div>
              <Button btnLink={btnLink} btnText={btnText} />
            </div>
            <div>
              <div className="cs-hero_subtitle">{subtitle}</div>
            </div>
          </div>
        </div>
      </div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <button
        onClick={() => gsap.to(window, { scrollTo: { y: scrollDownId } })}
        className="cs-down_btn"
      >
        .
      </button>
    </div>
  );
}
