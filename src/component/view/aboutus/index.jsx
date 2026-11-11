import React from 'react'
import Aboutdata from "./aboutdata";

const aboutSections = [
    {
      id: 1,
      image: "/assets/aboutus_images/hero1.png",
      title: "Derek Baron",
      role: "CEO",
      description: `Travel is basically all I know. After graduating university in 1999, I took a 3 month trip to Southeast Asia but I decided that 3 months wasn’t enough and I’ve been traveling all over the world ever since.
  
  In 2010, I started the travel blog, WanderingEarl.com, to share my thoughts about what I was experiencing. By 2012, I was receiving regular emails from readers asking me to organize trips to some of my favorite countries.
  
  And so I did.
  
  What started off as 1 trip to India back in 2012, has now become a long list of awesome Wandering Earl Tours each year, with new destinations and itineraries being added all the time!`,
      reverse: false,
    },
  
    {
      id: 2,
      image: "/assets/aboutus_images/hero2.png",
      title: "Elizabeth Aceves",
      role: "Tour Manager",
      description: `Travel has always been my greatest passion. I’ve worked in different countries since I was 18, going on adventures in Europe and Africa, volunteering in Canada and even working on a cruise ships so that I could get paid to travel.
  
  I always focus on enjoying the simple things in life, such as an aimless wander around a new place, watching a beautiful sunset, people-watching and sharing a smile with anyone that crosses my path.
  
  As a Tour Manager at Wandering Earl Tours, I get excited every time someone books a trip, as I love to play a role in helping our guests achieve one of their travel goals!.`,
      reverse: true,
    },
  
    {
      id: 3,
      image: "/assets/aboutus_images/hero3.png",
      title: "Ivan Radchik",
      role: "Tour Director",
      description: `Since I was a little kid, I had a deep connection with stories about adventurers. I heard about people that had gone to deserts with dunes taller than skyscrapers, to cities where people needed boats to go from one house to another, and of forests with trees as far as the eye can see.
  
  All of the decisions I made since then have been directed to travel, and so here I am, being a full-time digital nomad, traveling to all of the places I had once only heard of. I am now an adventurer of sorts, and I wouldn’t change it for anything.
  
  Now, I can not only achieve this dream for myself, but working with Wandering Earl Tours has helped me bring this dream to others, which I’m extremely happy about!`,
      reverse: false,
    },
  
    {
      id: 4,
      image: "/assets/aboutus_images/hero4.png",
      title: "Sakai Naismith",
      role: "Tour Leader",
      description: `With over 20 years of travel experience and almost as many years of guiding around the world, I’m ALWAYS prepared for any kind of adventure, even on a minute’s notice. From Vietnam to Morocco, Jordan to Cambodia, Egypt to Indonesia and so many unbelievable destinations in between…just name a place and I’m ready to go!
  
  The way I see it – the more we travel, the deeper connection we have with our planet and all the cultures that exist, leading to more sustainable choices to ensure it all survives.
  
  I’ve been leading small group trips for Wandering Earl Tours for the past 7 years, in Morocco, Jordan, Egypt, India, SE Asia and more!`,
      reverse: true,
    },
  
    {
      id: 5,
      image: "/assets/aboutus_images/hero5.png",
      title: "Dara Leonard",
      role: "Tour Leader",
      description: `I first traveled overseas after graduating high school and I haven’t stopped! I’ve traveled to 49 states and over 70 countries (I am still missing Ohio!). After working in restaurant and retail management for many years I decided it was time to fulfill my dream of traveling. I packed up all my belongings, sold my house and embarked on a 13+ month trip around the world.
  
  After running into a tour group on a small island in southern Laos, I filed it away thinking that would be a great job. When I came back to the US, I then applied to be a tour leader. Six months later I was in Vietnam training for my dream job.
  
  This career has taken me to all corners of the globe and I now love working for Wandering Earl and sharing my passion for travel with everyone on these trips!`,
      reverse: false,
    },
  
    {
      id: 6,
      image: "/assets/aboutus_images/hero6.png",
      title: "Luna Rodriguez",
      role: "Tour Leader",
      description: `It is no secret to those who know me that I am the happiest while on the road! I studied tourism in college and I’ve worked for more than 12 years in the tourism industry, only to discover that tour leading is one of my favorite things to do!
  
  I seek adventure when I travel and I always find ways to get out of my comfort zone. I have lived in several cities across four continents, and I am not planning to stop discovering our beautiful world, learning about new cultures, speaking different languages and blending in with locals.
  
  I’ve lead tours in Africa, Europe, the Middle East and more, and I genuinely look forward to seeing happy faces while in the unique destinations we travel to on Wandering Earl tours!`,
      reverse: true,
    },
  
    {
      id: 7,
      image: "/assets/aboutus_images/hero7.png",
      title: "Stephanie Lange",
      role: "Tour Leader",
      description: `I am happiest when I’m outside and on an adventure! Travel is truly my greatest passion and when I’m not on a trip, I’m dreaming of the next one. From spending months backpacking through Europe and Southeast Asia to taking countless road trips around North America, I always try to find exciting ways to get off the beaten path and immerse myself in each destination.
  
  I believe unique and meaningful experiences are essential elements of any successful trip and work hard to ensure all guests leave our tours feeling the same.
  
  Some of my favorite things include photography, cycling, and spending time in nature. I’m also easily excited by anything related to food – especially spicy Thai meals and delicious local beers!`,
      reverse: false,
    },
  ];
  
  const Abouttour = [
    {
      id: 1,
      title: "WANDER ACROSS MEXICO",
      description: "Join our unique journey into the heart of Mexico! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
      image: "/assets/aboutus_images/tour11.png",
      spotsLeft: 2,
      status: "available",
      country:"Mexico",
      buttonText: "Details",
    },
    {
      id: 2,
      title: "WANDER ACROSS VIETNAM",
      description: "Join our unique journey into the heart of Vietnam! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",
      image: "/assets/aboutus_images/tour12.png",
      spotsLeft: 0,
      status: "soldOut",
      country:"Vietnam",
      buttonText: "Add to Waitlist",
    },
    {
      id: 3,
      title: "WANDER ACROSS ROMANIA",
      description: "Join our unique journey into the heart of Romania! We'll dive into the rich history, flavorful cuisine, city and village life and vibrant cultures in a style you won't want to miss!",

      image: "/assets/aboutus_images/tour13.png",
      spotsLeft: null,
      status: "available",
      country:"Romania",
      buttonText: "Details",
    },
]

