import React from "react";
import Logo from "../assets/logo.svg";
import Licon from "../assets/icon-location.svg";
import Picon from "../assets/icon-phone.svg";
import Eicon from "../assets/icon-email.svg";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";

function Footer() {
  function DesktopLayout() {
    return (
      <>
        <div className="lg:block ssm:hidden">
          <div className="bg-Very-Dark-Cyan relative flex flex-col items-center justify-center mt-50 pt-30">
            <div className="flex flex-col items-center w-160 gap-10 p-10 rounded-3xl justify-center bg-white text-Very-Dark-Cyan absolute -top-40 ">
              <div className="text-3xl font-OpenSans-Regular font-bold">
                Ready To Build Your Community?
              </div>
              <button className="w-80 flex items-center justify-center text-lg py-5 rounded-full bg-Pink text-Very-Pale-Cyan font-OpenSans-Regular font-bold hover:bg-Pink/60 cursor-pointer">
                Get Started For Free
              </button>
            </div>
            <div className="flex p-20 pt-5 text-Very-Pale-Cyan font-Poppins-Regular font-medium items-center justify-between w-full ">
              <div className="flex flex-col gap-5 w-100 justify-center">
                <div>
                  <img src={Logo} className="brightness-0 invert" alt="" />
                </div>
                <div className="flex w-full gap-5">
                  <div>
                    <img width={20} className="pt-1" src={Licon} alt="" />
                  </div>
                  <div className="w-90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </div>
                </div>
                <div className="flex w-full gap-5 items-center">
                  <div>
                    <img width={20} className="" src={Picon} alt="" />
                  </div>
                  <div> +1-543-123-4567</div>
                </div>
                <div className="flex w-full gap-5 items-center">
                  <div>
                    <img width={20} className="" src={Eicon} alt="" />
                  </div>
                  <div>example@huddle.com</div>
                </div>
              </div>
              <div className="flex flex-col gap-5  ">
                <div className="hover:underline cursor-pointer">About Us</div>
                <div className="hover:underline cursor-pointer">What We Do</div>
                <div className="hover:underline cursor-pointer"> FAQ</div>
              </div>
              <div className="flex flex-col gap-5  justify-center ">
                <div className="hover:underline cursor-pointer">Career</div>
                <div className="hover:underline cursor-pointer">Blog</div>
                <div className="hover:underline cursor-pointer">Contact Us</div>
              </div>

              <div className="flex flex-col justify-around mt-10 items-start h-full gap-40 ">
                <div className="flex gap-5 pt-15 pb-0">
                  <div className=" outline-2 rounded-full p-1 outline-Grayish-Blue text-white hover:outline-Pink hover:text-Pink cursor-pointer">
                    <IconBrandFacebook stroke={2} size={20} />
                  </div>

                  <div className=" outline-2 rounded-full p-1 outline-Grayish-Blue text-white hover:outline-Pink hover:text-Pink cursor-pointer">
                    <IconBrandTwitter stroke={2} size={20} />
                  </div>

                  <div className=" outline-2 rounded-full p-1 outline-Grayish-Blue text-white hover:outline-Pink hover:text-Pink cursor-pointer">
                    <IconBrandInstagram stroke={2} size={20} />
                  </div>
                </div>
                <div className="flex justify-end w-full text-sm">
                  &copy; Copyright 2018 Huddle. All rights reserved.
                </div>
              </div>
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
          <div className="bg-Very-Dark-Cyan  mt-50 pt-40 px-5 pb-20 text-Very-Pale-Cyan flex flex-col w-full items-center justify-center relative">
            <div className="flex flex-col items-center w-100 gap-10 p-6 py-10 rounded-3xl justify-center bg-white text-Very-Dark-Cyan absolute -top-30">
              <div className="text-[22px] font-OpenSans-Regular font-bold">
                Ready To Build Your Community?
              </div>
              <button className="w-60 flex items-center justify-center text-base py-3 rounded-full bg-Pink text-Very-Pale-Cyan font-OpenSans-Regular font-bold hover:bg-Pink/60 cursor-pointer">
                Get Started For Free
              </button>
            </div>
            <div className="flex flex-col gap-15">
              <div className="flex flex-col gap-5 w-100 justify-center">
                <div>
                  <img src={Logo} className="brightness-0 invert" alt="" />
                </div>
                <div className="flex w-full gap-5">
                  <div>
                    <img width={40} className="pt-1" src={Licon} alt="" />
                  </div>
                  <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </div>
                </div>
                <div className="flex w-full gap-5 items-center">
                  <div>
                    <img width={20} className="" src={Picon} alt="" />
                  </div>
                  <div> +1-543-123-4567</div>
                </div>
                <div className="flex w-full gap-5 items-center">
                  <div>
                    <img width={20} className="" src={Eicon} alt="" />
                  </div>
                  <div>example@huddle.com</div>
                </div>
              </div>
              <div className="flex flex-col gap-5 text-lg">
                <div className="hover:underline cursor-pointer">About Us</div>
                <div className="hover:underline cursor-pointer">What We Do</div>
                <div className="hover:underline cursor-pointer"> FAQ</div>
                <div className="hover:underline cursor-pointer">Career</div>
                <div className="hover:underline cursor-pointer">Blog</div>
                <div className="hover:underline cursor-pointer">Contact Us</div>
              </div>

              <div className="flex flex-col justify-center items-center gap-5">
                <div className="flex gap-5">
                  <div className=" outline-2 rounded-full p-1 outline-Grayish-Blue text-white hover:outline-Pink hover:text-Pink cursor-pointer">
                    <IconBrandFacebook stroke={2} size={20} />
                  </div>

                  <div className=" outline-2 rounded-full p-1 outline-Grayish-Blue text-white hover:outline-Pink hover:text-Pink cursor-pointer">
                    <IconBrandTwitter stroke={2} size={20} />
                  </div>

                  <div className=" outline-2 rounded-full p-1 outline-Grayish-Blue text-white hover:outline-Pink hover:text-Pink cursor-pointer">
                    <IconBrandInstagram stroke={2} size={20} />
                  </div>
                </div>
                <div> &copy; Copyright 2018 Huddle. All rights reserved.</div>
              </div>
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

export default Footer;
