import { IoLocationOutline } from "react-icons/io5";


const ReviewData = [
    { id :1, text:"Thank you for such a well thought out and memorable trip. The sights and people of Morocco are wonderful. I appreciated you feeding my nerdy self with information on the geography, animals and plants of Morocco. The meals were laid back and wonderful and I appreciated the pace. Truly memorable. Thank you for your hard work, phenomenal organization and attention to the needs of the group.", name:"Kathy J.", country:"Morocco"},
    { id :2, text:"Wandering through Romania was an incredible trip in every way: great sights, great people, and everything was very well-organized. This was an excellent trip in which we got to visit many beautiful places (both well-known and off the beaten path) all while in the company of a small, cohesive group of like-minded travelers. I’ve traveled to 40+ countries and this trip still stands out in my mind as one of the best I’ve been on. I would highly recommend it!", name:"Nadica A.", country:"Romania",},
    { id :3, text:"The trip was amazing, on every level. Your experience and curiosity has created an amazing itinerary, and your willingness to accommodate the random wishes that came up was above and beyond. India is just endless fascination. The accommodations were great, and as someone that doesn’t really care about the food experience…it was great!!", name:"tricia S.", country:"Morocco",}
]

const ReviewCard = ({review}) => {
    return (
        <>
        <div className="flex flex-col items-center pt-[30px] p-[40px] border border-black-200 rounded-[20px] shadow-2xl" >
            <img className="max-w-[58px]" src="/assets/images/reviewicon.png" alt="reviewicon-image" />
            <p className="text-[18px] lg:text-[21px] font-inter pt-[20px] text-center"> {review.text}</p>
            <p className="font-inter text-[20px] font-bold pt-[20px]">{review.name}</p>
            <p className="text-center text-[#D6D6D6] overflow-hidden">_________________________________________________________________</p>
            <div className="flex gap-2 pt-[10px]">
            <IoLocationOutline className="text-[25px] text-[#E9482B]"/>
            <p className="text-[18px] text-[#8F8F8F]">{review.country}</p>
            </div>
        </div>
        </>
    );
};


const Reviews = () => {
    return ( 
       
        <> 
        <div className="container">
            <div className=" flex items-center lg:flex flex-col pt-[120px]">
            <span className="text-[48px] font-inter font-bold">WHAT OUR CLIENT SAYS</span>
            <span className="text-[48px] font-inter font-bold text-[#E9482B]">ABOUT US</span>
            </div>

            <div className="grid grid-cols-1 gap-[50px] lg:gap-6 px-5 pt-[50px] lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {ReviewData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
        </div>
        </>
    );
};

export default Reviews ; 