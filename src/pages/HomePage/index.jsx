import { Link } from "react-router-dom";
import Button from "../../components/Common/Button";
import Logo from "../../components/Common/Logo";
import BodyComponent from "../../components/HomePageComponents/BodyComponent";
import "./index.scss";
import React from "react";

function HomePage() {
  return (
    <div className="c-home-page-wrapper">
      <Logo />
      <BodyComponent />
      <div className="c-button-wrapper">
        <Link to="/question">
          {" "}
          <Button buttonText={"Start"} />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
