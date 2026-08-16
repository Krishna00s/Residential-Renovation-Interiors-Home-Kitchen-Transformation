import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';

export const JournalPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-8 py-12 space-y-10 bg-[#161D18] text-[#EDE8DF]">
      <div className="space-y-3 max-w-2xl">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          EDITORIAL
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#EDE8DF]">
          Editorial Journal
        </h1>
        <p className="font-sans text-sm text-[#8E877D] font-light leading-relaxed">
          Renovation insights, spatial layout guides, and material advice for homeowners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {JOURNAL_ARTICLES.map((article) => (
          <Link
            key={article.id}
            to={`/journal/${article.slug}`}
            className="group relative rounded-xl border border-[#EDE8DF]/12 bg-[#1B231D] p-6 space-y-3.5 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:scale-[1.03] hover:border-[#C5A880] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-gpu z-10 hover:z-20"
            data-cursor="hover"
            data-cursor-text="READ"
          >
            <div className="flex items-center justify-between text-[11px] font-sans text-[#8E877D]">
              <span className="font-bold text-[#C5A880] tracking-widest uppercase">{article.category}</span>
              <span>{article.readTime}</span>
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-normal text-[#EDE8DF] group-hover:text-[#C5A880] transition-colors leading-snug">
              {article.title}
            </h2>
            <p className="font-sans text-xs text-[#8E877D] leading-relaxed font-light line-clamp-3">
              {article.summary}
            </p>
            <div className="pt-2 flex items-center space-x-2 font-sans text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
              <span>Read Article</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
