import React from "react";
import { useLocation } from "react-router-dom";

const ActivityDetail = () => {
  let location = useLocation();
  const { image, title, longDescription, season } = location.state;
  const strippedContent = longDescription.replace(/<[^>]+>/g, "");
  let truncatedContent = strippedContent;
  return (
    <div className="items-center justify-center flex flex-col">
      <div className="flex flex-col sm:p-10 p-2 w-3/4 justify-center md:gap-5 sm:gap-3 gap-2">
        <h1 className="font-bold md:text-2xl sm:text-xl text-lg mb-5 text-center">
          {title}
        </h1>
        <img
          src={image}
          className="w-3/4 object-cover rounded-md mb-5 self-center "
        />
        <p className="w-full text-justify leading-loose">{truncatedContent}</p>
        {season.length > 0 && (
          <p className="font-bold">
            Season: &nbsp;
            {season.map((item, index) => (
              <span key={index} className="font-normal">
                {item}
                {index !== season.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivityDetail;
