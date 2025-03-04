"use client";
import { useEffect, useState } from "react";
import Div from "../Div";
import Link from "next/link";

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <div className="cs-main_header">
          <div className="container">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/logo_transparent.png" alt="Logo" />
                </Link>
              </div>
              <div className="cs-main_header_center">
                <div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" onClick={() => setMobileToggle(false)}>
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/events"
                        onClick={() => setMobileToggle(false)}
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery"
                        onClick={() => setMobileToggle(false)}
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
