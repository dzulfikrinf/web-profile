import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <footer className="bg-dark text-center text-white">
          {/* <div className="footericon">
            <a href="https://www.instagram.com/dzulfikrinf/">
              <BiLogoInstagram size={35} />
            </a>
            <a href="https://www.linkedin.com/in/dzulfikrinf/">
              <BiLogoLinkedinSquare size={35} />
            </a>
            <a href="https://github.com/dzulfikrinf">
              <BiLogoGithub size={35} />
            </a>
            <a href="https://wa.me/6283108873575">
              <BiLogoWhatsapp size={35} />
            </a>
          </div> */}

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(230, 230, 230, 230)" }}
          >
            <a href="https://www.instagram.com/dzulfikrinf/">
              <BiLogoInstagram size={35} />
            </a>
            <a href="https://www.linkedin.com/in/dzulfikrinf/">
              <BiLogoLinkedinSquare size={35} />
            </a>
            <a href="https://github.com/dzulfikrinf">
              <BiLogoGithub size={35} />
            </a>
            <a href="https://wa.me/6283108873575">
              <BiLogoWhatsapp size={35} />
            </a>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
