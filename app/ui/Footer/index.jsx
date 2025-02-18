import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import Spacing from "../Spacing";
import Cta from "../Cta";

const copyrightLinks = [
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const serviceMenu = [
  {
    title: "UI/UX design",
    href: "/service/service-details",
  },
  {
    title: "WP development",
    href: "/service/service-details",
  },
  {
    title: "Digital marketing",
    href: "/service/service-details",
  },
  {
    title: "React development",
    href: "/service/service-details",
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      {/* <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/logo_transparent.png"
                  logoAlt="Logo"
                  text="Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
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
