"use client";

import Carousel from "@/components/product/carousel";
import data from "../model/data.json";
import Card from "@/components/product/card";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

export default function HomePage() {
  const products = useSelector((state: RootState) => state.products);

  return (
    <div className=" pb-8">
      <Carousel heading="New Arrivals">
        {products.map(
          (shirt, index, array) =>
            shirt.type === "shirt" && (
              <Card
                key={index}
                name={shirt.name}
                image={shirt.image}
                tag={shirt.tag}
                tagName={shirt.tagName}
                price={shirt.price}
                color={shirt.color}
                rating={shirt.rating}
                sizes={shirt.sizes}
              />
            )
        )}
      </Carousel>
      <Carousel heading="Swim">
        {products.map(
          (short, index, array) =>
            short.type === "short" && (
              <Card
                key={index}
                name={short.name}
                image={short.image}
                tag={short.tag}
                price={short.price}
                color={short.color}
                rating={short.rating}
                sizes={short.sizes}

              />
            )
        )}
      </Carousel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-8 gap-x-4 xl:gap-x-12 mx-auto px-[5%]">
        {products.map(
          (best, index, array) =>
            best.type === "best" && (
              <Card
                key={index}
                name={best.name}
                image={best.image}
                tag={best.tag}
                price={best.price}
                color={best.color}
                rating={best.rating}
                sizes={best.sizes}

              />
            )
        )}
      </div>
      <div className="w-full flex justify-center pt-8">
        <button className="text-sm border-b border-black inline-block">
          VIEW COLLECTION
        </button>
      </div>
    </div>
  );
}
