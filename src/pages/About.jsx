import Banner from "../assets/img/baku-03.jpg";
import { Link } from "react-router-dom";

const About = () => {
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
            &gt; <span className="text-gray-700">Our Story</span>
          </p>
        </div>
      </section>

     <section className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
    <div className="lg:col-span-2">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Our story</h2>
      <p className="text-gray-700 mb-6 leading-relaxed text-xl">
        It all started in late 2014, during which time we needed (with our
        previous jobs) the help of some local DMC’s in Amsterdam. Despite
        asking for local, authentic & interesting sites and experiences,
        almost all the DMCs gave us regular ‘touristic’ sightseeing
        programs that didn’t make any impression at all. With our ‘Dutch’
        business mentality, we saw an opportunity we couldn’t ignore...
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed text-xl">
        Only 2 months later, we launched our DMC & travel agency in
        Amsterdam, with a full focus on local, personal & authentic
        experiences. Quickly, a number of local, authentic and mostly
        family-owned suppliers joined our ZOYO network...
      </p>
      <p className="text-gray-700 leading-relaxed text-xl">
        This year, we will celebrate our 9th anniversary with the team
        that is currently working for our Dutch & Belgium label. We are
        happy to introduce Thomas, Jimmin, Aline & Alice.
      </p>
    </div>

    <div className="space-y-6">
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Why LIBER Travel?</h3>
        <ul className="space-y-2 text-sm list-disc list-inside">
          <li>Tailor-made travel itineraries</li>
          <li>Local purchase & cost effective</li>
          <li>Privately (family) owned</li>
          <li>Leisure- & business travel</li>
          <li>Flexible terms & conditions</li>
          <li>Real and local experiences</li>
        </ul>
      </div>

      <div className="bg-orange-50 text-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Contact us</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start">
            <span className="mr-2">📧</span> info@liber.az
          </li>
          <li className="flex items-start">
            <span className="mr-2">📞</span> +994503652844
          </li>
          <li className="flex items-start">
            <span className="mr-2">⏰</span> Open weekdays 09.00 - 17.00 hrs (GMT +1)
          </li>
        </ul>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-semibold text-sm">
          <a
            href="https://wa.me/+994503652844"
            target="_blank"
            className="hover:opacity-75"
          >
            Request a quote
          </a>
        </button>
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
  );
};

export default About;
