
import { useGetParksQuery } from "../../app/services/nationalparkApi/nationalparkApi";
import GalleryItem from "../galleryItem/GalleryItem";
import { FadeLoader } from "react-spinners";

const Gallery = () => {
  const { data } = useGetParksQuery();
  if (!data) {
    return (
      <div className="flex flex-row justify-center items-center min-h-screen">
        <FadeLoader color="#282828" />
      </div>
    );
  }
  const gallery = data && data.images ? data.images : [];

  return (
    <div className="flex flex-row flex-wrap justify-center items-center md:gap-10 gap-5 md:my-10 my-5 min-h-screen">
      {gallery.map((item, index) => {
        if (!item || !item.url || !item.title) {
          return null;
        }
        return (
          <GalleryItem
            key={index}
            image={item.url}
            title={item.title}
            caption={item.caption}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
