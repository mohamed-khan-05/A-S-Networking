import React from "react";
import {
  CheckCircle,
  Users,
  Clock,
  Award,
  Target,
  BarChart,
  Wifi,
  Cable,
  Camera,
  Phone,
  Server,
  Shield,
  Building,
  Hospital,
  Banknote,
  Trophy,
  Repeat,
  Zap,
  Cpu,
  Database,
  Globe,
  Network,
} from "lucide-react";

const Testimonials = () => {
  const darkBlue = "#002970"; // Deep navy
  const brightBlue = "#004FCB"; // Bright blue
  const lightBg = "#f0f6ff"; // Light blue background
  const mediumBlue = "#0038a8"; // Medium blue for gradients

  const services = [
    { name: "Data & Voice Networking", icon: <Phone /> },
    { name: "Structured Cabling", icon: <Cable /> },
    { name: "Fiber Optic Cabling", icon: <Zap /> },
    { name: "CCTV System", icon: <Camera /> },
    { name: "WIFI Installations", icon: <Wifi /> },
  ];

  const solutions = [
    { icon: <Cpu />, text: "LAN & Datacenter Cabling Designing" },
    {
      icon: <Database />,
      text: "Data, Voice, Optic Fiber & Data Center Structured Cabling",
    },
    {
      icon: <Cable />,
      text: "Installation of Copper & Optic Fiber Cables & Accessories",
    },
    { icon: <Cpu />, text: "Category 5e, 6 and 6a Copper infrastructure" },
    { icon: <Zap />, text: "Installation & Splicing for Optic Fiber Cables" },
    { icon: <Server />, text: "Installation of Racks & CCTV Systems" },
    { icon: <CheckCircle />, text: "Fluke Testing and Validation" },
    { icon: <Shield />, text: "Annual Maintenance Contracts" },
  ];

  const clients = [
    {
      name: "STD BANK KINGSMEAD",
      work: "5,000 network points, SystemX CAT6, Fibre and TEL backbone cables",
      logo: "🏦",
    },
    {
      name: "MOSES MABIDA STADIUM",
      work: "2,500 network points, SystemX CAT6, 36 cabinets",
      logo: "🏟️",
    },
    {
      name: "REWARDS CO",
      work: "6,000 Krone CAT6 points, 24 cabinets, Fibre, 150 WIFI",
      logo: "🎯",
    },
    {
      name: "MR PRICE HAMERSDALE",
      work: "950 Uniprice CAT6 points, 28 cabinets, 130 WIFI",
      logo: "🏬",
    },
    {
      name: "DR PIXLEY HOSPITAL",
      work: "6,000 CommScope CAT 6A points, Fibre installations, 150 WIFI",
      logo: "🏥",
    },
  ];

  const stats = [
    { icon: <Clock />, value: "15+ Years", label: "Local Market Experience" },
    { icon: <Users />, value: "100%", label: "Client Retention Rate" },
    { icon: <Repeat />, value: "Majority", label: "Repeat Projects" },
    { icon: <Award />, value: "Numerous", label: "Projects Delivered" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: lightBg }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-[#f0f6ff] border-b border-gray-100">
        {/* Decorative Background Elements - Pulsing Blurs to match Services Page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004FCB]/5 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#002970]/5 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        </div>

        {/* Subtle Network Pattern (Light Mode) */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #002970 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            {/* Established Badge */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-[#004FCB] rounded-full mr-3 animate-pulse"></div>
              <span className="text-xs font-black tracking-[0.2em] text-[#002970] uppercase">
                Established 2009
              </span>
            </div>

            {/* Company Title - Bold Navy and Bright Blue */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-[#002970]">
              A&S <span className="text-[#004FCB]">NETWORKING</span>
            </h1>

            <div className="h-1.5 w-48 bg-[#004FCB] rounded-full mx-auto mb-10"></div>

            <p className="text-2xl text-slate-500 max-w-3xl mx-auto mb-16 font-medium">
              Professional Network Infrastructure & Structured Cabling Solutions
            </p>

            {/* Services Grid - White Cards with Shadows */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#002970]/5 hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-slate-50 text-[#004FCB] group-hover:bg-[#002970] group-hover:text-white transition-colors duration-500 shadow-inner">
                      {React.cloneElement(service.icon, {
                        className: "w-7 h-7",
                      })}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#002970] uppercase tracking-wider group-hover:text-[#004FCB] transition-colors">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Company Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Company Profile Card */}
            <div
              className="bg-white rounded-3xl shadow-xl p-10"
              style={{
                borderLeft: `6px solid ${brightBlue}`,
                boxShadow: `0 10px 40px rgba(0, 47, 112, 0.1)`,
              }}
            >
              <div className="flex items-center mb-8">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mr-5 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${brightBlue}, ${darkBlue})`,
                  }}
                >
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2
                    className="text-3xl font-bold"
                    style={{ color: darkBlue }}
                  >
                    COMPANY PROFILE
                  </h2>
                  <p
                    className="text-xl font-semibold mt-1"
                    style={{ color: brightBlue }}
                  >
                    A&S Networking
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <p
                  className="text-xl leading-relaxed"
                  style={{ color: "#374151" }}
                >
                  Established with the concept of providing professional &
                  effective services for the critical backbone of a
                  communication system.
                </p>

                <div
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: `${brightBlue}08`,
                    border: `2px solid ${brightBlue}20`,
                  }}
                >
                  <h3
                    className="font-bold text-xl mb-3 flex items-center"
                    style={{ color: darkBlue }}
                  >
                    <BarChart
                      className="w-6 h-6 mr-3"
                      style={{ color: brightBlue }}
                    />
                    Our Expertise
                  </h3>
                  <p style={{ color: darkBlue }}>
                    With our expertise, we understand the complex issues
                    involved in planning, installing and maintaining network
                    communication systems.
                  </p>
                </div>

                <p className="text-lg" style={{ color: "#374151" }}>
                  We have tremendous experience in providing Data, Voice, CCTV
                  Structured Cabling and Datacenter Infrastructure cabling
                  services.
                </p>
              </div>
            </div>

            {/* Philosophy Card */}
            <div
              className="rounded-3xl p-10 text-white shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${darkBlue} 0%, ${mediumBlue} 50%, ${brightBlue} 100%)`,
              }}
            >
              <h3 className="text-3xl font-bold mb-8 text-center">
                Our Success Philosophy
              </h3>
              <div className="space-y-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <p className="italic text-2xl font-light">
                    "Deliver Cost Effective, Professional Quality Projects,
                    <br />
                    Within the deadlines agreed"
                  </p>
                </div>
                <p className="text-center font-bold text-white text-3xl">
                  "Your Success is Our Success"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-10">
            {/* Track Record Card */}
            <div
              className="bg-white rounded-3xl shadow-xl p-10"
              style={{
                boxShadow: `0 10px 40px rgba(0, 47, 112, 0.1)`,
              }}
            >
              <div className="flex items-center mb-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mr-5 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${brightBlue}, ${darkBlue})`,
                  }}
                >
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold" style={{ color: darkBlue }}>
                  Our Track Record
                </h2>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-6 text-center border hover:shadow-lg transition-all duration-300"
                    style={{
                      background: `linear-gradient(to bottom right, white, ${lightBg})`,
                      border: `2px solid ${brightBlue}20`,
                    }}
                  >
                    <div
                      className="inline-flex p-4 rounded-full mb-4 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${brightBlue}, ${darkBlue})`,
                      }}
                    >
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: darkBlue }}
                    >
                      {stat.value}
                    </div>
                    <div className="font-medium" style={{ color: brightBlue }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: `${brightBlue}08`,
                  border: `2px solid ${brightBlue}20`,
                }}
              >
                <p className="text-lg" style={{ color: darkBlue }}>
                  We have successfully delivered numerous projects of various
                  sizes, with a major portion being repeat projects from our
                  valued clients. To date, we have retained every single client
                  we have served.
                </p>
              </div>
            </div>

            {/* Commitment Card */}
            <div
              className="bg-white rounded-3xl shadow-xl p-10"
              style={{
                boxShadow: `0 10px 40px rgba(0, 47, 112, 0.1)`,
                borderTop: `6px solid ${brightBlue}`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-6 flex items-center"
                style={{ color: darkBlue }}
              >
                <CheckCircle
                  className="w-7 h-7 mr-3"
                  style={{ color: "#10B981" }}
                />
                Client Commitment
              </h3>
              <p className="text-lg mb-6" style={{ color: "#374151" }}>
                We provide our customers with the commitment required for their
                telecommunications infrastructure, for the present as well as
                future business scalability requirements.
              </p>
              <div
                className="rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
                style={{
                  background: `linear-gradient(135deg, ${brightBlue}, ${darkBlue})`,
                }}
              >
                <p className="text-white font-bold text-lg text-center">
                  Close to 15 years of local markets projects deployment
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Center Solutions Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${brightBlue}, ${darkBlue})`,
              }}
            >
              <Server className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: darkBlue }}>
              DATA & DATACENTER CONNECTIVITY SOLUTIONS
            </h2>
            <p
              className="text-xl max-w-4xl mx-auto"
              style={{ color: mediumBlue }}
            >
              Premises or Structured & Datacenter Cabling infrastructure is the
              critical core of every voice, data and multimedia communication
              system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Why It Matters Card */}
            <div
              className="bg-white rounded-3xl shadow-xl p-10"
              style={{
                boxShadow: `0 10px 40px rgba(0, 47, 112, 0.1)`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-8 flex items-center"
                style={{ color: darkBlue }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{
                    backgroundColor: `${brightBlue}15`,
                  }}
                >
                  <Globe className="w-7 h-7" style={{ color: brightBlue }} />
                </div>
                Why Proper Cabling Matters
              </h3>
              <div className="space-y-6">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#374151" }}
                >
                  It is the key to Datacenter availability and manageability.
                  Proper planning, configuration and installation for network
                  cabling connectivity is critical.
                </p>
                <div
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: `${brightBlue}08`,
                    border: `2px solid ${brightBlue}20`,
                  }}
                >
                  <p
                    className="font-semibold text-lg"
                    style={{ color: darkBlue }}
                  >
                    Prevent inefficiency, excessive heat and unnecessary expense
                    in your IT environment.
                  </p>
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#374151" }}
                >
                  A&S Networking delivers a comprehensive range of bespoke
                  network cabling solutions designed to meet our client's
                  technology requirements.
                </p>
              </div>
            </div>

            {/* Solutions Card */}
            <div
              className="rounded-3xl shadow-xl p-10"
              style={{
                background: `linear-gradient(to bottom, ${lightBg}, white)`,
                boxShadow: `0 10px 40px rgba(0, 47, 112, 0.1)`,
                border: `2px solid ${brightBlue}20`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-8 flex items-center"
                style={{ color: darkBlue }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{
                    backgroundColor: `${brightBlue}15`,
                  }}
                >
                  <CheckCircle
                    className="w-7 h-7"
                    style={{ color: brightBlue }}
                  />
                </div>
                Our Turnkey Services
              </h3>
              <div className="grid grid-cols-1 gap-5">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white p-5 rounded-2xl border hover:shadow-md transition-all duration-300"
                    style={{ borderColor: `${brightBlue}30` }}
                  >
                    <div
                      className="p-3 rounded-xl mr-4"
                      style={{
                        color: brightBlue,
                        backgroundColor: `${brightBlue}10`,
                      }}
                    >
                      {solution.icon}
                    </div>
                    <span
                      className="font-medium text-lg pt-2"
                      style={{ color: darkBlue }}
                    >
                      {solution.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client References Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${brightBlue}, ${darkBlue})`,
              }}
            >
              <Users className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: darkBlue }}>
              CLIENT REFERENCES
            </h2>
            <p
              className="text-xl max-w-4xl mx-auto"
              style={{ color: mediumBlue }}
            >
              A&S Networking has deployed large sized as well as complicated
              data/voice Structured Cabling projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Client List Card */}
            <div
              className="bg-white rounded-3xl shadow-xl p-10"
              style={{
                boxShadow: `0 10px 40px rgba(0, 47, 112, 0.1)`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-8 flex items-center"
                style={{ color: darkBlue }}
              >
                <Trophy
                  className="w-7 h-7 mr-4"
                  style={{ color: brightBlue }}
                />
                Featured Clients
              </h3>
              <div className="space-y-8">
                {clients.map((client, index) => (
                  <div key={index} className="relative group">
                    <div
                      className="absolute left-0 top-5 w-2 h-16 rounded-r-full group-hover:h-20 transition-all duration-300"
                      style={{ backgroundColor: brightBlue }}
                    ></div>
                    <div
                      className="ml-6 p-6 rounded-2xl border hover:shadow-lg transition-all duration-300"
                      style={{
                        background: `linear-gradient(to right, ${lightBg}, white)`,
                        borderColor: `${brightBlue}30`,
                      }}
                    >
                      <div className="flex items-start">
                        <div className="text-3xl mr-5">{client.logo}</div>
                        <div>
                          <h4
                            className="font-bold text-xl mb-2 group-hover:text-brightBlue transition-colors duration-300"
                            style={{ color: darkBlue }}
                          >
                            {client.name}
                          </h4>
                          <p
                            className="text-base"
                            style={{ color: mediumBlue }}
                          >
                            {client.work}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Repeat Business Card */}
            <div
              className="rounded-3xl shadow-xl p-10"
              style={{
                background: `linear-gradient(135deg, ${lightBg}, white)`,
                boxShadow: `0 10px 40px rgba(0, 47, 112, 0.1)`,
                border: `2px solid ${brightBlue}20`,
              }}
            >
              <div className="flex items-center mb-8">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mr-5 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${brightBlue}, ${darkBlue})`,
                  }}
                >
                  <Repeat className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: darkBlue }}>
                  Repeat Business Success
                </h3>
              </div>
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: mediumBlue }}
              >
                A partial list of companies that we delivered our Services to
                demonstrates our capability to handle projects of varying
                complexity and scale across diverse industries.
              </p>
              <div
                className="bg-white rounded-2xl p-6 border shadow-sm"
                style={{
                  borderColor: `${brightBlue}30`,
                }}
              >
                <p
                  className="font-bold text-lg text-center"
                  style={{ color: darkBlue }}
                >
                  We specialize in both large-scale corporate installations and
                  specialized infrastructure projects with a focus on
                  reliability and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div
          className="rounded-3xl p-12 text-white shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${darkBlue} 0%, ${mediumBlue} 50%, ${brightBlue} 100%)`,
          }}
        >
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold mb-4">Connect with Confidence</h3>
            <p className="text-xl text-white/90">
              Your trusted network infrastructure partner since 2009
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="mb-3 flex justify-center">
                  <div className="bg-white/30 p-3 rounded-xl">
                    {React.cloneElement(service.icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>
                </div>
                <span className="font-medium text-white">{service.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <p className="text-xl text-white/90">
              Ready to power your network infrastructure? Contact us today.
            </p>
          </div>
        </div>

        {/* Services Footer */}
        <div
          className="mt-16 pt-12 border-t text-center"
          style={{ borderColor: `${brightBlue}30` }}
        >
          <p
            className="text-lg uppercase tracking-widest font-bold mb-8"
            style={{ color: brightBlue }}
          >
            Our Core Services
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3 animate-pulse"
                  style={{ backgroundColor: brightBlue }}
                ></div>
                <span
                  className="text-lg font-semibold"
                  style={{ color: darkBlue }}
                >
                  {service.name}
                </span>
              </div>
            ))}
          </div>
          <div
            className="mt-10 pt-8 border-t"
            style={{ borderColor: `${brightBlue}20` }}
          >
            <p className="text-sm" style={{ color: mediumBlue }}>
              © {new Date().getFullYear()} A&S Networking. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
