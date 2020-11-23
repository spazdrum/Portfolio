import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/timeline">Timeline</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
