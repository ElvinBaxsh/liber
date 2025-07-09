"use client";

import Slider from "react-slick";
import { useRef } from "react";
import homeData from "../data/homeData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardImg1 from "../assets/img/bakuvacation1.jpg";
import cardImg2 from "../assets/img/bakuvacation1.jpg";
import cardImg3 from "../assets/img/bakuvacation1.jpg";
import card1 from "../assets/icons/airport.png"
import card2 from "../assets/icons/transport.webp"
import card3 from "../assets/icons/hotel_2.png"

import card4 from "../assets/icons/istiqamet.png"
import card5 from "../assets/icons/interpreter.png"
import card6 from "../assets/icons/resturant.png"




const Hero = () => {
  const sliderRef = useRef(null);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <>
      <section id="home" className="relative text-white overflow-hidden">
        <Slider {...settings} ref={sliderRef} className=" ">
          {homeData.map((slide, idx) => (
            <div key={idx}>
              <div
                className="min-h-[600px] w-full flex items-center justify-center text-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.url})`,
                }}
              >
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                    <button
                      onClick={scrollToServices}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300"
                    >
                      Discover Azerbaijan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="bg-white text-gray-800 py-16 px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
            Enjoy our DMC Belgium services
          </h2>
          <p className="text-lg md:text-xl mb-6 text-left">
            With our DMC in Belgium, we specialize in providing high-quality,
            tailor-made travel experiences for individuals, groups, and
            corporate clients. With our extensive network of partners and local
            expertise, we ensure that every aspect of your trip is meticulously
            planned and executed to perfection.
          </p>
          <p className="text-lg md:text-xl mb-6 ">
            Our family-owned destination management company (DMC) in Belgium is
            specialized in private and group travel, incentives, luxury travel &
            local events all across Belgium.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-left">
            <strong>Why use our local agency?</strong> Expect local-insider
            knowledge, personal services, fast replies, 24/7 support, and
            well-detailed itineraries based on your interests & lifestyles. With
            our destination management services, we provide tours, incentives,
            corporate travel, events & luxury travel across Brussels & Belgium.
          </p>
          <p className="text-lg md:text-xl mt-6 leading-relaxed text-left">
            Curious how we make a difference with our DMC in Belgium?{" "}
            <a
              href="#contact"
              className="text-orange-500 underline hover:text-orange-600"
            >
              Explore our services
            </a>{" "}
            or directly contact one of our DMC staff members.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg1} alt="Tours" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">
          Tours & Travel
        </h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          Our DMC is specialized in FIT and group travels. All our services are fully adjusted to your wishes & provided by our own travel agency. Expect a wide range of tour & transport services throughout Belgium.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg2} alt="Incentives" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">
          Incentives
        </h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          Looking for a true exploration of Belgium? With our local incentives, we create memories that last. From team bonding, luxury experiences to some ‘active’ days in the Belgium Ardennes. Enjoy our local experiences….
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg3} alt="Luxury" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">
          Luxury Travel
        </h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          If you are looking for the ‘best’ Belgium has to offer, we are at your disposal. Enjoy our exclusive network of the finest suppliers, private experiences & personal services. We often open doors that (normally) stay closed….
        </p>
      </div>
    </div>

  </div>
</section>

<section className="bg-white py-30 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-16">
      We help you plan your travel
    </h2>

    <div className="flex flex-wrap justify-center items-start gap-8 md:gap-20 lg:gap-28">
      <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-auto mb-6">
        <img src={card1} alt="..." className="w-16 h-16 mb-3" />
        <p className="text-xl text-gray-700 text-center">Arrival airport</p>
      </div>

      <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-auto mb-6">
        <img src={card2} alt="..." className="w-16 h-16 mb-3" />
        <p className="text-xl text-gray-700 text-center">Transport</p>
      </div>

      <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-auto mb-6">
        <img src={card3} alt="..." className="w-16 h-16 mb-3" />
        <p className="text-xl text-gray-700 text-center">Hotels</p>
      </div>

      <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-auto mb-6">
        <img src={card4} alt="..." className="w-16 h-16 mb-3" />
        <p className="text-xl text-gray-700 text-center">Tours</p>
      </div>

      <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-auto mb-6">
        <img src={card5} alt="..." className="w-16 h-16 mb-3" />
        <p className="text-xl text-gray-700 text-center">
          Guide &<br />interpreter
        </p>
      </div>

      <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-auto mb-6">
        <img src={card6} alt="..." className="w-16 h-16 mb-3" />
        <p className="text-xl text-gray-700 text-center">Restaurants</p>
      </div>
    </div>
  </div>
</section>



    </>
  );
};

export default Hero;
