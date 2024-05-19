
import { useGetParksFeesQuery } from "../../app/services/nationalparkApi/nationalparkApi";
import FeeItem from "../feeItem/FeeItem";
import { FadeLoader } from "react-spinners";

const Fees = () => {
  const { data } = useGetParksFeesQuery();

  if (!data) {
    return (
      <div className="flex flex-row justify-center items-center min-h-screen">
        <FadeLoader color="#282828" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-3/5">
        {data.entranceFeeDescription ? (
          <div className="mb-5">
            <h1 className="md:text-xl text-base font-bold mb-3">
              Entrance Fee (Standard Entrance Pass)
            </h1>
            <p className="md:text-base text-sm text-justify">
              {data.entranceFeeDescription}
            </p>
          </div>
        ) : (
          <p className="mb-5">No entrance fee description available</p>
        )}
        {data.fees.slice(0, 10).map((item, index) => {
          if (
            !item ||
            !item.entranceFeeType ||
            !item.cost ||
            !item.description
          ) {
            return null;
          }
          return (
            <FeeItem
              key={index}
              entranceFeeType={item.entranceFeeType}
              cost={item.cost}
              description={item.description}
            />
          );
        })}
        {data.timedEntryDescription ? (
          <div className="my-5">
            <h1 className="md:text-xl text-base font-bold mb-3">
              Reservations and Timed Entry
            </h1>
            <p className="md:text-base text-sm">{data.timedEntryDescription}</p>
          </div>
        ) : (
          <p className="mb-5">No timed entry fee description available</p>
        )}
        {data.passes ? (
          <div className="">
            <h1 className="md:text-xl text-base font-bold mb-3">
              {data.passes[0].category}
            </h1>
            <p className="md:text-base text-sm text-justify">
              {data.passes[0].description}
              <br />
              Cost: ${data.passes[0].cost}
            </p>
          </div>
        ) : (
          <p className="mb-5">No timed entry fee description available</p>
        )}
      </div>
    </div>
  );
};

export default Fees;
