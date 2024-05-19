import {
  useGetParksQuery,
  useGetParksThingsToDoQuery,
} from "../../app/services/nationalparkApi/nationalparkApi";
import "./home.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import bg from "../../assets/background.jpg";
import { FadeLoader } from "react-spinners";

const Home = () => {
  const { data } = useGetParksQuery();
  const { data: activities } = useGetParksThingsToDoQuery();

  if (!data || !activities) {
    return (
      <div className="flex flex-row justify-center items-center min-h-screen">
        <FadeLoader color="#282828" />
      </div>
    );
  }
  const background = bg;
  return (
    <div
      className="bg-no-repeat flex flex-row items-center relative min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-15"></div>
      <div className="flex-1 z-10 text-white lg:px-16 md:px-12 sm:px-8 px-6">
        <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl lg:mb-10 sm:mb-6 mb-3">
          {data.fullName}
        </h1>
        <p className="lg:text-lg sm:text-base text-sm font-bold text-justify ">
          {data.description}
        </p>
      </div>
      <div className="flex-1 lg:pr-10 md:pr-8 sm:pr-6 pr-4">
        <Splide
          options={{
            perPage: 3,
            height: 400,
            rewind: true,
            gap: 10,
            type: "loop",
            breakpoints: {
              1024: {
                perPage: 2,
                gap: 4,
              },
              640: {
                perPage: 1,
                gap: 3,
              },
            },
          }}
        >
          {activities.map((item, index) => (
            <SplideSlide key={index}>
              {item.images?.[0]?.url && (
                <Link
                  to={`/activities/${item.id}`}
                  state={{
                    image: item.images[0].url,
                    title: item.title,
                    longDescription: item.longDescription,
                    season: item.season,
                    activities: item.activities,
                  }}
                >
                  <div className="relative flex justify-center items-center">
                    <img
                      src={item.images[0].url}
                      alt={`Activity ${index}`}
                      style={{
                        objectFit: "cover",
                      }}
                      className="rounded-md lg:w-[260px] lg:h-[400px] md:w-[200px] md:h-[400px] sm:w-[140px] sm:h-[400px] w-[250px] h-[400px]"
                    />
                    <div className="hidden absolute bottom-[50%] lg:w-[130px] md:w-[130px] sm:w-[70px] w-[50px] lg:flex">
                      <p className="hidden text-white font-bold md:text-sm text-xs text-center lg:flex ">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Home;
