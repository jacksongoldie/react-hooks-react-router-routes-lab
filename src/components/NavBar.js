import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
  <div className='navbar'>
    <NavLink
      to="/movies"
      exact
      activeStyle={{ outline: 'solid'}}
    >
      Movies
    </NavLink>
    <NavLink
      to="/directors"
      exact
      activeStyle={{ outline: 'solid'}}
    >
      Directors
    </NavLink>
    <NavLink
      to="/actors"
      exact
      activeStyle={{ outline: 'solid'}}
    >
      Actors
    </NavLink>
    <NavLink
      to="/"
      exact
      activeStyle={{ outline: 'solid'}}
    >
      Home
    </NavLink>
  </div>)
}

export default NavBar;
