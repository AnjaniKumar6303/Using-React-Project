import React from "react";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillAmazonCircle,
} from "react-icons/ai";
import { SiFlipkart } from "react-icons/si";
import "../Styles/home.css";

const Home = () => (
  <div>
    <div className="home1" id="home">
      <div className="home1-inner">
        <h1>CODINGGURU</h1>
        <p>solutions for all the queries</p>
      </div>
    </div>
    <main className="main" id="about">
      <div className="home2">
        <h1>ABOUT</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          officia placeat consequatur at unde nisi et! Aspernatur quos
          exercitationem amet dignissimos aperiam, nostrum, porro ut
          voluptate, culpa ipsa eius autem?
        </p>
        <button className="btn">Read More..</button>
      </div>
    </main>
    <div className="home3" id="brands">
      <div className="home3-inner">
        <h1>BRANDS</h1>
        <div className="brands">
          <div className="brand" style={{ animationDelay: "0.25s" }}>
            <AiFillGoogleCircle className="icon" />
            <p>Google</p>
          </div>
          <div className="brand" style={{ animationDelay: "0.5s" }}>
            <AiFillInstagram className="icon" />
            <p>Instagram</p>
          </div>
          <div className="brand" style={{ animationDelay: "0.75s" }}>
            <AiFillAmazonCircle className="icon" />
            <p>Amazon</p>
          </div>
          <div className="brand" style={{ animationDelay: "1s" }}>
            <SiFlipkart className="icon" />
            <p>Flipkart</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
