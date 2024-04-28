import { FaArrowAltCircleRight } from "react-icons/fa";

const CategoriesCard = ({ category }) => {
  const { name, description, image_URL } = category || {};

  return (
    <div
      style={{
        backgroundImage: `url(${image_URL || "/src/assets/categories/categoryDefault.jpg"})`,
      }}
      className="flex  rounded-lg bg-cover text-white"
    >
      <div className="flex grow flex-col gap-6 rounded-lg bg-[#665DCD] bg-opacity-85 p-8 ">
        <h3 className="text-3xl font-bold uppercase md:min-h-16 xl:min-h-20 2xl:min-h-0">
          {name}
        </h3>
        <p className=" text-sm font-normal lg:min-h-36 xl:min-h-24 2xl:min-h-0">
          {description}
        </p>
        <div className=" flex items-center gap-3 font-bold uppercase">
          <p className="">Expolore</p>
          <FaArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
