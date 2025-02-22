import React from "react";
import Div from "../Div";
import MenuWidget from "../Widget/MenuWidget";
import Spacing from "../Spacing";
import Cta from "../Cta";
import { copyrightLinks } from "@/constants";

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="cs-fooer">
      <Div className="container">
        <Cta
          title="Let's discuss, make <br />something <i>cool</i> together"
          btnText="Collaborate with Us"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>

      <Spacing lg="125" md="70" />
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`} Techshala | VP.
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