const Index = () => {
  return (
    <>
   <div className="bg-[#1E365C]">
  <div className="container max-xl:px-5">
    <div className="max-w-[1760px] mx-auto flex justify-evenly pt-[80px] max-md:flex-col max-md:gap-6 max-md:pt-[40px]">
      <p className="font-inter font-bold text-[64px] text-white w-1/2 max-lg:text-[48px] max-md:text-[36px] max-md:w-full max-lg:text-center">
        ABOUT US
      </p>
      <p className="text-white font-inter text-[20px] w-1/2 max-lg:text-[17px] max-md:text-base max-md:w-full">
        We’re a small team of people who are passionate about travel.
        Our goal is to create unique, inspiring, and thoughtful tours
        that surprise and delight you. We’re just as excited as you
        are about travel and we make it our mission to ensure that on
        one of our tours, you’re thrilled from start to finish!
      </p>
    </div>

    <img
      src="/assets/aboutus_images/about1.png"
      alt="image"
      className="w-full h-full object-cover mt-10 max-md:mt-6"
    />
  </div>
</div>

<div className="max-w-[1504px] mx-auto pt-[150px] px-5 flex items-start justify-between gap-10 max-xl:flex-col max-xl:pt-[100px] max-md:pt-[60px] max-md:gap-8">

  {/* Left text section */}
  <div className="max-w-[614px] w-full max-xl:max-w-full">
    <p className="text-[20px] font-inter max-md:text-base">
      Our team at Wandering Earl Tours has a strong desire to bring
      rich cultural connections around the world to people who would
      appreciate them the most. And we hold this mission at the core
      of everything we do.
    </p>

    <p className="pt-[15px] text-[20px] font-inter max-md:text-base">
      Focused, purposeful and incredibly rewarding trips are the goal,
      and each member of our team brings their own insights, skills and
      enthusiasm to the table. When combined, our goal is achieved,
      with unique Wandering Earl Tours that we are all genuinely
      excited to offer!
    </p>
  </div>

  {/* Right images section */}
  <div className="relative w-full max-w-[762px] h-[600px] shrink-0 max-xl:h-auto max-xl:aspect-[762/600] max-xl:self-center">
    <img
      src="/assets/aboutus_images/about2.png"
      alt="image 1"
      className="absolute top-0 left-0 w-[317px] h-[411px] object-cover z-10 max-xl:w-[41.6%] max-xl:h-[68.5%]"
    />
    <img
      src="/assets/aboutus_images/about3.png"
      alt="image 2"
      className="absolute top-[200px] left-[167px] w-[574px] h-[364px] object-cover z-20 max-xl:top-[33.3%] max-xl:left-[21.9%] max-xl:w-[75.3%] max-xl:h-[60.7%]"
    />
    <img
      src="/assets/aboutus_images/about4.png"
      alt="image 3"
      className="absolute top-[60px] left-[340px] w-[415px] h-[283px] object-cover z-30 max-xl:top-[10%] max-xl:left-[44.6%] max-xl:w-[54.5%] max-xl:h-[47.2%]"
    />
  </div>

</div>

<div className='bg-[#E9482B] h-[578px] relative max-xl:h-auto max-xl:pb-[60px] max-md:pb-10'>
<div className='container pt-[100px] max-xl:px-5 max-md:pt-[60px]'>
    <div className='max-w-[742px] max-xl:max-w-full'>
        <p className='font-inter text-white text-[48px] font-bold max-md:text-[32px] max-lg:text-center'>OUR GLOBAL FAMILY</p>
        <p className='font-inter text-white text-[20px] pt-[40px] max-md:text-base max-md:pt-6'>Our team also consists of our incredible travel partners,
             friends and endless local contacts in every country where
              we operate. These wonderful people work extremely hard to
               help us create and run our unique trips. We could not do
                this without all of them as it takes such a dedicated and
             global team to create our rewarding travel experiences!</p>
        <button className='mt-[40px] py-[15px] px-[30px] text-white border-rounded rounded-[30px] bg-[#1E365C] max-md:mt-6 max-md:py-3 max-md:px-6 max-lg:block max-lg:mx-auto'>Contact Us Today</button>
    </div>
</div>
    <div className='absolute top-0 right-0 max-xl:static max-xl:mt-10 max-xl:w-full'>
        <img src="/assets/aboutus_images/about5.png" alt="" className='max-xl:w-full max-xl:h-auto max-xl:object-cover' />
    </div>
</div>
<div className='container pt-[100px]'>
    <div className='max-w-[1504px] mx-auto flex justify-center gap-1'>
        <span className='text-[48px] text-black font-inter font-bold'>
            OUR
            </span>
            <span className='text-[48px] text-[#E9482B] font-inter font-bold'>
            TEAM
            </span>
        </div>


        <div className="max-w-[1504px] mx-auto px-5 pt-[60px] md:pt-[100px]">
  {aboutSections.map((section) => (
    <div
      key={section.id}
      className={`flex flex-col md:flex-row ${
        section.reverse ? "md:flex-row-reverse" : ""
      } items-start md:max-lg:!items-center lg:max-xl:!items-center justify-between gap-6 md:gap-10 mb-[50px] md:mb-[80px]`}
    >
      {/* Image: always first on mobile */}
      <div className="w-full md:w-[45%] xl:w-[622px] md:shrink-0">
        <img
          src={section.image}
          alt={section.title}
          className="w-full aspect-[4/3] md:aspect-[622/550] object-cover rounded-[20px]"
        />
      </div>

      {/* Description, title and role */}
      <div className="w-full md:flex-1 xl:max-w-[762px] flex flex-col md:pt-[40px] md:max-lg:!pt-0 lg:max-xl:!pt-0">
        <p className="text-base md:text-[17px] xl:text-[20px] font-inter whitespace-pre-line leading-relaxed">
          {section.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 mt-5 md:mt-6">
          <h3 className="font-bold text-[16px]">{section.title}</h3>
          <p className="text-[14px] text-gray-500">{section.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>

</div>

<div className="container max-w-[1504px] mx-auto max-xl:px-5">
  <p className="text-[128px] max-lg:text-[80px] max-md:text-[48px] max-lg:text-center font-inter font-bold">TOURS</p>

  <div className="grid grid-cols-3 gap-5 pt-[30px] justify-items-center max-xl:grid-cols-2 max-md:grid-cols-1 max-md:gap-6">
    {Abouttour.map((abouttour) => (
      <Aboutdata key={abouttour.id} abouttour={abouttour} />
    ))}
  </div>
</div>
    </>
  )
}

export default Index ;