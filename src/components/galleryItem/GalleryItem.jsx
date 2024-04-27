/* eslint-disable react/prop-types */
const GalleryItem = ({ image, title, caption }) => {
  return (
    <div className="flex flex-col lg:w-[350px] lg:h-[600px] md:w-[270px] md:h-[580px] sm:w-[150px] sm:h-[250px] w-[150px] h-[200px] border rounded-md items-center py-5 md:gap-5 gap-3 md:shadow-lg">
      <img
        src={image}
        className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] rounded-md"
        alt=""
      />
      <div className="lg:w-[300px] md:w-[200px] w-[100px]">
        <h1 className="md:text-lg text-sm font-bold text-wrap text-center md:text-start">
          {title}
        </h1>
      </div>
      <div className="lg:w-[300px] md:w-[200px] hidden md:flex">
        <p className="md:text-base text-wrap text-xs">{caption}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
