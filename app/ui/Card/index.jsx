import React from 'react';
import Link from 'next/link';
import Div from '../Div';

export default function Card({ title, link, src, alt }) {
  return (
    <Link href={link} className="cs-card cs-style1">
      <>
        <img src={src} alt={alt} />
        <div className="cs-card_overlay" />
        <div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </div>
      </>
    </Link>
  );
}
