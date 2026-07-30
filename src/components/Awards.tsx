import React from 'react';
import './Awards.css';
import { siteConfig, type Award } from '../config';

const Awards: React.FC = () => {
  const derived: Award[] = siteConfig.publications
    .filter((p) => p.awards)
    .map((p) => ({
      year: p.year,
      month: p.month,
      category: p.awards!.replace(/\s*受賞\s*$/, ''),
      venue: p.journal,
      url: p.awardUrl,
    }));

  const awards: Award[] = [...siteConfig.awards, ...derived].sort((a, b) => {
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
