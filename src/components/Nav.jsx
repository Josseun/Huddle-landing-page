import React from "react";
import Logo from "../assets/logo.svg";

function Nav() {
  function DesktopLayout() {
    return (
      <>
        <div className="lg:block ssm:hidden w-full h-full">
          <div className="flex justify-between items-center ">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div>
              <button className="w-60 flex items-center justify-center text-lg py-3 rounded-full bg-white shadow-2xl font-OpenSans-Regular font-bold hover:text-Grayish-Blue cursor-pointer">
                Try It Free
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  function MobileLayout() {
    return (
      <>
        <div className="lg:hidden ssm:block">
            <div className="flex justify-between items-center ">
            <div>
              <img src={Logo} alt="" width={100} />
            </div>
            <div>
              <button className="flex items-center justify-center text-sm w-35 py-2 rounded-full bg-white shadow-2xl font-OpenSans-Regular font-bold hover:text-Grayish-Blue cursor-pointer">
                Try It Free
              </button>
            </div>
          </div>
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
}

export default Nav;
