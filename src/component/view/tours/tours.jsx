import Toursdata from "./toursdata";


const tour = [
    {
      id: 1,
      title: "WANDER ACROSS MEXICO",
      image: "/assets/tours_images/image1.png",
      spotsLeft: 2,
      status: "available",
      buttonText: "Details",
    },
    {
      id: 2,
      title: "WANDER ACROSS MEXICO",
      image: "/assets/tours_images/image2.png",
      spotsLeft: null,
      status: "available",
      buttonText: "Details",
    },
    {
      id: 3,
      title: "WANDER ACROSS MEXICO",
      image: "/assets/tours_images/image3.png",
      spotsLeft: 0,
      status: "soldOut",
      buttonText: "Add to Waitlist",
    },
    {
      id: 4,
      title: "WANDER ACROSS MEXICO",
      image: "/assets/tours_images/image4.png",
      spotsLeft: 1,
      status: "available",
      buttonText: "Details",
    },
  {
      id: 5,
      title: "WANDER ACROSS MEXICO",
      image: "/assets/tours_images/image5.png",
      spotsLeft: 0,
      status: "soldOut",
      buttonText: "Add to Waitlist",
    },
    {
      id: 6,
      title: "WANDER ACROSS MEXICO",
      image: "/assets/tours_images/image6.png",
      spotsLeft: null,
      status: "available",
      buttonText: "Details",
    },
    {
      id: 7,
      title: "WANDER ACROSS MEXICO",
      image: "/assets/tours_images/image1.png",
      spotsLeft: null,
      status: "available",
      buttonText: "Details",
    },
  
    {
      id: 8,
      title: "WANDER ACROSS MEXICO",
      image: "/assets/tours_images/image2.png",
      spotsLeft: null,
      status: "available",
      buttonText: "Details",
    }, 
]

const Tours = () => {
    return (
      <>
        <div className="container">
            <div className="flex justify-center items-center font-inter font-bold text-[48px]">
                <p className="text-[#E9482B]">2024</p>
                <p className="text-[black]">TOURS</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center pt-[50px] lg:pt-[30px] gap-[30px] lg:gap-1">
                {tour.map((tour) => (
                    <Toursdata key={tour.id} tour={tour} />
                ))}
            </div>
        </div>
      </>
    );
  };
  
  export default Tours;