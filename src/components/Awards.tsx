import React from 'react';
import './Awards.css';
import { awardsOf, siteConfig } from '../config';
import { tr, useLang } from '../i18n';

type ResolvedAward = {
  year: string;
  month: string;
  category: string;
  venue: string;
  url?: string;
};

const Awards: React.FC = () => {
  const lang = useLang();

  const derived: ResolvedAward[] = siteConfig.publications.flatMap((p) => {
    const names = awardsOf(p).map((award) => tr(award, lang).replace(/\s*受賞\s*$/, ''));
    if (names.length === 0) return [];
    // 同じ論文への複数の受賞は1行にまとめる。
    return [{
      year: p.year,
      month: p.month,
      category: names.join('・'),
      venue: p.journal,
      url: p.awardUrl,
    }];
  });

  const listed: ResolvedAward[] = siteConfig.awards.map((a) => ({
    ...a,
    category: tr(a.category, lang),
    venue: tr(a.venue, lang),
  }));

  const awards = [...listed, ...derived].sort((a, b) => {
    const ka = Number(a.year) * 100 + Number(a.month);
    const kb = Number(b.year) * 100 + Number(b.month);
    return kb - ka;
  });

  return (
    <section id="awards" className="awards-section">
      <div className="container">
        <h2 className="section-title">AWARDS</h2>

        <div className="award-list">
          {awards.map((a, index) => (
            <div key={index} className="award-row">
              <div className="award-date">{a.year}.{a.month}</div>

              <div className="award-venue">{a.venue}</div>

              <div className="award-category">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="award-link">
                    {a.category}
                    <span className="award-link-icon">↗</span>
                  </a>
                ) : (
                  a.category
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
