// components/pages/ServiceCard.tsx
import React from "react";
import {
  Wifi,
  Cable,
  Server,
  Eye,
  ShieldCheck,
  Cpu,
  Network,
  Database,
  Settings,
  Globe,
  ChevronRight,
  CheckCircle,
  Phone,
  Clock,
  Award,
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "LAN & Datacenter Cabling Designing",
      description:
        "Professional design and planning for efficient network infrastructure",
      icon: <Network className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Data, Voice, Optic Fiber & Data Center Structured Cabling",
      description:
        "Complete structured cabling solutions for all connectivity needs",
      icon: <Cable className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Installation of Copper, Optic Fiber Cables & Accessories",
      description:
        "Professional installation of all cable types and related accessories",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Copper Infrastructure (Cat 5e, Cat 6, Cat 6a)",
      description:
        "Expert termination services for high-performance copper cabling",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Fiber Optic Installation & Splicing",
      description: "Precision fiber optic installation and splicing services",
      icon: <Wifi className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Rack Installation",
      description: "Professional installation of server and network racks",
      icon: <Server className="w-6 h-6" />,
    },
    {
      id: 7,
      title: "CCTV Systems Installation",
      description: "Complete CCTV installation and configuration",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      id: 8,
      title: "Fluke Testing and Validation",
      description: "Comprehensive testing and validation using Fluke equipment",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      id: 9,
      title: "Annual Maintenance Contract",
      description: "Year-round maintenance and support contracts",
      icon: <Database className="w-6 h-6" />,
    },
    {
      id: 10,
      title: "Fiber Splicing Services",
      description: "Professional fiber splicing for optimal performance",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const features = [
    "Certified Network Engineers",
    "24/7 Technical Support",
    "Industry-Best Practices",
    "Guaranteed Performance",
    "Quick Response Time",
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#002970]/10 rounded-full mb-6">
            <span className="text-[#004FCB] font-semibold text-sm">
              NETWORKING SOLUTIONS
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#002970]">
            Professional <span className="text-[#004FCB]">Networking</span>{" "}
            Infrastructure Services
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Enterprise-grade infrastructure services that connect, secure, and
            optimize your digital environment. Trusted by businesses for
            reliable, high-performance networking solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-[#002970]/5 rounded-full px-4 py-2"
              >
                <CheckCircle className="w-4 h-4 text-[#004FCB]" />
                <span className="text-[#002970] text-sm font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button className="px-8 py-4 bg-[#004FCB] text-white font-bold rounded-xl hover:bg-[#002970] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Schedule a Consultation
            <ChevronRight className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002970] mb-4">
              Our Comprehensive <span className="text-[#004FCB]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#002970] to-[#004FCB] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end networking solutions designed for modern enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-[#004FCB] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#002970] to-[#004FCB] group-hover:from-[#004FCB] group-hover:to-[#002970] transition-all duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[#002970] mb-3 group-hover:text-[#004FCB] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-[#004FCB] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 bg-gradient-to-r from-[#002970] to-[#004FCB] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/90">Uptime Guarantee</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#002970]/5 to-[#004FCB]/5 rounded-2xl p-8 md:p-12 text-center border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-[#002970] mb-4">
            Ready to Elevate Your Network Infrastructure?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our expert team for a comprehensive network assessment and
            customized solution tailored to your business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#004FCB] text-white font-bold rounded-xl hover:bg-[#002970] transition-all duration-300 shadow-lg">
              <Phone className="inline-block mr-2 w-4 h-4" />
              Get Free Assessment
            </button>
            <button className="px-8 py-3 bg-white text-[#004FCB] font-bold rounded-xl border-2 border-[#004FCB] hover:bg-[#004FCB] hover:text-white transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
            <div className="p-3 rounded-lg bg-[#002970]/10">
              <Award className="w-6 h-6 text-[#004FCB]" />
            </div>
            <div>
              <div className="font-bold text-[#002970]">Certified Experts</div>
              <div className="text-gray-600 text-sm">
                Industry-certified professionals
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
            <div className="p-3 rounded-lg bg-[#002970]/10">
              <Clock className="w-6 h-6 text-[#004FCB]" />
            </div>
            <div>
              <div className="font-bold text-[#002970]">Quick Response</div>
              <div className="text-gray-600 text-sm">
                2-hour emergency response
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
            <div className="p-3 rounded-lg bg-[#002970]/10">
              <ShieldCheck className="w-6 h-6 text-[#004FCB]" />
            </div>
            <div>
              <div className="font-bold text-[#002970]">Quality Guarantee</div>
              <div className="text-gray-600 text-sm">
                5-year service warranty
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
