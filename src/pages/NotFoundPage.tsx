import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface NotFoundPageProps {
  message?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ message }) => {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-12 py-24 text-center space-y-6 bg-[#161D18] text-[#EDE8DF]">
      <span className="inline-block rounded-full bg-[#1B231D] border border-[#EDE8DF]/15 px-4 py-1 font-sans text-xs font-bold tracking-widest text-[#C5A880] uppercase">
        404 — PAGE NOT FOUND
      </span>
      <h1 className="font-serif text-5xl md:text-7xl font-normal text-[#EDE8DF]">
        Space Out Of Bounds.
      </h1>
      <p className="font-sans text-base text-[#8E877D] max-w-md mx-auto">
        {message || 'The page or project you are looking for has moved or does not exist.'}
      </p>
      <div className="pt-6">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 rounded-full bg-[#C5A880] px-7 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-[#161D18] hover:bg-[#EDE8DF] transition-colors shadow-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return To Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
