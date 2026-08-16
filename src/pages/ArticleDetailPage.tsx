import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journal';
import NotFoundPage from './NotFoundPage';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <NotFoundPage message={`Journal article "${slug}" not found.`} />;
  }

  return (
    <div className="mx-auto max-w-4xl px-6 md:px-12 py-16 space-y-12">
      <div className="flex items-center justify-between">
        <Link
          to="/journal"
          className="inline-flex items-center space-x-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#8C8275] hover:text-[#121212]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Journal</span>
        </Link>
        <span className="inline-block rounded-full bg-[#EAE6E1] px-3 py-1 font-sans text-xs font-bold text-[#121212] tracking-widest uppercase">
          ROUTE: /JOURNAL/{slug}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4 font-sans text-xs text-[#8C8275]">
          <span className="font-bold text-[#C5A880] tracking-widest uppercase">{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-[#121212]">
          {article.title}
        </h1>
        <p className="font-sans text-lg text-[#8C8275] leading-relaxed">
          {article.summary}
        </p>
      </div>

      <div className="space-y-8 pt-8 border-t border-[#121212]/10 font-sans text-base text-[#121212] leading-relaxed">
        {article.content.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            {sec.sectionHeading && (
              <h2 className="font-serif text-2xl font-medium text-[#121212] pt-4">
                {sec.sectionHeading}
              </h2>
            )}
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-[#121212]/80">{p}</p>
            ))}
            {sec.quote && (
              <blockquote className="my-6 p-6 border-l-2 border-[#C5A880] bg-[#EAE6E1]/30 font-serif text-xl italic text-[#121212]">
                “{sec.quote}”
              </blockquote>
            )}
          </div>
        ))}
      </div>

      {/* Related Project Link */}
      {article.relatedProjectSlug && (
        <div className="pt-8 border-t border-[#121212]/10">
          <Link
            to={`/projects/${article.relatedProjectSlug}`}
            className="inline-flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-wider text-[#C5A880] hover:text-[#121212]"
          >
            <span>View Related Project Case Study</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ArticleDetailPage;
