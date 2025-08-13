import React from "react";
const Past = ({ title, description, image }) => {
    return (
        <div className="bg-[#FDFAF6] text-black md:bg-[#FDFAF6] md:text-black">
            <hr className="mx-3 border-t border-gray-700 max-w-6xl mx-auto mt-6   md:w-9/10 md:border-t md:border-gray-700 md:max-w-6xl md:mx-auto md:mt-6" />
            <div className="max-w-6xl mb-2 mx-auto  mx-3  text-sm flex justify-between items-center   md:max-w-6xl md:mx-auto md:mt-1  md:text-lg md:flex md:justify-between md:items-center">
                <span className="font-cormorant font-normal">Past Clients</span>
                <span>02</span>
            </div>

            <div className="px-8 max-w-5xl mx-auto text-center md:max-w-5xl md:mx-auto md:text-center">
                <h2 className="text-xl md:text-5xl font-cormorant font-medium  mb-1   md:font-cormorant md:font-medium  md:mb-1">
                    Highlighting Projects
                </h2>
                <h2 className="text-xl md:text-5xl font-cormorant font-medium mb-4 md:font-cormorant md:font-medium md:mb-4">
                    That Define Who We Are-
                </h2>
                <h3 className="text-sm font-dosis font-normal mb-2 max-w-3xl mx-auto md:text-lg md:font-dosis md:font-normal md:mb-2 md:max-w-3xl md:mx-auto">
                    Everything you need to know about our showcased projects, process, and results.
                </h3>
                <h3 className="text-sm font-dosis font-normal mb-20 max-w-3xl mx-auto md:text-lg md:font-dosis md:font-normal md:mb-20 md:max-w-3xl md:mx-auto">
                    Want to see more? Explore our portfolio or connect with our team for details on any project featured here.
                </h3>

            </div>
        </div>

    );
};

export default Past;
