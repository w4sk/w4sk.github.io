import React from 'react';
import './Publications.css';
import { siteConfig, type Publication } from '../config';

const MY_NAMES = ["渡辺 圭貴", "渡辺圭貴", "Yoshiki Watanabe"];

const MONTH_NAMES: Record<string, string> = {
  "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr",
  "05": "May", "06": "Jun", "07": "Jul", "08": "Aug",
  "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec",
};

const renderAuthors = (authors: string) => {
  for (const name of MY_NAMES) {
    if (authors.includes(name)) {
      const parts = authors.split(name);
      return parts.reduce<React.ReactNode[]>((acc, part, i) => {
        if (i === 0) return [part];
        return [...acc, <strong key={i} className="pub-author-self">{name}</strong>, part];
      }, []);
    }
  }
  return authors;
};

const Publications: React.FC = () => {
  const publications = siteConfig.publications as Publication[];

  const grouped = publications.reduce<Record<string, Record<string, Publication[]>>>((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = {};
    if (!acc[pub.year][pub.month]) acc[pub.year][pub.month] = [];
    acc[pub.year][pub.month].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <h2 className="section-title">PUBLICATIONS</h2>

        {sortedYears.map((year) => (
          <div key={year} className="pub-year-group">
            <div className="pub-year-heading">
              <span className="pub-year-label">{year}</span>
            </div>

            {Object.keys(grouped[year])
              .sort((a, b) => Number(b) - Number(a))
              .map((month) => (
                <div key={month} className="pub-month-group">
                  <div className="pub-month-heading">
                    <span className="pub-month-number">{month}</span>
                    <span className="pub-month-abbr">{MONTH_NAMES[month]}</span>
                  </div>
                  <div className="pub-month-divider"></div>

                  <div className="pub-table">
                    {grouped[year][month].map((pub, index) => (
                      <div key={index} className="pub-row">
                        <div className="pub-category-box">
                          <div className="pub-category-tag">
                            <span className="pub-category-text">{pub.type}</span>
                          </div>
                        </div>

                        <div className="pub-info-box">
                          <h3 className="pub-title">
                            {pub.url ? (
                              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="pub-link">
                                {pub.title}
                                <span className="pub-link-icon">↗</span>
                              </a>
                            ) : (
                              pub.title
                            )}
                          </h3>
                          <div className="pub-authors">{renderAuthors(pub.authors)}</div>
                          <div className="pub-venue">{pub.journal}</div>
                          {pub.doi && <div className="pub-doi">DOI: {pub.doi}</div>}
                          {pub.awards && (
                            <div className="pub-awards">
                              <span className="pub-award-text">{pub.awards}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
