import React from "react";
import { useLocation } from "react-router-dom";

const PlaceDetail = () => {
  let location = useLocation();
  const { image, title, content } = location.state;
  console.log("image", image);
  const strippedContent = content.replace(/<[^>]+>/g, "");
  let truncatedContent = strippedContent;
  return (
    <div className="flex flex-col sm:p-10 p-2 items-center justify-center md:gap-10 sm:gap-5 gap-3 ">
      <h1 className="font-bold md:text-2xl sm:text-xl text-lg text-center">
        {title}
      </h1>
      <img src={image} className="w-2/4 object-cover rounded-md" />
      <p className="w-3/4 text-justify leading-loose">{truncatedContent}</p>
    </div>
  );
};

export default PlaceDetail;
