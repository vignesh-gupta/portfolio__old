import React, { useState } from "react";
import "./Navbar.scss";

import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = ["home", "about", "work", "skills", "contact"];
  const [toggle, setToggle] = useState(false);

  const [isNoteVisible, setIsNoteVisible] = useState(true);

  return (
    <header className="app__head">
      {isNoteVisible && (
        <div className="app__note">
          <p>
            ✨ Hello there! The portfolio has a new look & feel.
            <a
              className="app__note-link"
              href="https://vigneshgupta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check it out!
            </a>
          </p>
          <HiX
            className="app__note-cancel"
            onClick={() => setIsNoteVisible(false)}
          />
        </div>
      )}
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {navLinks.map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}> {item} </a>
              <div />
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />

              <ul>
                {navLinks.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {" "}
                      {item}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
