import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';

export const JournalPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 space-y-12">
      <div className="space-y-4">
        <span className="font-sans text-xs font-bold tracking-[0.25em] text-[#C5A880] uppercase">
          ROUTE: /JOURNAL
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-normal text-[#121212]">
          Editorial Journal
        </h1>
        <p className="font-sans text-base text-[#8C8275] max-w-xl">
          Renovation insights, spatial layout guides, and material advice for homeowners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {JOURNAL_ARTICLES.map((article) => (
          <Link
            key={article.id}
            to={`/journal/${article.slug}`}
            className="group rounded-2xl border border-[#121212]/10 bg-[#F9F8F6] p-8 space-y-4 transition-all hover:border-[#121212]"
            data-cursor="hover"
            data-cursor-text="READ"
          >
            <div className="flex items-center justify-between text-xs font-sans text-[#8C8275]">
              <span className="font-bold text-[#C5A880] tracking-widest uppercase">{article.category}</span>
              <span>{article.readTime}</span>
            </div>
            <h2 className="font-serif text-2xl font-normal text-[#121212] group-hover:text-[#8C8275] transition-colors leading-snug">
              {article.title}
            </h2>
            <p className="font-sans text-xs text-[#8C8275] leading-relaxed">
              {article.summary}
            </p>
            <div className="pt-4 flex items-center space-x-2 font-sans text-xs font-semibold text-[#121212] uppercase tracking-wider">
              <span>Read Article</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
