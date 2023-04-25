"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Card from "./card";

export default function Carousel({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    breakpoints: {
      "(max-width: 765px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 765px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 32 },
      },
      "(min-width: 1536px)": {
        slides: { perView: 4, spacing: 56 },
      },
    },
  });

  return (
    <div className="space-y-4  py-8 px-[5%]">
      <h1 className="text-center text-3xl font-bold">{heading}</h1>
      <div className=" space-y-8 flex flex-col ">
        <div className="keen-slider flex justify-between" ref={sliderRef}>
          {children}
        </div>
        <div className="w-full flex justify-center">
          <button className="text-sm border-b border-black inline-block">
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
}
