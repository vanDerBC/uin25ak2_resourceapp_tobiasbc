import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import resources from "../assets/javascript/ressurser";
import "../assets/styles/nav.scss"

export default function Nav() {

  return (
    <nav>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
              <NavLink to={`/${resource.category}`} className="nav-link">{resource.category}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}