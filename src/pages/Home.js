import React from "react";
import Header from "../components/Header.js";
import CarouselBoot from "../components/Home/CarouselBoot.js";
import PopularGoods from "../components/Home/PopularGoods.js";
import Why from "../components/Home/Why.js";
import Partners from "../components/Home/Partners.js";
import Footer from "../components/Footer.js";
function Home(props) {
  return (
    <div>
      <Header />

      <CarouselBoot />

      <h1 style={{ textAlign: "center" }}>Популярные товары</h1>
      <PopularGoods />

      <Why />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
