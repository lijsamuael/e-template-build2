import Carousel from "@/components/product/carousel";
import data from "../model/data.json";
import Card from "@/components/product/card";

export default function HomePage() {
  return (
    <div className=" pb-8">
      <Carousel heading="New Arrivals">
        {data.shirts.map((shirt, index, array) => (
          <Card
            key={index}
            name={shirt.name}
            image={shirt.image}
            tag={shirt.tag}
            tagName={shirt.tagName}
            price={shirt.price}
            color={shirt.color}
            rating={shirt.rating}
          />
        ))}
      </Carousel>
      <Carousel heading="Swim">
        {data.shorts.map((short, index, array) => (
          <Card
            key={index}
            name={short.name}
            image={short.image}
            tag={short.tag}
            price={short.price}
            color={short.color}
            rating={short.rating}
          />
        ))}
      </Carousel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-x-8 gap-x-4 xl:gap-x-12 mx-auto px-[5%]">
        {data.bests.map((best, index, array) => (
          <Card
            key={index}
            name={best.name}
            image={best.image}
            tag={best.tag}
            price={best.price}
            color={best.color}
            rating={best.rating}
          />
        ))}
      </div>
      <div className="w-full flex justify-center pt-8">
        <button className="text-sm border-b border-black inline-block">
          VIEW COLLECTION
        </button>
      </div>
    </div>
  );
}
