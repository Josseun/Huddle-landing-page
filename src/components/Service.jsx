import React from "react";
import Img from "../assets/illustration-grow-together.png";
import Img2 from "../assets/illustration-flowing-conversation.png";
import Img3 from "../assets/illustration-your-users.png";

function Service() {
  function DesktopLayout() {
    return (
      <>
        <div className="lg:block ssm:hidden">
          <div className="mt-10 p-20 flex flex-col  gap-20 mb-32">
            <div className="flex justify-between items-center w-full p-6 bg-white rounded-xl shadow-xl h-90 pl-30 ">
              <div className="">
                <div className="font-Poppins-Regular font-semibold text-2xl">
                  Grow Together
                </div>
                <div className="text-lg font-OpenSans-Regular font-normal w-120 pr-5">
                  Generate meaningful discussions with your audience and build a
                  strong, loyal community. Think of the insightful conversations
                  you miss out on with a feedback form.
                </div>
              </div>
              <div>
                <img src={Img} width={400} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center w-full p-6 bg-white rounded-xl shadow-xl h-90 pl-30 ">
              <div>
                <img src={Img2} width={400} alt="" />
              </div>
              <div className="">
                <div className="font-Poppins-Regular font-semibold text-2xl pl-5">
                  Flowing Conversations
                </div>
                <div className="text-lg font-OpenSans-Regular font-normal w-120 pl-5">
                  You wouldn't paginate a conversation in real life, so why do
                  it online? Our threads have just-in-time loading for a more
                  natural flow.
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full p-6 bg-white rounded-xl shadow-xl h-90 pl-30 ">
              <div className="">
                <div className="font-Poppins-Regular font-semibold text-2xl">
                  Your Users
                </div>
                <div className="text-lg font-OpenSans-Regular font-normal w-120 pr-5">
                  It takes no time at all to integrate Huddle with your app's
                  authentication solution. This means, once signed in to your
                  app, your users can start chatting immediately.
                </div>
              </div>
              <div>
                <img src={Img3} width={400} alt="" />
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
          <div className="mt-10 flex flex-col gap-10 p-10  mb-32">
            <div className="bg-white rounded-lg flex flex-col gap-10 shadow-lg p-10 ">
              <div>
                <img src={Img} alt="" />
              </div>
              <div className="flex flex-col gap-5 items-center justify-center text-center">
                <div className="font-Poppins-Regular font-semibold text-2xl">
                  Grow Together
                </div>
                <div className="text-sm text-black/50 font-OpenSans-Regular font-normal">
                  Generate meaningful discussions with your audience and build a
                  strong, loyal community. Think of the insightful conversations
                  you miss out on with a feedback form.
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-10 shadow-lg p-10 ">
              <div>
                <img src={Img2} alt="" />
              </div>
              <div className="flex flex-col gap-5 items-center justify-center text-center">
                <div className="font-Poppins-Regular font-semibold text-2xl">
                  Flowing Conversations
                </div>
                <div className="text-sm text-black/50 font-OpenSans-Regular font-normal">
                  You wouldn't paginate a conversation in real life, so why do
                  it online? Our threads have just-in-time loading for a more
                  natural flow.
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg flex flex-col gap-10 shadow-lg p-10 ">
              <div>
                <img src={Img3} alt="" />
              </div>
              <div className="flex flex-col gap-5 items-center justify-center text-center">
                <div className="font-Poppins-Regular font-semibold text-2xl">
                  Your Users
                </div>
                <div className="text-sm text-black/50 font-OpenSans-Regular font-normal">
                  It takes no time at all to integrate Huddle with your app's
                  authentication solution. This means, once signed in to your
                  app, your users can start chatting immediately.
                </div>
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

export default Service;
