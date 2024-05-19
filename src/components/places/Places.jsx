import { useState } from "react";
import { useGetParksPlacesQuery } from "../../app/services/nationalparkApi/nationalparkApi";
import PlaceItem from "../placeItem/PlaceItem";
import { FadeLoader } from "react-spinners";

const Places = () => {
  const { data } = useGetParksPlacesQuery();
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) {
    <div className="flex flex-row justify-center items-center min-h-screen">
      <FadeLoader color="#282828" />
    </div>;
  }

  const itemsPerPage = 5;

  const placesData = data || [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = placesData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center gap-5 my-10 mx-12 min-h-screen">
      <div className="flex-1 flex-row flex-wrap justify-between items-center gap-5">
        {currentItems.map((item, index) => {
          if (!item || !item.images || !item.images[0]) {
            return null;
          }
          return (
            <PlaceItem
              key={index}
              index={item.id}
              image={item.images[0].url}
              title={item.title}
              content={item.bodyText}
              listingDescription={item.listingDescription}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center sm:gap-2 gap-1 mt-5">
        {[...Array(Math.ceil(placesData.length / itemsPerPage))].map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`sm:px-3 sm:py-1 px-2 py-1 border border-gray-300 rounded hover:bg-gray-200 transform transition-transform duration-200 ${
                currentPage === index + 1 ? "scale-110 text-blue-700" : ""
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};
export default Places;
