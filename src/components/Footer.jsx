import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const links = {
    github: "https://github.com/Aman0413",
    linkedin: "https://www.linkedin.com/in/aman-verma-1a459020b/",
    instagram: "https://instagram.com/being_aman_o4?igshid=MzNlNGNkZWQ4Mg==",
  };
  return (
    <div className="border ">
      <footer className="relative bg-gray-100 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <div className="mt-6 lg:mb-0 mb-6">
                <a href={links.github}>
                  <button
                    className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </a>
                <a href={links.linkedin}>
                  <button
                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab  fa-linkedin"></i>
                  </button>
                </a>
                <a href={links.instagram}>
                  <button
                    className="bg-white text-[#C13584] shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">{year}</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  by{" "}
                </a>
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Aman
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
