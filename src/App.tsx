import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Awards from './components/Awards';
import Publications from './components/Publications';
import BackToTop from './components/BackToTop';
import { LangContext, prefersJapanese, readStoredLang, tr, ui, type Lang } from './i18n';
import './App.css';

const Site: React.FC<{ lang: Lang }> = ({ lang }) => {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = tr(ui.pageTitle, lang);
  }, [lang]);

  return (
    <LangContext.Provider value={lang}>
      <div className="app">
        <Header />
        <main>
          <Profile />
          <Awards />
          <Publications />
        </main>
        <footer className="footer">
          <div className="container">
            <p className="serif">©Yoshiki WATANABE</p>
          </div>
        </footer>
      </div>
      <BackToTop />
    </LangContext.Provider>
  );
};

/**
 * "/" is the Japanese page, but visitors arriving with a non-Japanese browser and
 * no explicit choice yet are sent to the English one.
 */
const DefaultRoute: React.FC = () => {
  if (!readStoredLang() && !prefersJapanese()) {
    return <Navigate to="/en" replace />;
  }
  return <Site lang="ja" />;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultRoute />} />
      <Route path="/en" element={<Site lang="en" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
