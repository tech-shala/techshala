import React from "react";
import Link from "next/link";
import Div from "../Div";

export default function Event({ href, src, title, subtitle, variant }) {
  return (
    <Link
      href={href}
      className={`cs-portfolio cs-bg ${variant ? variant : "cs-style1"}`}
    >
      <>
        <div className="cs-portfolio_hover" />
        <div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        />
        <div className="cs-portfolio_info">
          <div className="cs-portfolio_info_bg cs-accent_bg" />
          <h2 className="cs-portfolio_title">{title}</h2>
          <div className="cs-portfolio_subtitle">{subtitle}</div>
        </div>
      </>
    </Link>
  );
}
