import HeroImg from "../assets/illustration-mockups.png";

function Hero() {
  function DesktopLayout() {
    return (
      <>
        <div className="lg:block ssm:hidden">
          <div className=" flex justify-center items-center py-10  gap-10">
            <div className="flex flex-col gap-5">
              <div className="text-5xl w-140 tracking-wide leading-15 font-Poppins-Regular font-semibold">
                Build The Community Your Fans Will Love
              </div>
              <div className="w-135 text-[19px] font-OpenSans-Regular font-normal">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </div>
              <button className="w-70 flex items-center justify-center text-lg py-5 rounded-full bg-Pink text-Very-Pale-Cyan font-OpenSans-Regular font-bold hover:bg-Pink/60 cursor-pointer">
                Get Started For Free
              </button>
            </div>
            <div>
              <img src={HeroImg} alt="" />
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
          <div className="flex flex-col justify-center items-center pb-10  px-5 mt-20 gap-20">
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="text-3xl text-center tracking-wide leading-10 font-Poppins-Regular font-semibold">
                Build The Community Your Fans Will Love
              </div>
              <div className=" font-OpenSans-Regular font-normal text-[18px] text-center">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </div>
              <button className="w-70 flex items-center justify-center text-lg py-2 rounded-full bg-Pink text-Very-Pale-Cyan font-OpenSans-Regular font-bold hover:bg-Pink/60 cursor-pointer">
                Get Started For Free
              </button>
            </div>
            <div>
              <img src={HeroImg} alt="" />
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

export default Hero;
