'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { NEWS_LIST } from '@/data/siteData';
import { Logo } from '@/components/ui/Logo';
import { Calendar, Search, ImageOff } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const NewsSection: React.FC = () => {
  const [showAllNews, setShowAllNews] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const { t } = useLanguage();

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const newsList = NEWS_LIST.map((item) => {
    const translation = t.news.list.find((news) => news.id === item.id);
    return {
      ...item,
      title: translation ? translation.title : item.title,
      summary: translation ? translation.summary : item.summary,
      date: translation ? translation.date : item.date,
      statusTag: translation ? translation.statusTag : item.statusTag,
      author: {
        ...item.author,
        role: translation ? translation.authorRole : item.author.role,
      },
    };
  });

  const filteredNews = newsList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="noticias" className="py-20 bg-[#f4f7ed] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.news.title}
          subtitle={t.news.subtitle}
        />

        {showAllNews && (
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-emerald-100/60 mb-10">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.news.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-all"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 px-1">
              {filteredNews.length} {t.news.foundCount}
            </p>
          </div>
        )}

        {!showAllNews ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {newsList.slice(0, 3).map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100/80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <Logo className="scale-90 origin-left" />
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-xl font-extrabold text-brand-dark mb-4 leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-sm text-emerald-900/75 leading-relaxed font-normal">
                    {news.summary}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{news.date}</span>
                  </div>

                  <div className="flex items-center justify-start pt-4 border-t border-gray-100">
                    <span className="inline-block bg-emerald-50 text-brand-emerald font-semibold text-xs px-3 py-1 rounded-full border border-emerald-200">
                      {news.statusTag}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="space-y-8 mb-12">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-100/60 flex flex-col gap-6"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-3">
                    {news.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{news.date}</span>
                    </div>
                    <span className="inline-block bg-emerald-50 text-brand-emerald font-semibold px-3 py-0.5 rounded-full border border-emerald-200">
                      {news.statusTag}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {news.summary}
                </p>

                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gradient-to-br from-brand-dark via-emerald-900 to-emerald-950 min-h-[250px] flex items-center justify-center">
                  {!imageErrors[news.id] && news.image ? (
                    <img
                      src={news.image}
                      alt={news.title}
                      onError={() => handleImageError(news.id)}
                      className="w-full h-auto max-h-[500px] object-cover"
                      suppressHydrationWarning
                    />
                  ) : (
                    <div className="w-full h-48 flex flex-col items-center justify-center text-emerald-300/40 p-4">
                      <ImageOff className="w-12 h-12 mb-1 stroke-[1.5]" />
                      <span className="text-xs font-semibold">{news.title}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => setShowAllNews(!showAllNews)}
            className="bg-white/80 backdrop-blur-sm hover:bg-brand-dark hover:text-white"
          >
            {showAllNews ? t.news.viewLess : t.news.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};
