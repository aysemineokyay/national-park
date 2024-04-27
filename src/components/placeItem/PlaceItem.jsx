import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PlaceItem = ({ index, image, title, content, listingDescription }) => {
  const strippedContent = content.replace(/<[^>]+>/g, "");
  let truncatedContent = strippedContent;

  if (strippedContent.length > 300) {
    truncatedContent = strippedContent.substring(0, 300) + "...";
  }
  return (
    <Link
      to={`/places/${index}`}
      state={{
        image: image,
        title: title,
        content: content,
      }}
    >
      {image && (
        <div className="flex flex-row gap-5 lg:hover:scale-105 cursor-pointer sm:h-[250] h-[180px] border rounded-md sm:px-5 px-3 mb-5 items-center shadow-md">
          <img
            src={image}
            className="w-[40px] h-[40px] lg:w-[150px] lg:h-[150px] md:w-[80px] md:h-[80px] sm:w-[50px] sm:h-[50px] shadow-md"
            alt={title}
          />

          <div className="">
            <h1 className="text-xs lg:text-lg md:text-base sm:text-sm font-bold">
              {title}
            </h1>
            <div className="text-xs lg:text-base md:text-sm sm:text-sm hidden md:flex">
              {listingDescription ? listingDescription : truncatedContent}
            </div>
          </div>
        </div>
      )}
    </Link>
  );
};

export default PlaceItem;
