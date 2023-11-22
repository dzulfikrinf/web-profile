import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="footer">
      <footer className="text-center text-white d-flex justify-content-between align-items-center">
        <span>dnf</span>
        © 2023 Copyright: dzul
        <div className="social-icons">
          <a href="https://www.instagram.com/dzulfikrinf/">
            <BiLogoInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/dzulfikrinf/">
            <BiLogoLinkedinSquare size={30} />
          </a>
          <a href="https://github.com/dzulfikrinf">
            <BiLogoGithub size={30} />
          </a>
          <a href="https://wa.me/6283108873575">
            <BiLogoWhatsapp size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}
