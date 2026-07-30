import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Awards from './components/Awards';
import Publications from './components/Publications';
import BackToTop from './components/BackToTop';
import './App.css';

const App: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
