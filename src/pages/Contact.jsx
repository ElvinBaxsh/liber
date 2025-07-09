import Banner from "../assets/img/baku-03.jpg";
import { Link } from "react-router-dom";

const WhyChoose = () => {
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

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-gray-500 mb-6">
            <Link
              to="/"
              className="text-orange-500 font-semibold hover:underline"
            >
              LIBER Travel
            </Link>{" "}
            &gt; Contact
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            More information & fast contact?
          </h2>

          <p className="text-gray-600 text-lg mb-2">
            Interested in one of our services or want to share your thoughts
            about a potential visit?
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Don’t hesitate to call, app or easily send us a message by e-mail.
            <br />
            Our LIBER Travel team is ready to serve you.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-10">
              <div className="grid sm:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Opening hours
                  </h3>
                  <table className="w-full text-left text-gray-700">
                    <tbody>
                      {[
                        ["Monday", "09:00 - 17:00"],
                        ["Tuesday", "09:00 - 17:00"],
                        ["Wednesday", "09:00 - 17:00"],
                        ["Thursday", "09:00 - 17:00"],
                        ["Friday", "09:00 - 17:00"],
                        ["Saturday", "10:00 - 16:00"],
                        ["Sunday", "Closed"],
                      ].map(([day, time], idx) => (
                        <tr key={idx} className="border-b">
                          <td className="py-1 font-medium">{day}</td>
                          <td className="py-1">{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Address
                  </h3>
                  <p className="text-gray-700">Baku, Azerbaijan</p>
                  <p className="mt-3">
                    Phone:{" "}
                    <a
                      href="tel:+994503652844"
                      className="text-blue-600 hover:underline"
                    >
                      +994 50 365 28 44
                    </a>
                  </p>
                  <p>
                    App:{" "}
                    <a
                      href="https://wa.me/+994503652844"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      click to WhatsApp
                    </a>
                  </p>
                  <p>
                    Mail:{" "}
                    <a
                      href="mailto:info@liber.az"
                      className="text-blue-600 hover:underline"
                    >
                      info@liber.az
                    </a>
                  </p>
                </div>
              </div>

              {/* Company details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Company details
                </h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>Official registration (KvK): 89633741</li>
                  <li>Tax registration: NL865048204B01</li>
                  <li>Certified by CNTA - ADS approved</li>
                  <li>IBAN: NL03 RABO 0304 2979 25</li>
                  <li>Bank: Rabobank</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">
                  Why LIBER Travel?
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Tailor-made travel itineraries</li>
                  <li>Local purchase & cost effective</li>
                  <li>Privately (family) owned</li>
                  <li>Leisure- & business travel</li>
                  <li>Flexible terms & conditions</li>
                  <li>Real and local experiences</li>
                </ul>
              </div>

              <div className="bg-orange-50 text-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Contact us</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">📧 info@liber.az</li>
                  {/* <li className="flex items-start gap-2">📞 +31 20 700 83 00</li> */}
                  <li className="flex items-start gap-2">
                    💬 +994 50 365 28 44 (WhatsApp)
                  </li>
                  <li className="flex items-start gap-2">
                    ⏰ Open weekdays 09.00 - 17.00 hrs
                  </li>
                </ul>
                <a
                  href="https://wa.me/+994503652844"
                  target="_blank"
                  className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-semibold text-sm"
                >
                  Request a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
