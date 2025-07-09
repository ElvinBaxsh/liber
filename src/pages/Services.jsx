import Banner from "../assets/img/baku-03.jpg"
import { Link } from "react-router-dom";
import cardImg1 from "../assets/img/bakuvacation1.jpg";
import cardImg2 from "../assets/img/bakuvacation1.jpg";
import cardImg3 from "../assets/img/bakuvacation1.jpg";
import cardImg4 from "../assets/img/bakuvacation1.jpg";
import cardImg5 from "../assets/img/bakuvacation1.jpg";
import cardImg6 from "../assets/img/bakuvacation1.jpg";

const Services = () => {
  return (
    <>
    <section
            id="about"
            className="relative min-h-[400px] bg-cover bg-center flex items-start justify-start px-6 pt-10 text-white"
            style={{ backgroundImage: `url(${Banner})` }} 
          >
            <div className="max-w-screen-xl w-full mx-auto">
              {/* <p className="text-sm md:text-base font-medium">About &gt;</p> */}
            </div>
          </section>
   
<section className="bg-white py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-500">
            <Link
              to="/"
              className="text-orange-500 font-semibold hover:underline"
            >
              LIBER Travel
            </Link>{" "}
            &gt; <span className="text-gray-700">Our Services</span>
          </p>
        </div>
      </section>

    <section className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto">
   


    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our services</h2>

    <p className="text-gray-600 text-lg leading-relaxed mb-4">
      With our family-owned DMC in Belgium, we provide a wide range of travel & tour services all across Belgium.
      All of our services are fully adjusted to the wishes & demands of our clients.
    </p>

    <p className="text-gray-600 text-lg leading-relaxed">
      Expect all kinds of travel services: from single transfers towards multi-country customized trips, it's up to you.
      Our team is ready to assist you.
    </p>
  </div>
</section>



     <section className="bg-gray-50 py-16 px-6">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg1} alt="Tours" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">Tours & Travel</h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          Our DMC is specialized in FIT and group travels. All our services are fully adjusted to your wishes & provided by our own travel agency. Expect a wide range of tour & transport services throughout Belgium.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg2} alt="Incentives" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">Incentives</h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          Looking for a true exploration of Belgium? With our local incentives, we create memories that last. From team bonding, luxury experiences to some ‘active’ days in the Belgium Ardennes. Enjoy our local experiences….
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg3} alt="Luxury" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">Luxury Travel</h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          If you are looking for the ‘best’ Belgium has to offer, we are at your disposal. Enjoy our exclusive network of the finest suppliers, private experiences & personal services. We often open doors that (normally) stay closed….
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg4} alt="Events" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">Event Management</h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          From intimate dinners to large-scale corporate events, our event management team ensures smooth execution. We cover every detail, leaving you to enjoy the moment stress-free.
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg5} alt="Transport" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">Transport Services</h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          We arrange all types of transport, from airport pickups to private car rentals and luxury buses. Safe, comfortable and always on time.
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-[450px] text-center transition-transform duration-300 hover:-translate-y-2">
      <img src={cardImg6} alt="Support" className="w-full h-48 object-cover" />
      <div className="flex flex-col justify-start flex-grow px-6 pt-4 pb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 min-h-[56px]">24/7 Support</h3>
        <p className="text-gray-600 text-md leading-relaxed line-clamp-[7]">
          Our support team is available around the clock to assist you before, during, and after your trip. Your peace of mind is our priority.
        </p>
      </div>
    </div>

  </div>
</section>

  <section className="relative h-[300px] flex items-center justify-center text-white overflow-hidden ">
        <img
          src={Banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-150"
        />

        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            How can we help you?
          </h1>
          <p className="text-base md:text-lg mb-6">
            Our team is ready to discuss your wishes & thoughts. Easily get in
            touch below.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-base font-semibold transition">
            Let’s start your journey
          </button>
        </div>
      </section>



      </>
  )
}

export default Services
