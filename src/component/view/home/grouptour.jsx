
const GroupData = [
    { id: 1, image: "/assets/images/Grouptour1.png", Name:"SMALL GROUPS", description: "12 people or fewer, so you can go where big groups can’t. Forget about big buses, that’s not our style." },
    { id: 2, image: "/assets/images/Grouptour2.png", Name:"UNIQUE", description:"No two tours are alike. Every itinerary is carefully crafted to offer the most rewarding experience."},
    { id: 3, image: "/assets/images/Grouptour3.png", Name:"Local", description:"100% local contacts. Direct cultural connections. We’ll immerse you in local culture, everywhere you go."},
    { id: 4, image: "/assets/images/Grouptour4.png", Name:"PERSONAL", description:"Be treated like a friend, not a customer. Every message you receive comes from a real person. You can even call us, too."},
    { id: 5, image: "/assets/images/Grouptour5.png", Name:"COMFORTABLE", description:"High quality transportation. Carefully chosen accommodation. Incredible Expert Tour Leaders on every single trip."},
    { id: 6, image: "/assets/images/Grouptour6.png", Name:"EDUCATIONAL", description:"Itineraries packed with genuine local experiences, providing a fascinating education every step of the way."}
]

const GroupCard = ({ group }) => {
    return (
      <div className="max-w-[488px] max-h-[400px] rounded-[20px] bg-white shadow-md flex flex-col items-center pt-[30px] pb-[20px]">
        <img
          src={group.image}
          alt={group.Name}
          className="h-[100px] w-[100px] object-contain"
        />
  
        <div className=" flex flex-col items-center p-5">
          <h3 className="font-inter text-[24px] font-bold text-[#2D2D2D]">
            {group.Name}
          </h3>
          <p className="pt-2 font-inter text-[22px] leading-[1.5] text-center text-[#2D2D2D]">
            {group.description}
          </p>
          
        </div>
        <div className="border border-[#1E365C] rounded-[20px] px-[20px] py-[10px]">
            <button className="text-[18px] font-inter font-semi-bold">Learn More</button>
        </div>
      </div>
    );
  };
  

const Grouptour = () => {
    return (
     <>
     <div className="flex flex-col items-center pt-[120px]">
        <span className="text-[34px] lg:text-[48px] font-inter font-bold">OUR TRIPS ARE NOT STANDARD</span>
        <span className="text-[34px] lg:text-[48px] font-inter font-bold text-[#E9482B]">GROUP TOURS</span>
        <p className="text-[24px] font-inter">Experience culture, wonder and fun like never before.</p>
     </div>
     <div className="grid grid-cols-1 gap-[50px] lg:gap-6 sm:px-[100px] md:px-[130px] lg:px-5 pt-[50px] lg:grid-cols-2 xl:grid-cols-3 ">
        {GroupData.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
     </>
    );
};

export default Grouptour ;