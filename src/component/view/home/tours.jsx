import TourProps from "./shared/tourprops";

const ToursData = [
  { id: 1, image: "/assets/images/tours.png", name: "Wander Across Mexico" },
  { id: 2, image: "/assets/images/tours1.png", name: "Wander To Vietnam" },
  { id: 3, image: "/assets/images/tours2.png", name: "Wander Across Romania" },
];

const Tours = () => {
  return (
    <>
    <div className="container max-w-[1480px] mx-auto">
      <div className="pt-[100px]">
        <span className="font-inter text-[64px] lg:text-[128px] text-[#2D2D2D] font-bold leading-none text-[#1E365C]">
          2024
        </span>
          <span className="font-inter text-[64px] lg:text-[128px] text-[#2D2D2D] font-bold leading-none block ">
          TOURS
             </span>
      </div>

      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3 pt-[50px] lg:pt-[30px] gap-[30px] lg:gap-1">
        {ToursData.map((tour) => (
          <TourProps key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Tours;
