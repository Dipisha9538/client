import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {isLoggedIn} from "../Sessions/sessions.js"


const Home = () => {
  const [stockData, setStockData] = useState();
  const [loggedIn, setLoggedIn] = useState(undefined);
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn()) console.log("User is logged in");
  });
    

  return (
    <div>
      <Announcement />
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
