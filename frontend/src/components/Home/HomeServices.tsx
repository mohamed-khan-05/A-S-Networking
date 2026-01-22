// components/Services.tsx
import React, { useState, useEffect } from "react";

const HomeServices = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      id: 1,
      title: "Fibre Splicing",
      description:
        "Precision fibre optic splicing with fusion technology for minimal signal loss and maximum reliability. Perfect for backbone installations and network expansions.",
      icon: "⚡",
      features: ["Fusion Splicing", "OTDR Testing", "0.2dB Average Loss"],
      delay: "100ms",
      highlight: true,
    },
    {
      id: 2,
      title: "Fibre Cabling",
      description:
        "Professional fibre optic cable installation for indoor, outdoor, and aerial applications. We handle everything from single-mode to multi-mode fibre runs.",
      icon: "🔌",
      features: ["Structured Cabling", "Cable Management", "Pathway Design"],
      delay: "200ms",
      highlight: true,
    },
    {
      id: 3,
      title: "Network Testing",
      description:
        "Comprehensive fibre network testing and certification using advanced equipment to ensure optimal performance and industry compliance.",
      icon: "📊",
      features: ["End-to-End Testing", "Performance Reports", "Certification"],
      delay: "300ms",
    },
    {
      id: 4,
      title: "Termination Services",
      description:
        "Professional fibre optic termination with LC, SC, and ST connectors. Clean, precise terminations for flawless network connections.",
      icon: "🔗",
      features: ["Connector Installation", "Polishing", "Inspection"],
      delay: "400ms",
    },
    {
      id: 5,
      title: "Maintenance & Repair",
      description:
        "24/7 emergency fibre network maintenance and repair services. Rapid response teams ready to restore your connectivity.",
      icon: "🔧",
      features: [
        "Emergency Response",
        "Preventive Maintenance",
        "Fault Location",
      ],
      delay: "500ms",
    },
  ];

  const slides = [
    "Precision Fibre Optics",
    "Lightning-Fast Connections",
    "Zero Downtime Networks",
    "Signal Integrity Guaranteed",
    "Expert Splicing Services",
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* --- IT Style Image Background --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/images/BGHome.jpeg"
          alt="Network Infrastructure"
          /* Reduced blur to 'sm' and increased opacity to 40% to show the nice cabling detail */
          className="w-full h-full object-cover filter blur-[1px] scale-105 opacity-40"
        />
        {/* Adjusted gradient: lowered top opacity to 60% so the image isn't hidden by the white */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Sliding Text */}
        <div className="text-center mb-20">
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-[#004FCB] rounded-full mr-3 animate-pulse"></div>
              <span className="text-xs font-black tracking-[0.2em] text-[#002970] uppercase">
                Fibre Optic Specialists
              </span>
            </div>

          <div
            className="h-24 mb-8 overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {slides.map((slide, index) => (
              <h2
                key={index}
                className={`text-4xl md:text-5xl lg:text-7xl font-black absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === activeSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-[#002970]">{slide}</span>
              </h2>
            ))}
          </div>

          <div className="flex justify-center space-x-3 mt-8 mb-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  setIsHovered(true);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeSlide
                    ? "bg-[#004FCB] w-12"
                    : "bg-slate-200 w-4 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>

          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed font-medium">
            Professional fibre optic services for
            <span className="font-bold text-[#004FCB]">
              {" "}
              telecommunications
            </span>
            ,<span className="font-bold text-[#004FCB]"> data centers</span>,
            and{" "}
            <span className="font-bold text-[#004FCB]">
              enterprise networks
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
