import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ActivityItem = ({
  index,
  image,
  title,
  longDescription,
  season,
  activities,
}) => {
  const strippedContent = longDescription.replace(/<[^>]+>/g, "");
  return (
    <Link
      to={`/activities/${index}`}
      state={{
        image: image,
        title: title,
        longDescription: strippedContent,
        season: season,
        activities: activities,
      }}
    >
      <div className="flex flex-col lg:w-[350px] lg:h-[220px] md:w-[320px] md:h-[220px] sm:w-[250px] sm:h-[180px] w-[200px] h-[180px] border rounded-md items-center pt-5 md:gap-5 gap-3 shadow-lg cursor-pointer">
        <img
          src={image}
          className="lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] rounded-full"
          alt=""
        />
        <div className="lg:w-[300px] md:w-[200px] sm:w-[150px] w-[120px] md:flex items-center justify-center ">
          <h1 className="md:text-lg text-sm font-bold text-wrap text-center">
            {title}
          </h1>
        </div>
        {/* <div className="lg:w-[300px] md:w-[200px] hidden md:flex">
        <p className="md:text-base text-wrap text-xs">{shortDescription}</p>
      </div> */}
      </div>
    </Link>
  );
};

export default ActivityItem;
