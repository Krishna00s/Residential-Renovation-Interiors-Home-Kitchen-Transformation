import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Kitchen',
    location: 'Dublin',
    budget: '€50k – €100k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12 bg-[#161D18] text-[#EDE8DF]">
      <div className="space-y-4">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ROUTE: /CONTACT
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#EDE8DF]">
          Tell us what you’re imagining.
        </h1>
        <p className="font-sans text-base text-[#8E877D] max-w-xl">
          Whether you’re planning a single-room transformation or rethinking the whole house, start with a conversation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Enquiry Form */}
        <div className="lg:col-span-8 rounded-2xl border border-[#EDE8DF]/15 bg-[#1B231D] p-8 md:p-12">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <span className="font-serif text-3xl font-normal text-[#EDE8DF]">
                Thank you for reaching out.
              </span>
              <p className="font-sans text-sm text-[#8E877D] max-w-md mx-auto">
                We have received your enquiry and our design director will get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 inline-block font-sans text-xs font-bold uppercase tracking-wider text-[#C5A880] underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-sans text-xs font-bold uppercase tracking-wider text-[#EDE8DF]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jennings"
                    className="w-full rounded-lg border border-[#EDE8DF]/15 bg-[#161D18] px-4 py-3 font-sans text-sm text-[#EDE8DF] focus:border-[#C5A880] focus:outline-hidden"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-sans text-xs font-bold uppercase tracking-wider text-[#EDE8DF]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full rounded-lg border border-[#EDE8DF]/15 bg-[#161D18] px-4 py-3 font-sans text-sm text-[#EDE8DF] focus:border-[#C5A880] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-sans text-xs font-bold uppercase tracking-wider text-[#EDE8DF]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+353 87 123 4567"
                    className="w-full rounded-lg border border-[#EDE8DF]/15 bg-[#161D18] px-4 py-3 font-sans text-sm text-[#EDE8DF] focus:border-[#C5A880] focus:outline-hidden"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="block font-sans text-xs font-bold uppercase tracking-wider text-[#EDE8DF]">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-lg border border-[#EDE8DF]/15 bg-[#161D18] px-4 py-3 font-sans text-sm text-[#EDE8DF] focus:border-[#C5A880] focus:outline-hidden"
                  >
                    <option value="Kitchen">Kitchen Renovation</option>
                    <option value="Bathroom">Bathroom Renovation</option>
                    <option value="Extension">Home Extension</option>
                    <option value="Attic">Attic / Loft Conversion</option>
                    <option value="Full Home">Full Home Renovation</option>
                    <option value="Energy">Energy Upgrade</option>
                    <option value="Not Sure">Not Sure Yet</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-sans text-xs font-bold uppercase tracking-wider text-[#EDE8DF]">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your home, ideas, timeline, or any questions..."
                  className="w-full rounded-lg border border-[#EDE8DF]/15 bg-[#161D18] px-4 py-3 font-sans text-sm text-[#EDE8DF] focus:border-[#C5A880] focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 rounded-full bg-[#C5A880] text-[#161D18] font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#EDE8DF] transition-colors shadow-lg"
                data-cursor="hover"
                data-cursor-text="SUBMIT"
              >
                Request Consultation
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Locations */}
        <div className="lg:col-span-4 space-y-8 rounded-2xl border border-[#EDE8DF]/15 bg-[#1B231D] p-8">
          <div className="space-y-2">
            <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
              STUDIO LOCATION
            </h2>
            <p className="font-sans text-sm text-[#EDE8DF] font-medium">{COMPANY_INFO.address}</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
              DIRECT CONTACT
            </h2>
            <p className="font-sans text-sm text-[#EDE8DF]">{COMPANY_INFO.phone}</p>
            <p className="font-sans text-sm text-[#EDE8DF] font-semibold">{COMPANY_INFO.email}</p>
          </div>

          <div className="space-y-2 pt-4 border-t border-[#EDE8DF]/15">
            <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
              PRIMARY SERVICE AREAS
            </h2>
            <div className="flex flex-wrap gap-2">
              {COMPANY_INFO.serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-[#161D18] border border-[#EDE8DF]/10 px-3 py-1 font-sans text-[11px] text-[#8E877D]">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
