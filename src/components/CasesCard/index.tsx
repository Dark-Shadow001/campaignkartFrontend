"use client";
import { ICases } from "@/types";
import React, { useState } from "react";

const CasesCard = ({ item }: { item: ICases }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className=" py-6 lg:px-20 px-10">
      {/* Image Section */}
      <div className="border rounded-lg h-auto  lg:h-[45vh] xl:h-[45vh] 3xl:h-[40vh] p-1 flex justify-center md:justify-evenly bg-brand_bg bg-opacity-40 flex-wrap overflow-auto">
        <div className= "h-[50%] md:h-full  md:pr-5 w-full md:w-6/12 lg:w-3/12">
          {/* Placeholder for the image. You can replace it with an <img> tag */}
          <img
            className="w-full rounded-md h-full object-cover overflow-hidden"
            src={item.cover_image}
          />
        </div>

        {/* Details Section */}
        <div className="p-4 bg-white rounded-md w-full md:w-6/12 lg:w-3/12">
          <h2 className="font-semibold text-brand_headings lg:text-lg xl:text-xl">
            Client: <span className="font-light">{item.title}</span>
          </h2>
          <p className="text-black font-semibold md:pt-3  lg:text-sm lg:pt-3 xl:pt-8">
            Year:<span className="text-brand_text font-light"> {item.year}</span>
          </p>
          <p className="text-black font-semibold md:pt-3 lg:text-sm lg:pt-3 xl:pt-8">
            Timeframe:{" "}
            <span className="text-brand_text font-light">{item.timeframe}</span>
          </p>
          <p className="text-black font-semibold md:pt-3 lg:text-sm lg:pt-3 xl:pt-8">
            Main Service:
            <span className="text-brand_text font-light">{item.main_service}</span>{" "}
          </p>
          <p className="text-black font-semibold md:pt-3 lg:text-sm lg:pt-3 xl:pt-8">
            Extra Service:
            <span className="text-brand_text font-light">
              {" "}
              {item.extra_service}
            </span>{" "}
          </p>
        </div>

        {/* Description Section */}
       <div className="w-full md:w-full rounded-md lg:w-6/12 lg:pl-4">
       <div className="h-full rounded-md bg-white ">
        <div
          className={` rounded-md   transition-max-height duration-500 ${
            isExpanded ? "max-h-[100%] bg-white" : "max-h-[30%] bg-white"
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="text-sm text-brand_text w-full h-full">
            <p className="  p-3 ">
              {!isExpanded
                ? `${item.description.slice(0, 200)}`
                : `${item.description}`}
            </p>
            <button className="pl-2 rounded-md text-blue-500 hover:underline self-end">
              View {isExpanded ? "Less" : "More"}
            </button>
          </div>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default CasesCard;
