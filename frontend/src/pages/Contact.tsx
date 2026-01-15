import React from 'react';

const Contact: React.FC = () => {
  // Highly specific networking & cabling phrases
  const networkPhrases = [
    "Fiber Optic Fusion Splicing",
    "Low Voltage Cable Installation",
    "Cat6A & Cat7 Structured Cabling",
    "OSP & ISP Fiber Deployment",
    "Data Center Rack & Stack",
    "Network Certification & Testing",
    "Fiber Optic Termination",
    "Underground Conduit Installation"
  ];

  // Tripling the array ensures a perfectly seamless loop even on ultra-wide screens
  const displayPhrases = [...networkPhrases, ...networkPhrases, ...networkPhrases];

  return (
    <div className="bg-white min-h-[90vh]">
      
      {/* --- Sliding Header Section --- */}
      <div className="bg-slate-50 py-16 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h2 className="text-base font-semibold text-sky-500 tracking-widest uppercase">
            Contact Our Field Team
          </h2>
        </div>

        {/* The Marquee Row */}
        <div className="relative flex overflow-hidden bg-white py-8 border-y border-gray-200 shadow-sm">
          {/* Edge Fades for a "Materializing" effect */}
          <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent"></div>

          <div className="animate-marquee flex whitespace-nowrap items-center">
            {displayPhrases.map((text, index) => (
              <div key={index} className="flex items-center mx-12">
                <span className="text-2xl md:text-4xl font-black text-slate-800 tracking-tighter uppercase italic">
                  {text}
                </span>
                
                {/* Custom Networking "Splice" Separator */}
                <div className="ml-24 flex items-center space-x-3">
                  <div className="h-[2px] w-12 bg-sky-500/30"></div>
                  <div className="h-3 w-3 rounded-full border-2 border-sky-500 bg-white"></div>
                  <div className="h-[2px] w-12 bg-sky-500/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center px-4">
            <p className="text-gray-500 font-medium max-w-xl mx-auto">
              Our technicians are ready for dispatch. Contact us for fiber splicing, cable runs, and infrastructure audits.
            </p>
        </div>
      </div>

      {/* --- Info Cards Grid --- */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
          
          {/* Email Card */}
          <div className="flex flex-col items-center p-10 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-sky-500 text-white mb-6 shadow-lg shadow-sky-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
            <p className="mt-3 text-center text-gray-500">Bidding, RFPs, and blueprints.</p>
            <a href="mailto:info@company.com" className="mt-6 text-sky-500 font-bold hover:text-sky-600 transition-colors">
              info@company.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center p-10 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-sky-500 text-white mb-6 shadow-lg shadow-sky-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Direct Line</h3>
            <p className="mt-3 text-center text-gray-500">Speak with a project manager.</p>
            <a href="tel:+11234567890" className="mt-6 text-sky-500 font-bold hover:text-sky-600 transition-colors">
              +1 (123) 456-7890
            </a>
          </div>

          {/* Hours Card */}
          <div className="flex flex-col items-center p-10 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-sky-500 text-white mb-6 shadow-lg shadow-sky-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
            <p className="mt-3 text-center text-gray-500">
              Monday – Friday <br />
              9:00 AM – 8:00 PM
            </p>
            <span className="mt-6 text-sky-500 font-bold uppercase tracking-widest text-[10px] bg-sky-50 px-2 py-1 rounded">Technicians On Call</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;