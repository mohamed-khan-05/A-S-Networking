import React, { useState } from "react";

const ClientBanner = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Client logos data
  const clients = [
    { name: "Cisco", color: "text-blue-700", bg: "bg-blue-50" },
    { name: "IBM", color: "text-blue-800", bg: "bg-slate-50" },
    { name: "Microsoft", color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Amazon", color: "text-slate-700", bg: "bg-slate-50" },
    { name: "Google", color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Oracle", color: "text-red-700", bg: "bg-red-50" },
    { name: "VMware", color: "text-blue-600", bg: "bg-slate-50" },
    { name: "Dell", color: "text-blue-400", bg: "bg-blue-50" },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative py-12 bg-white overflow-hidden border-y border-gray-100">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
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
        <div className="text-center mb-8">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Our Global Partners
          </h2>
        </div>

        {/* FADE OVERLAYS REMOVED FROM HERE
         */}

        <div className="flex w-full">
          <div
            className="flex items-center space-x-12 py-4"
            style={{
              animation: !isPaused ? "scroll 30s linear infinite" : "none",
              display: "flex",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedClients.map((client, index) => (
              <div key={index} className="flex-shrink-0">
                <div
                  className={`
                    px-10 py-6 rounded-2xl
                    ${client.bg}
                    border border-gray-100
                    shadow-sm hover:shadow-md
                    transition-all duration-300
                    flex items-center justify-center
                    group cursor-pointer
                  `}
                >
                  <span
                    className={`text-xl font-extrabold ${client.color} opacity-70 group-hover:opacity-100 transition-opacity`}
                  >
                    {client.name}
                  </span>
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