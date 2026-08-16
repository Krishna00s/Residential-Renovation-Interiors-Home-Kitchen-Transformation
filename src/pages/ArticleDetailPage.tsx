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
    <div className="mx-auto max-w-4xl px-6 md:px-12 py-16 space-y-12 bg-[#161D18] text-[#EDE8DF]">
      <div className="flex items-center justify-between">
        <Link
          to="/journal"
          className="inline-flex items-center space-x-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#8E877D] hover:text-[#EDE8DF]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Journal</span>
        </Link>
        <span className="inline-block rounded-full bg-[#1B231D] border border-[#EDE8DF]/15 px-3 py-1 font-sans text-xs font-bold text-[#C5A880] tracking-widest uppercase">
          ROUTE: /JOURNAL/{slug}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4 font-sans text-xs text-[#8E877D]">
          <span className="font-bold text-[#C5A880] tracking-widest uppercase">{article.category}</span>
          <span>•</span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-[#EDE8DF]">
          {article.title}
        </h1>
        <p className="font-sans text-lg text-[#8E877D] leading-relaxed">
          {article.summary}
        </p>
      </div>

      <div className="space-y-8 pt-8 border-t border-[#EDE8DF]/15 font-sans text-base text-[#EDE8DF] leading-relaxed">
        {article.content.map((sec, idx) => (
          <div key={idx} className="space-y-4">
            {sec.sectionHeading && (
              <h2 className="font-serif text-2xl font-medium text-[#EDE8DF] pt-4">
                {sec.sectionHeading}
              </h2>
            )}
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-[#EDE8DF]/90 font-light">{p}</p>
            ))}
            {sec.quote && (
              <blockquote className="my-6 p-6 border-l-2 border-[#C5A880] bg-[#1B231D] font-serif text-xl italic text-[#EDE8DF] rounded-r-xl">
                “{sec.quote}”
              </blockquote>
            )}
          </div>
        ))}
      </div>

      {/* Related Project Link */}
      {article.relatedProjectSlug && (
        <div className="pt-8 border-t border-[#EDE8DF]/15">
          <Link
            to={`/projects/${article.relatedProjectSlug}`}
            className="inline-flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-wider text-[#C5A880] hover:text-[#EDE8DF]"
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
