import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          
          {/* Column 1: Short About */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/images/Logo.png" 
                alt="Company Logo" 
                className="h-10 w-auto brightness-0 invert" // Makes logo white for dark bg
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the industry in precision networking infrastructure. From fiber optic fusion splicing to large-scale structured cabling, we build the backbone of modern business communication.
            </p>
          </div>

          {/* Column 2: Services Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">Fiber Optic Splicing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">Cat6A/Cat7 Installation</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">ISP & OSP Deployment</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">Rack & Stack Services</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-sky-400 transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <button className="hover:text-sky-400 transition-colors">Request a Quote</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@company.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 text-sky-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon – Fri: 9AM – 5PM<br />Dispatch Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Your Company Name. All rights reserved. Built for connectivity.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;