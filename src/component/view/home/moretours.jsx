import MoretourProps from "./shared/moretourprops"

const MoreData = [ 
    { id: 1, image: "/assets/images/moretours1.png", name: "WANDER ACROSS MEXICO", description: "Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!"},
    { id: 2, image: "/assets/images/moretours2.png", name: "WANDER TO VIETNAM", description: "Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!"},
    { id: 3, image: "/assets/images/moretours3.png", name: "WANDER ACROSS ROMANIA", description: "Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!"}
]

const Moretours = () => {
    return (

         <>
         <div className="container">
         <p className="font-inter text-[60px] flex flex-col gap-[20px] lg:text-[128px] text-[#2D2D2D] font-bold leading-none pt-[100px]">
          2025
          <br className="hidden lg:block" />
          TOURS
        </p>
         
    
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-[70px] lg:pt-[30px] gap-[50px] lg:gap-[20px]">
        {MoreData.map((more) => (
          <MoretourProps key={more.id} more={more} />
        ))}
      </div>
      </div>
         </>

    );
};

export default Moretours