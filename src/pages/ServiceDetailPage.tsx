import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import NotFoundPage from './NotFoundPage';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <NotFoundPage message={`Service category "${slug}" not found.`} />;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 font-sans text-xs text-[#8C8275]">
          <Link to="/services" className="hover:text-[#121212]">Services</Link>
          <span>/</span>
          <span className="text-[#121212] font-semibold">{service.title}</span>
        </div>
        <span className="inline-block rounded-full bg-[#EAE6E1] px-3 py-1 font-sans text-xs font-bold text-[#121212] tracking-widest uppercase">
          ROUTE: /SERVICES/{slug}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#121212]">
          {service.title}
        </h1>
        <p className="font-sans text-lg text-[#8C8275] max-w-2xl leading-relaxed">
          {service.longDesc}
        </p>
      </div>

      <div className="rounded-2xl border border-[#121212]/10 bg-[#F9F8F6] p-8 space-y-6">
        <h2 className="font-sans text-xs font-bold tracking-[0.2em] text-[#C5A880] uppercase">
          TYPICAL SCOPE OF WORK
        </h2>
        <ul className="space-y-3 font-sans text-sm text-[#121212]">
          {service.scope.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <span className="text-[#C5A880] font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
