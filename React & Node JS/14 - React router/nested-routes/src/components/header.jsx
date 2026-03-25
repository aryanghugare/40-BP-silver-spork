import React from "react";
import { Link, NavLink } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  // color: isPending ? "red" : "",
                  // viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              {({ isActive, isPending, isTransitioning }) => <span className={isActive ? "highlight" : ""}>Home</span>}
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
