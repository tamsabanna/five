import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/120313883?v=4"
          alt="Suryabhan"
        />
        <h2>Suryabhan Singh Rathore</h2>
        <p>
          Success is not final, failure is not fatal: It is the courage to
          continue that counts.
        </p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://www.linkedin.com/in/suryabhan-singh-rathore-b87ba120a/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/tamsa_banna">
            <AiFillInstagram />
          </a>
          <a href="https://www.github.com/tamsabanna">
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
