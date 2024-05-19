
import { useGetParksThingsToDoQuery } from "../../app/services/nationalparkApi/nationalparkApi";
import ActivityItem from "../activityItem/ActivityItem";
import { FadeLoader } from "react-spinners";

const Activities = () => {
  const { data } = useGetParksThingsToDoQuery();
  if (!data) {
    return (
      <div className="flex flex-row justify-center items-center min-h-screen">
        <FadeLoader color="#282828" />
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-10 my-10 min-h-screen">
      {data.map((item, index) => {
        if (!item || !item.title || !item.longDescription) {
          return null;
        }
        return (
          <ActivityItem
            key={index}
            index={item.id}
            image={item.images[0].url}
            title={item.title}
            activities={item.activities[0].name}
            longDescription={item.longDescription}
            season={item.season}
          />
        );
      })}
    </div>
  );
};

export default Activities;
