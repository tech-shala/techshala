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
          <a href="tel:+919987263652">(CO) Er. Prasad Koyande - 9987263652</a>
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}{" "}
          <a href="tel:+918097024500">(IF) Er. Gauri Bobade - 8097024500</a>
        </li>
        <li>
          {withIcon ? (
            <span className="cs-accent_color">
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
          ) : (
            ""
          )}
          <a href="tel:+919769621612">(EJ) Er. Kirthi Gupta - 9769621612</a>
        </li>
        <Link
          href="https://maps.app.goo.gl/E4SonSTQba43cmZm6"
          target="_blank  "
        >
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
