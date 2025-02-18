import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}
          +44 454 7800 112
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="mdi:envelope" />
            </span>
          ) : (
            ""
          )}
          demo@vpt.edu.in
        </li>
        <Link href="https://maps.app.goo.gl/E4SonSTQba43cmZm6">
          <li>
            {withIcon ? (
              <span className="cs-accent_color">
                <Icon icon="mdi:map-marker" />
              </span>
            ) : (
              ""
            )}
            Vidyalankar Polytechnic, Vidyalankar College Marg,
            <br /> Wadala (East), Mumbai - 400037{" "}
          </li>
        </Link>
      </ul>
    </>
  );
}
