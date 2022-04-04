import React from 'react';
import {  Link } from "react-router-dom";
const NavBar= () =>{
  return (
<header >
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">Start &raquo;</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

<div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
        <li>
            <Link class="nav-link" to="/">Home</Link>
        </li>
        <li>
            <Link class="nav-link" to="/services/resume">Resume Writing</Link>
        </li>
        <li>
            <Link class="nav-link" to="/services/career">Career Coaching</Link>
        </li>
        <li>
            <Link class="nav-link" to="/services/linkedin">LinkedIn profile update</Link>
        </li>
    </ul>
</div>
</nav>
</header>
  );
}
export default NavBar;