import { DATA } from ".././data";
import { useState, useEffect } from "react";

function Content() {
  const arts = DATA.art;

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 ">
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/2.png"
            className=" overflow-hidden object-cover h-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/12.jpg"
            className=" overflow-hidden object-cover w-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/3.png"
            className=" overflow-hidden object-cover h-full "
          ></img>
        </div>
        <div className="border-b-2  border-porple w-full aspect-square overflow-hidden"></div>
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/me.jpg"
            className=" overflow-hidden object-cover h-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square overflow-hidden"></div>
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/9.png"
            className=" overflow-hidden object-cover w-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple  w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/8.png"
            className=" overflow-hidden object-cover w-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple  w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/5.png"
            className=" overflow-hidden object-cover w-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple  w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/4.png"
            className=" overflow-hidden object-cover w-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple w-full aspect-square overflow-hidden"></div>
        <div className="border-b-2  border-porple w-full aspect-square overflow-hidden"></div>
        <div className="border-b-2 border-r-2 border-porple  w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/7.jpg"
            className=" overflow-hidden object-cover h-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple  w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/6.png"
            className=" overflow-hidden object-cover w-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-2 border-porple  w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/10.png"
            className=" overflow-hidden object-cover w-full "
          ></img>
        </div>
        <div className="border-b-2 border-r-white border-porple  w-full aspect-square overflow-hidden">
          <img
            alt="It's me!"
            src="/ProjectImages/Art/1.png"
            className=" overflow-hidden object-cover w-full "
          ></img>
        </div>
      </div>
      <div className="z-50 hidden md:flex bottom-0 bg-white  px-6 w-full h-12 "></div>
    </>
  );
}

export default Content;
