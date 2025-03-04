import React from 'react';
import Div from '../Div';

export default function MovingText({ text, variant }) {
  return (
    <div
      className={`cs-moving_text_wrap cs-bold cs-primary_font ${
        variant ? variant : ''
      }`}
    >
      <div className="cs-moving_text_in">
        <div className="cs-moving_text">{text}</div>
        <div className="cs-moving_text">{text}</div>
      </div>
    </div>
  );
}
