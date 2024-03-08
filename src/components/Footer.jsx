import React from "react";
import ReactDOM from "react-dom";

let current_year = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>© {current_year}</p>
    </footer>
  );
}

export default Footer;
