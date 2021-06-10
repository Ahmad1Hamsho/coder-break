import React from "react";
import "./startPage.css";

import { Link } from "react-router-dom";
const StartPage = () => {
  return (
    <div className="startPage">
      <h1 className="logo">Coder Break</h1>
      <div className="startInfo">
        <p>
          Are you tired and want to refresh yourself? So without further ado ,
          let's get startet and do some exercises proven by health experts.
          There are tree exercises: one for the neck, the upper body and the
          arms.
        </p>

        <Link className="start" to="/head">
          Let's go
        </Link>

        <div id="images">
          <img src="Figur-Kopf-Anim.gif" />

          <img src="Figur-oberkörper-Anim.gif" />

          <img src="Figur-arme-anim.gif" />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
