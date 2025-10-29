import React from "react";
import Hero from "./Hero";
import BGHD from "../assets/bg-hero-desktop.png";
import BGHM from "../assets/bg-hero-mobile.png";
import Nav from "./Nav";
import Service from "./Service";
import Footer from "./Footer";

function Main() {
  function DesktopLayout() {
    return (
      <>
        <div className="lg:block ssm:hidden bg-Grayish-Blue/5">
          <div
            className="flex flex-col w-full h-full bg-cover p-10 bg-no-repeat bg-Very-Pale-Cyan"
            style={{ backgroundImage: `url(${BGHD})` }}
          >
            <Nav />
            <Hero />
          </div>
          <Service />
          <Footer />
        </div>
      </>
    );
  }

  function MobileLayout() {
    return (
      <>
        <div className="lg:hidden ssm:block bg-Grayish-Blue/5">
          <div
            className="flex flex-col w-full h-full bg-cover p-5 bg-no-repeat bg-Very-Pale-Cyan"
            style={{ backgroundImage: `url(${BGHM})` }}
          >
            <Nav />
            <Hero />
          </div>
          <Service />
          <Footer />
        </div>
      </>
    );
  }

  return (
    <div>
      <div>
        <DesktopLayout />
        <MobileLayout />
      </div>
    </div>
  );

  //
}

export default Main;
