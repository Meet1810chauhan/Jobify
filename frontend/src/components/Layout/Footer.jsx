import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Coder.</div>
      <div>
        <FaFacebookF />

        <FaYoutube />

        <Link
          to={
            "https://www.linkedin.com/in/meet-chauhan-7a065024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
          }
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={
            "https://www.instagram.com/meet_chauhan__18?igsh=MXJpY3Z3b2dkb2U4Nw=="
          }
          target="_blank"
        >
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
