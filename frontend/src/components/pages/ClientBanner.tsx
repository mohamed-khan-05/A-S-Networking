import React from "react";

const ClientBanner = () => {
  const clients = [
    { name: "Cisco", logo: "NTT Data.png" },
    { name: "Outworx", logo: "Outworx.png" },
    { name: "PWC", logo: "PWC.png" },
    { name: "rewardsco", logo: "rewardsco.png" },
    { name: "Moses Mabhida Stadium", logo: "Moses Mabhida Stadium.png" },
  ];

  // TRICK 1: Double the array (exactly twice)
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative py-20 bg-white overflow-hidden border-y border-gray-100">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative w-full">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-2">
            Trusted by Industry Leaders
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Fades to hide the "edge" where logos appear/disappear */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex overflow-hidden">
          <div
            className="flex items-center"
            style={{
              /* Uses 'scroll' animation; no pause logic attached */
              animation: "scroll 30s linear infinite",
              display: "flex",
              width: "max-content",
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div key={index} className="flex-shrink-0 px-8">
                <div className="w-56 h-28 bg-white border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl flex items-center justify-center group">
                  <img
                    src={`/assets/images/Client Logos/${client.logo}`}
                    alt={`${client.name} logo`}
                    className="max-h-16 w-40 object-contain transition-all duration-500 scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientBanner;
