import React from "react";
import "./headers.css"; // Your existing CSS file

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text text-center">
                <h1 className="headers">
                  <span >WELCOME TO TRUX</span>
                  <hr className="line"/>
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <p className="text-bigger">{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#download"
                  className="btn btn-custom btn-lg page-scroll download-button"
                >
                  Download App
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
