import Logo from "../../assets/img/logoFooter2.png";


import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>

    
  {/* Footer yuxarı hissəsinə SVG keçid */}
<div className="overflow-hidden leading-none rotate-180">
  <svg
    viewBox="0 0 1440 100"
    className="w-full h-[80px]"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
      fill="#0D1323" // Footer-in rənginə 100% uyğun olmalıdır
    />
  </svg>
</div>

<footer className="bg-[#0D1323] text-white py-10">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="flex flex-col items-center justify-center space-y-4 text-center sm:flex-row sm:justify-between sm:space-y-0">
      
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src={Logo}
          alt="Logo"
          style={{
            maxWidth: "180px",
            height: "auto",
            objectFit: "contain",
            backgroundColor: "transparent",
          }}
        />
      </div>

      {/* Contact */}
      <div className="text-xl text-gray-700 dark:text-gray-200 space-y-1 sm:text-right">
        <p>
          <a
            href="https://wa.me/+994503652844"
            target="_blank"
            className="hover:opacity-75"
          >
            +994 50 365 28 44
          </a>
        </p>
        <p>
          <a href="mailto:info@liber.az" className="hover:opacity-75">
            info@liber.az
          </a>
        </p>
      </div>
    </div>

    <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
      &copy; 2025. LIBER Travel. All rights reserved.
    </p>
  </div>
</footer>

</>

  );
};

export default Footer;
