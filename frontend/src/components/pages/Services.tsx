// components/Services.tsx
import React, { useState, useEffect } from 'react';

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      id: 1,
      title: "Fibre Splicing",
      description: "Precision fibre optic splicing with fusion technology for minimal signal loss and maximum reliability. Perfect for backbone installations and network expansions.",
      icon: "⚡",
      features: ["Fusion Splicing", "OTDR Testing", "0.2dB Average Loss"],
      color: "from-blue-500 to-cyan-500",
      delay: "100ms",
      highlight: true
    },
    {
      id: 2,
      title: "Fibre Cabling",
      description: "Professional fibre optic cable installation for indoor, outdoor, and aerial applications. We handle everything from single-mode to multi-mode fibre runs.",
      icon: "🔌",
      features: ["Structured Cabling", "Cable Management", "Pathway Design"],
      color: "from-blue-600 to-indigo-500",
      delay: "200ms",
      highlight: true
    },
    {
      id: 3,
      title: "Network Testing",
      description: "Comprehensive fibre network testing and certification using advanced equipment to ensure optimal performance and industry compliance.",
      icon: "📊",
      features: ["End-to-End Testing", "Performance Reports", "Certification"],
      color: "from-sky-500 to-blue-400",
      delay: "300ms"
    },
    {
      id: 4,
      title: "Termination Services",
      description: "Professional fibre optic termination with LC, SC, and ST connectors. Clean, precise terminations for flawless network connections.",
      icon: "🔗",
      features: ["Connector Installation", "Polishing", "Inspection"],
      color: "from-indigo-400 to-blue-500",
      delay: "400ms"
    },
    {
      id: 5,
      title: "Maintenance & Repair",
      description: "24/7 emergency fibre network maintenance and repair services. Rapid response teams ready to restore your connectivity.",
      icon: "🔧",
      features: ["Emergency Response", "Preventive Maintenance", "Fault Location"],
      color: "from-cyan-500 to-blue-600",
      delay: "500ms"
    }
  ];

  const slides = [
    "Precision Fibre Optics",
    "Lightning-Fast Connections",
    "Zero Downtime Networks",
    "Signal Integrity Guaranteed",
    "Expert Splicing Services"
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
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light blue abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Sliding Text */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              FIBRE OPTIC SPECIALISTS
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
                className={`text-4xl md:text-5xl lg:text-6xl font-bold absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === activeSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  {slide}
                </span>
              </h2>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8 mb-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  setIsHovered(true);
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? 'bg-blue-500 w-8'
                    : 'bg-blue-200 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional fibre optic services for <span className="font-semibold text-blue-600">telecommunications</span>, 
            <span className="font-semibold text-cyan-600"> data centers</span>, and 
            <span className="font-semibold text-indigo-600"> enterprise networks</span>. 
            We deliver precision, reliability, and speed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;